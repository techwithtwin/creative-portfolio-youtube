import { marginX } from "@/utils/constants";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import MobileNav from "./mobile-nav";

const Navbar = () => {
  const threshold = "lg";
  return (
    <Box as="nav" borderBottom="1px solid var(--chakra-colors-gray-700)">
      <Flex mx={marginX} justify="space-between" align="center" py="1rem">
        <Heading
          bg="linear-gradient(95deg,#059dff 15%,#6549d5 45%,#e33fa1 75%,#fb5343 100%) 98% / 200% 100%"
          fontSize="3xl"
          backgroundClip="text"
        >
          TechWithTwin.
        </Heading>
        <Flex gap={4} hideBelow={threshold}>
          {navItems.map((item, i) => (
            <Text
              key={i}
              fontSize="lg"
              fontWeight="semibold"
              color="gray.400"
              _hover={{
                color: "primary",
              }}
            >
              {item.label}
            </Text>
          ))}
        </Flex>
        <Button
          hideBelow={threshold}
          bg="linear-gradient(95deg,#059dff 15%,#6549d5 45%,#e33fa1 75%,#fb5343 100%) 98% / 200% 100%"
          borderRadius="xl"
          color="white"
          fontWeight="semibold"
          textTransform="uppercase"
        >
          Contact Me
        </Button>
        <Box hideFrom={threshold}>
          <MobileNav />
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;

export const navItems = [
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
