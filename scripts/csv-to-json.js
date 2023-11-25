const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');

const csvFilePath = path.join(__dirname, '100movies.csv');
const jsonFilePath = path.join(__dirname, 'output.json');

const results = [];

fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        fs.writeFile(jsonFilePath, JSON.stringify(results, null, 2), (err) => {
            if (err) {
                console.error('An error occurred:', err);
                return;
            }
            console.log('CSV file successfully converted to JSON!');
        });
    });
