"use client";

import { Box, CloseButton, Drawer, Portal, Text } from "@chakra-ui/react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { navItems } from ".";
import { useRouter } from "next/navigation";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleNavigate = (to: string) => {
    setOpen(false);
    router.push(to);
  };

  return (
    <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
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
            <Drawer.Body spaceY={6}>
              {navItems.map((item, i) => (
                <>
                  <Text
                    onClick={() => handleNavigate(item.href)}
                    py={3}
                    key={i}
                    fontSize="xl"
                    fontWeight="semibold"
                  >
                    {item.label}
                  </Text>
                  <hr />
                </>
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
