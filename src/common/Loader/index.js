import { Container } from "./styles";

const Loader = (props) => {
    return (
        <Container {...props}>
            <div className="spinner"/>
        </Container>
    );
}

export default Loader;