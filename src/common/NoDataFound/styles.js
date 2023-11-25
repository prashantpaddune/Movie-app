import styled from 'styled-components';

const NoDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
`;

const Message = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
`;

const Suggestion = styled.p`
  font-size: 1.2em;
`;

export {
    NoDataContainer,
    Message,
    Suggestion
}