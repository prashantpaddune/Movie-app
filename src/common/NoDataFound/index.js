import React from 'react';
import {NoDataContainer, Message, Suggestion} from "@/common/NoDataFound/styles";

const NoDataFound = () => {
    return (
        <NoDataContainer>
            <Message>No Data Found</Message>
            <Suggestion>Sorry, we couldn't find any data. Please try again later</Suggestion>
        </NoDataContainer>
    );
};

export default NoDataFound;
