import { marginX } from "@/utils/constants";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      as="footer"
      py="1rem"
      borderTop="2px solid var(--chakra-colors-gray-700)"
    >
      <Flex
        justify="space-between"
        flexDir={{ base: "column", md: "row" }}
        mx={marginX}
        gap={2}
      >
        <Flex gap={2}>
          {footerItems.map((item) => (
            <Text color="gray.400" key={item}>
              {item}
            </Text>
          ))}
        </Flex>
        <Text color="gray.400">
          © Copyright All rights reserved TechWithtWin
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;

const footerItems = ["Privacy Policy", "Terms And Conditions", "Contact"];
