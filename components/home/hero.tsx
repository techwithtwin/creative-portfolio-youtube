import { marginX } from "@/utils/constants";
import { Box, Button, Flex, Heading, Stack } from "@chakra-ui/react";
import React from "react";

const HeroSection = () => {
  return (
    <Box
      id="home"
      as="section"
      bgSize="cover"
      bgImage="url(/bg.jpg)"
      bgPos="50% 90%"
    >
      <Flex mx={marginX} h={{ base: "80vh", lg: "90vh" }} align="center">
        <Stack gap={6} align="center">
          <Heading
            as="h1"
            textAlign="center"
            fontSize="5rem"
            lineHeight="5rem"
            fontWeight="extrabold"
          >
            Hey! I&apos;m <br />{" "}
            <Box
              as="span"
              bg="linear-gradient(95deg,#059dff 15%,#6549d5 45%,#e33fa1 75%,#fb5343 100%) 98% / 200% 100%"
              bgClip="text"
            >
              Bonface Maina
            </Box>
          </Heading>
          <Button variant="subtle" size="xl" borderRadius="2xl">
            Contact Me
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default HeroSection;
