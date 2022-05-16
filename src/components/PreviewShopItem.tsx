import { Box, Flex, Image, Text } from "@chakra-ui/react";
import ChairImage from "../assests/images/sofa_one_bg.png";
import PreviewShopItemDetail from "./PreviewShopItemDetail";

export default function PreviewShopItem() {
  return (
    <Flex>
      <Box mb={10} width={500} position="relative">
        <Box mx={5} position="relative">
          <Image src={ChairImage}  alt="chair image" loading="lazy" position="absolute" borderRadius="2xl" />
        </Box>
        <Flex background="white" px={4} py={2} boxShadow={"rgba(0, 0, 0, 0.1) 0px 10px 50px"} flexDirection="column" justifyContent="end" height={450} mt={32} borderRadius="2xl">
          <Text fontWeight={600} fontSize="2xl">Sofa "Arson"</Text>
          <Text color="gray.400" fontSize="md" fontWeight={400}>Loan Furniture</Text>
          <Flex justifyContent="space-between" fontSize={"2xl"} width="full" mt={2} fontWeight={700}>
            <Text>750$</Text>
            <Text>⭐4.8</Text>
          </Flex>
        </Flex>
      </Box>
      <PreviewShopItemDetail />
    </Flex>
  )
}