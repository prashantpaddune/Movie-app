import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  padding: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`;

const SearchInput = styled.input`
  width: 50%;
  padding: 10px 15px;
  margin: 15px 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  font-size: 16px;
`;

const Heading = styled.h1`
  text-align: center;
  margin-top: 20px;
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SortSelect = styled.select`
  padding: 10px 15px;
  margin: 15px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  font-size: 16px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export {
    Container,
    Wrapper,
    SearchInput,
    Heading,
    Header,
    SortSelect,
    FilterContainer
}