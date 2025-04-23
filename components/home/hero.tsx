import { marginX } from "@/utils/constants";
import { Box, Button, Flex, Heading, Stack } from "@chakra-ui/react";
import React from "react";

const HeroSection = () => {
  return (
    <Box
      as="section"
      id="home"
      bgImage="url(/bg.jpg)"
      bgSize="cover"
      bgPos="50% 90%"
    >
      <Flex mx={marginX} h="90vh" align="center">
        <Stack align="center" gap={6}>
          <Heading
            as="h1"
            textAlign="center"
            fontSize="5rem"
            lineHeight="5rem"
            fontWeight="extrabold"
          >
            Hey! I&apos;m <br />
            <Box
              as="span"
              bg="linear-gradient(95deg,#059dff 15%,#6549d5 45%,#e33fa1 75%,#fb5343 100%) 98% / 200% 100%"
              backgroundClip="text"
            >
              Bonface Maina
            </Box>
          </Heading>
          <Button
            variant="outline"
            size="xl"
            w="fit-content"
            borderRadius="2xl"
          >
            Contact Me
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default HeroSection;
