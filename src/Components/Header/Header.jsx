import React from "react";
import { Text, Flex, Input, Button, Select } from "@chakra-ui/react";
import categories from "../../data/category";

const Header = ({ category, setcategory, word, setword }) => {
  const handleChange = (lang) => {
    setcategory(lang);
    setword("");
  };
  return (
    <Flex
      alignItems="center"
      justifyContent="space-evenly"
      flexDirection="column"
      h="35vh"
      w="100%"
    >
      <Text className="title" fontSize="7vw" textTransform="uppercase">
        {word ? word : "Dictionary 101"}
      </Text>
      <Input
        variant="flushed"
        w="50%"
        value={word}
        onChange={(e) => setword(e.target.value)}
      />
      <Select
        placeholder="Select option"
        w="sm"
        value={category}
        onChange={(e) => handleChange(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category.label} value={category.label}>
            {category.value}
          </option>
        ))}
      </Select>
    </Flex>
  );
};

export default Header;
