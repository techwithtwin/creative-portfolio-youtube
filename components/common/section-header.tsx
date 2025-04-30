import { Heading, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  subHeading: string;
  mainHeading: string;
  description: string;
}

const SectionHeader = ({ subHeading, mainHeading, description }: Props) => {
  return (
    <>
      <Text
        fontWeight="semibold"
        fontSize="xl"
        bg="linear-gradient(95deg,#059dff 15%,#6549d5 45%,#e33fa1 75%,#fb5343 100%) 98% / 200% 100%"
        bgClip="text"
      >
        {subHeading}
      </Text>
      <Heading fontSize="3xl" lineHeight="3xl" textAlign="center">
        {mainHeading}
      </Heading>
      <Text color="gray.400" fontSize="lg" textAlign="center">
        {description}
      </Text>
    </>
  );
};

export default SectionHeader;
