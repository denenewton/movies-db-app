import {
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { DocumentData } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import SearchContext from "../contexts/SearchContext";
import { Movie } from "./RegisterMovies";

const ListMovies = () => {
  const [filterMov, setFilterMov] = useState<Movie[]>([]);
  const { movies, searchText } = useContext(SearchContext);

  useEffect(() => {
    const m = movies.filter((m) =>
      m.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterMov(m);
  }, [searchText]);

  return (
    <div>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={4}
      >
        {(searchText === '' ? movies : filterMov).map((m: DocumentData) => (
          <Card key={m.title} overflow="hidden">
            <Link to={`/details/${m.title}`}>
              <Image src={m.url} />
            </Link>
            <CardBody>
              <Heading fontSize={25}>{m.title}</Heading>
              <Text fontSize={20}>{m.genre}</Text>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default ListMovies;
