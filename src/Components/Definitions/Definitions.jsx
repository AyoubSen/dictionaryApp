import React from "react";
import { Flex, Text, Container, Divider, Box } from "@chakra-ui/react";
import "./def.css";
const Definitions = ({ word, meanings, category }) => {
  return (
    <Flex
      className="defs"
      flexDirection="column"
      overflowY="scroll"
      h="55vh"
      border="10px solid rgb(105,105,105)"
      borderRadius="10px"
      padding="10px 20px"
      overflowX="hidden"
    >
      {meanings[0] && word && category === "en" && (
        <audio
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          style={{ backgroundColor: "#ffffff", borderRadius: 10 }}
          controls
        >
          Your browser does not support audio elements.
        </audio>
      )}
      {word === "" ? (
        <Text fontSize="5vw">Start by typing a word!</Text>
      ) : (
        meanings.map((meaning) =>
          meaning.meanings.map((item) =>
            item.definitions.map((def) => (
              <Flex
                bg="#ffffff"
                color="#000000"
                flexDirection="column"
                borderRadius="10px"
                padding="10px 20px"
                margin="10px 0"
              >
                <Text fontWeight="bold">{def.definition}</Text>
                <Divider bg="#000000" w="100%" />
                {def.example && (
                  <Box>
                    <Text fontWeight="bold">Example:</Text>
                    {def.example}
                  </Box>
                )}
                {def.synonyms && (
                  <Box>
                    <Text fontWeight="bold">Synonyms:</Text>
                    {def.synonyms.map((s) => `${s}, `)}
                  </Box>
                )}
              </Flex>
            ))
          )
        )
      )}
    </Flex>
  );
};

export default Definitions;
