import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Flex as="nav" justify="space-between">
      <Heading>TechWithTwin</Heading>

      <Flex>
        {navItems.map((item, i) => (
          <Text key={i}>{item.label}</Text>
        ))}
      </Flex>
      <Button>Contact Me</Button>
    </Flex>
  );
};

export default Navbar;

const navItems = [
  {
    label: "Home",
  },
  {
    label: "About",
  },
  {
    label: "Brands",
  },
  {
    label: "Portfolio",
  },
  {
    label: "Blog",
  },
];
