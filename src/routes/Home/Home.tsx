import { Outlet } from "react-router-dom";
import ListMovies from "../../components/ListMovies";
import { Container } from "@chakra-ui/react";

const Home = () => {
  return (
    <Container maxW="100%" px={5}>
      {" "}
      <ListMovies />
      <Outlet />
    </Container>
  );
};

export default Home;
