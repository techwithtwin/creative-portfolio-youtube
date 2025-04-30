import { marginX } from "@/utils/constants";
import { Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { SectionHeading } from "../common";

const TestimonialSection = () => {
  return (
    <Stack mx={marginX} id="testimonials" as="section" align="center" my="5rem">
      <SectionHeading
        subHeading="Testimonials"
        mainHeading="Awesome Clients Feedback"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptatibus porro reprehenderit."
      />
      <SimpleGrid mt="5rem" columns={{ base: 1, md: 3 }} gap={8}>
        {[1, 2, 3].map((item) => (
          <TestimonialCard key={item} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default TestimonialSection;

const TestimonialCard = () => {
  return (
    <Stack
      textAlign="center"
      p="2rem"
      pt="5rem"
      bg="gray.800"
      pos="relative"
      borderRadius="xl"
      gap={4}
    >
      <Stack
        boxSize="7rem"
        border="4px solid var(--chakra-colors-secondary-800)"
        overflow="hidden"
        pos="absolute"
        top={0}
        left="50%"
        transform="translate(-50%, -50%)"
        borderRadius="full"
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
      <Stack>
        <Heading>Bonface Maina</Heading>
        <Text
          bg="linear-gradient(95deg,#059dff 15%,#6549d5 45%,#e33fa1 75%,#fb5343 100%) 98% / 200% 100%"
          bgClip="text"
          fontWeight="semibold"
        >
          Sr App Developer
        </Text>
      </Stack>
    </Stack>
  );
};
