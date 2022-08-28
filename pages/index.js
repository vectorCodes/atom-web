import { Box, Text, HStack, Spacer, Image } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box px={24} py={4} shadow={"lg"}>
      <HStack spacing={4}>
        <Image src="/images/logo.png" alt="logo" w={10} />
        <Text fontSize={{ base: "xl", lg: "2xl" }} mt={0.5}>
          atom
        </Text>
      </HStack>
    </Box>
  );
}
