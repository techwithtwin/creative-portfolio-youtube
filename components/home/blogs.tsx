import { marginX } from "@/utils/constants";
import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { SectionHeading } from "../common";
import Image from "next/image";

const BlogSection = () => {
  return (
    <Stack my="5rem" id="blogs" as="section" mx={marginX} align="center">
      <SectionHeading
        subHeading="Latest News"
        mainHeading="Our Latest News"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptatibus porro reprehenderit."
      />

      <SimpleGrid mt="2rem" columns={{ base: 1, md: 3 }} gap={8}>
        {news.map((blog, i) => (
          <Stack key={i} bg="gray.800" borderRadius="xl" overflow="hidden">
            <Box>
              <Image
                src={blog.thumbnail}
                width={500}
                height={500}
                alt={blog.title}
              />
            </Box>
            <Stack p={4}>
              <Text color="gray.400">TechWithTwin / {blog.date}</Text>
              <Heading>{blog.title}</Heading>
            </Stack>
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default BlogSection;

const news = [
  {
    thumbnail: "/blogs/ai.jpg",
    title: "Why AI is dominating",
    date: "12 Nov 2021",
  },
  {
    thumbnail: "/blogs/design.jpg",
    title: "How To Design Using Canva",
    date: "21 May 2022",
  },
  {
    thumbnail: "/blogs/day.jpg",
    title: "Day In Life Of A Software Developer",
    date: "30 Jan 2023",
  },
];
