import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../components/sidebar";

export default function Root() {
  return (
    <>
      <Flex h={"75vh"} shadow={'2xl'} borderRadius='lg'>
        <Box flex='1' p={4} bg={'#a3b18a'} borderLeftRadius={'lg'}>
          <Sidebar/>
        </Box>
        <Box flex='4' p={4} bg={'#dad7cd'} borderRightRadius={'lg'}>
          <Outlet/>
        </Box>
      </Flex>
    </>
  )
}