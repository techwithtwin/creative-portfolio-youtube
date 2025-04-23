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

const AboutMe = () => {
  return (
    <Box
      id="about"
      as="section"
      pos="relative"
      mt="-2rem"
      mb="10rem"
      borderRadius="xl"
      bg="black"
      overflow="hidden"
      p={4}
      w="60vw"
      mx="auto"
      _before={{
        content: "''",
        pos: "absolute",
        top: "auto",
        left: "-250px",
        bottom: "-250px",
        bgImage: "linear-gradient(45deg, #059dff,#36c6f0)",
        zIndex: 1,
        width: "500px",
        height: "500px",
        borderRadius: "full",
        opacity: 0.2,
        filter: "blur(100px)",
      }}
      _after={{
        content: "''",
        pos: "absolute",
        top: "-250px",
        right: "-250px",
        bottom: "auto",
        bgImage: "linear-gradient(45deg, #fb5343,#6549d5)",
        zIndex: 1,
        width: "500px",
        height: "500px",
        borderRadius: "full",
        opacity: 0.2,
        filter: "blur(100px)",
      }}
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} alignItems="center">
        <Box
          borderRadius="xl"
          zIndex={2}
          asChild
          width="100%"
          height="25rem"
          objectFit="cover"
        >
          <Image
            src="/about.png"
            width={300}
            height={300}
            alt="About Me Image"
          />
        </Box>
        <Stack>
          <Heading fontSize="3xl">I&apos;m a Web Developer</Heading>
          <Text>
            Web designer and developer working for TechWithTwin.com in Nairobi,
            Kenya.
          </Text>
          {contactData.map((data, i) => (
            <Flex key={i} gap={2} align="center">
              <Box asChild color="primary">
                {data.icon}
              </Box>
              <Text>{data.label}</Text>
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

export default AboutMe;

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
