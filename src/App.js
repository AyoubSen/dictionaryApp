import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Box, Flex } from "@chakra-ui/react";
import Header from "./Components/Header/Header";
import Definitions from "./Components/Definitions/Definitions";
import "./Components/Header/Header.css";
function App() {
  const [meanings, setmeanings] = useState([]);
  const [word, setword] = useState("");
  const [category, setcategory] = useState("en");
  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setmeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dictionaryApi();
  }, [word, category]);

  return (
    <Box h="100vh" bg="#282c34" color="#ffffff">
      <Container maxW="80%">
        <Flex flexDir="column" h="100vh">
          <Header
            category={category}
            setcategory={setcategory}
            word={word}
            setword={setword}
          />
          {meanings && (
            <Definitions word={word} meanings={meanings} category={category} />
          )}
        </Flex>
      </Container>
    </Box>
  );
}

export default App;
