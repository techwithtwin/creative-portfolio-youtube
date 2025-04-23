import { marginX } from "@/utils/constants";
import { Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { SectionHeading } from "../common";

const Testimonials = () => {
  return (
    <Stack mx={marginX} align="center" my="5rem">
      <SectionHeading
        subHeading="Testimonials"
        mainHeading="Awesome Clients Feedback."
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
    voluptatibus porro reprehenderit."
      />
      <SimpleGrid mt="5rem" columns={{ base: 1, md: 3 }} gap={8}>
        {[1, 2, 3].map((author) => (
          <TestimonialCard key={author} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default Testimonials;

const TestimonialCard = () => {
  return (
    <Stack
      as="section"
      id="testimonials"
      align="center"
      textAlign="center"
      p="2rem"
      pt="5rem"
      pos="relative"
      bg="gray.800"
      borderRadius="xl"
      gap={4}
    >
      <Stack
        border="4px solid var(--chakra-colors-secondary-800)"
        overflow="hidden"
        borderRadius="full"
        pos="absolute"
        boxSize="7rem"
        top={0}
        left="50%"
        transform="translate(-50%,-50%)"
      >
        <Image
          src="/TechWithTwin.jpg"
          width={200}
          height={200}
          alt="TechWithTwin Profile"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Stack>

      <Text>
        “ Excepteur sint occaecat cupidatat non proident mollit anim..„
      </Text>
      <Stack gap={1}>
        <Heading>Bonface Maina</Heading>
        <Text
          fontWeight="semibold"
          bg="linear-gradient(95deg,#059dff 15%,#6549d5 45%,#e33fa1 75%,#fb5343 100%) 98% / 200% 100%"
          backgroundClip="text"
        >
          Sr App Developer
        </Text>
      </Stack>
    </Stack>
  );
};
