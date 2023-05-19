import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import RegisterMovies from "../../components/RegisterMovies";

interface Props {
  imageURL: string;
  setImageURL: (arg: string) => void;
}
const Register = ({ imageURL, setImageURL }: Props) => {
  return (
    <>
      <Container mt={10} alignItems="center">
        <RegisterMovies imageURL={imageURL} setImageURL={setImageURL} />
      </Container>
      <Outlet />
    </>
  );
};

export default Register;
