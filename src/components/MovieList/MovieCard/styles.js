import styled from "styled-components";

const Card = styled.div`
  background-color: #333;
  color: #fff;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.5);
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 1.2em;
  color: #FBC02D;
  margin-top: 10px;
`;

const Content = styled.div`
  padding: 20px;
`;

export {
    Card,
    Image,
    Title,
    Content
}