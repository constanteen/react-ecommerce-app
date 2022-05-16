import { Box, Flex, Image, Text } from "@chakra-ui/react";
import ChairImage from "../assests/images/sofa_one_bg.png";

export default function ShopItem() {
  return (
    <Box mb={10} minWidth={250} width={250} position="relative">
      <Box mx={4} position="relative">
        <Image src={ChairImage}  alt="chair image" loading="lazy" position="absolute" borderRadius="2xl" />
      </Box>
      <Flex background="white" px={4} py={2} boxShadow={"rgba(0, 0, 0, 0.1) 0px 10px 50px"} flexDirection="column" justifyContent="end" height={270} mt={10} borderRadius="2xl">
        <Text fontWeight={600} fontSize="lg">Sofa "Arson"</Text>
        <Text color="gray.400" fontSize="xs" fontWeight={400}>Loan Furniture</Text>
        <Flex justifyContent="space-between" width="full" mt={2} fontWeight={700}>
          <Text>750$</Text>
          <Text>⭐4.8</Text>
        </Flex>
      </Flex>
    </Box>
  )
}