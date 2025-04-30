import { Box, CloseButton, Drawer, Portal, Text } from "@chakra-ui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { navItems } from ".";

const MobileNav = () => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Box asChild boxSize={8}>
          <GiHamburgerMenu />
        </Box>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header />
            <Drawer.Body>
              {navItems.map((item, i) => (
                <Box key={i} spaceY={6}>
                  <Text py={3} fontSize="xl" fontWeight="semibold">
                    {item.label}
                  </Text>
                </Box>
              ))}
            </Drawer.Body>

            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default MobileNav;
