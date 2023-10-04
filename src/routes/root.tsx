import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./sidebar";

export default function Root() {
  return (
    <>
      <Flex h={"100vh"}>
        <Box flex='1' shadow={'5xl'} p={4} borderRadius={'lg'} bg={'#a3b18a'}>
          <Sidebar/>
        </Box>
        <Box flex='4' p={4} borderRadius={'lg'} bg={'#dad7cd'}>
          <Outlet/>
        </Box>
      </Flex>
    </>
  )
}