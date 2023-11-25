import styled from 'styled-components';
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const PageButton = styled.button`
  padding: 8px 16px;
  margin: 0 5px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: grey;
    transform: none;
  }
`;

const PageInfo = styled.span`
  margin: 0 10px;
`;

export { PaginationContainer, PageButton, PageInfo };