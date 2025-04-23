import { marginX } from "@/utils/constants";
import { Box, Heading, SimpleGrid, Stack, Tabs, Text } from "@chakra-ui/react";
import Image from "next/image";
import { SectionHeading } from "../common";

const Projects = () => {
  return (
    <Stack mx={marginX} align="center" my="5rem">
      <SectionHeading
        subHeading="Projects"
        mainHeading="Check My Recent Works!"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
        voluptatibus porro reprehenderit."
      />

      <Tabs.Root fitted defaultValue="all" colorPalette="primary">
        <Tabs.List>
          <Tabs.Trigger value="all">All</Tabs.Trigger>
          <Tabs.Trigger value="app">App</Tabs.Trigger>
          <Tabs.Trigger value="design">Design</Tabs.Trigger>
          <Tabs.Trigger value="web">Development</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="all">
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
            {projects.map((item, i) => (
              <ProjectCard key={i} {...item} />
            ))}
          </SimpleGrid>
        </Tabs.Content>
        <Tabs.Content value="app">
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
            {projects
              .filter((item) => item.type == "app")
              .map((item, i) => (
                <ProjectCard key={i} {...item} />
              ))}
          </SimpleGrid>
        </Tabs.Content>
        <Tabs.Content value="design">
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
            {projects
              .filter((item) => item.type == "ui")
              .map((item, i) => (
                <ProjectCard key={i} {...item} />
              ))}
          </SimpleGrid>
        </Tabs.Content>
        <Tabs.Content value="web">
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
            {projects
              .filter((item) => item.type == "web")
              .map((item, i) => (
                <ProjectCard key={i} {...item} />
              ))}
          </SimpleGrid>
        </Tabs.Content>
      </Tabs.Root>
    </Stack>
  );
};

export default Projects;

const ProjectCard = ({
  thumbnail,
  label,
}: {
  thumbnail: string;
  label: string;
}) => {
  return (
    <Stack
      as="section"
      id="projects"
      bg="gray.800"
      overflow="hidden"
      borderRadius="xl"
    >
      <Box height="20rem">
        <Image
          src={thumbnail}
          width={500}
          height={500}
          alt="Project Image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Stack p={4}>
        <Heading>{label}</Heading>
        <Text color="gray.400">Development</Text>
      </Stack>
    </Stack>
  );
};

const projects = [
  {
    type: "app",
    label: "App Development",

    thumbnail: "/projects/app.jpg",
  },
  {
    type: "app",
    label: "Native Apps",
    thumbnail: "/projects/app2.jpg",
  },
  {
    type: "ui",
    label: "Design",
    thumbnail: "/projects/ui.jpg",
  },
  {
    type: "ui",
    label: "UX",
    thumbnail: "/projects/ui2.jpg",
  },
  {
    type: "web",
    label: "Web Apps",
    thumbnail: "/projects/web.jpg",
  },
  {
    type: "web",
    label: "Website",
    thumbnail: "/projects/web2.jpg",
  },
];
