import { useParams } from "react-router-dom";
import useMovies from "../../hooks/useMovies";
import { Container, Box, Image, Text, Wrap, Link } from "@chakra-ui/react";

const DetailsMovie = () => {
  const { title } = useParams();
  const { movie } = useMovies(title);

  console.log(movie);

  return (
    <Container maxW="700px" bgColor="">
      {movie && (
        <Wrap mt={50} padding={5}>
          <Box bgColor="">
            <Image src={movie?.url} borderRadius={"md"}></Image>
          </Box>
          <Box alignItems={"flex-start"} bgColor="">
            <Link
              href={movie["url-movie"].replace("'", "").replace("'", "")}
              target="_blank"
              rel="noreferrer"
            >
              <Text fontSize="4xl" fontWeight={"bold"} mb={1} mt={1}>
                {" "}
                {movie.title}
              </Text>
            </Link>
            <Text fontSize="sm">
              <Text as={"b"}>Director: </Text>
              {movie.director}
            </Text>
            <Text fontSize="sm">
              <Text as={"b"}>Genre: </Text>
              {movie.genre}
            </Text>
            <Text fontSize="sm" mb={2}>
              <Text as={"b"}>Year: </Text>
              {movie.year}
            </Text>
          </Box>
          <Box fontSize={"2xl"} bgColor="">
            <Text fontWeight={"bold"} mb={1}>
              SINOPSE
            </Text>
            <Text fontSize={"sm"}> {movie.description}</Text>
          </Box>
        </Wrap>
      )}
    </Container>
  );
};

export default DetailsMovie;
