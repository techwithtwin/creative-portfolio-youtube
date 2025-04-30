import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn, MdWork } from "react-icons/md";

const AboutSection = () => {
  return (
    <Box
      mb={{ base: "5rem", md: "10rem" }}
      id="about"
      as="section"
      w={{ base: "90vw", lg: "60vw" }}
      mx="auto"
      bg="black"
      pos="relative"
      borderRadius="xl"
      mt="-2rem"
      overflow="hidden"
      p={4}
      _before={{
        content: "''",
        position: "absolute",
        top: "auto",
        left: "-250px",
        bottom: "-250px",
        width: "500px",
        height: "500px",
        bgImage: "linear-gradient(45deg, #059dff,#36c6f0)",
        zIndex: 1,
        borderRadius: "full",
        filter: "blur(100px)",
        opacity: 0.2,
      }}
      _after={{
        content: "''",
        pos: "absolute",
        top: "-250px",
        right: "-250px",
        bottom: "auto",
        zIndex: 1,
        width: "500px",
        height: "500px",
        borderRadius: "full",
        opacity: 0.2,
        filter: "blur(100px)",
        bgImage: "linear-gradient(45deg, #fb5343, #6549d5)",
      }}
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} alignItems="center">
        <Box
          h="25rem"
          zIndex={2}
          borderRadius="xl"
          asChild
          w="100%"
          objectFit="cover"
        >
          <Image
            src="/about.png"
            width={300}
            height={300}
            alt="About me image"
          />
        </Box>
        <Stack>
          <Heading fontSize="3xl">I&apos;m a Web Developer</Heading>
          <Text>
            Web designer and developer working for TechWithTwin.com in Nairobi,
            Kenya.
          </Text>
          {contactData.map((item, i) => (
            <Flex key={i} gap={2} align="center">
              <Box asChild color="primary">
                {item.icon}
              </Box>
              <Text>{item.label}</Text>
            </Flex>
          ))}
          <Button mt={2} w="fit-content" variant="subtle">
            Download My CV
          </Button>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default AboutSection;

const contactData = [
  {
    label: "Web designer & developer",
    icon: <MdWork />,
  },
  {
    label: "+254797153028",
    icon: <FaPhoneAlt />,
  },
  {
    label: "Nairobi, Kenya",
    icon: <MdLocationOn />,
  },
];
