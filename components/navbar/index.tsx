import { marginX } from "@/utils/constants";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Box borderBottom="1px solid var(--chakra-colors-gray-700)">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        py="1rem"
        mx={marginX}
      >
        <Heading
          fontSize="3xl"
          bg="linear-gradient(95deg,#059dff 15%,#6549d5 45%,#e33fa1 75%,#fb5343 100%) 98% / 200% 100%"
          backgroundClip="text"
        >
          TechWithTwin.
        </Heading>

        <Flex gap={4}>
          {navItems.map((item, i) => (
            <Text
              _hover={{
                color: "primary",
              }}
              key={i}
              fontSize="lg"
              fontWeight="semibold"
              color="gray.400"
            >
              {item.label}
            </Text>
          ))}
        </Flex>
        <Button
          bg="linear-gradient(95deg,#059dff 15%,#6549d5 45%,#e33fa1 75%,#fb5343 100%) 95%/200% 100%"
          borderRadius="xl"
          textTransform="uppercase"
          color="white"
          fontWeight="semibold"
        >
          Contact Me
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;

const navItems = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Brands",
    href: "#brands",
  },
  {
    label: "Portfolio",
    href: "#projects",
  },
  {
    label: "Blog",
    href: "#blogs",
  },
];
