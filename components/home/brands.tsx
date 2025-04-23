import { marginX } from "@/utils/constants";
import { Box, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Brands = () => {
  return (
    <Box as="section" id="brands" my="4rem" mx={marginX}>
      <SimpleGrid justifyItems="center" columns={{ base: 2, md: 4 }} gap={6}>
        {[1, 2, 3, 4].map((item) => (
          <Box as="span" key={item}>
            <Image
              src={`/brands/${item}.png`}
              width={200}
              height={100}
              alt={`Brand ${item}`}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Brands;
