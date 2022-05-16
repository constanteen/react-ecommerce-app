import { Box, Button, Flex, IconButton, Text } from "@chakra-ui/react";
import { FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";

export default function PreviewShopItemDetail() {
	return (
		<Flex mt={10} mx={5} flex={1} flexDirection="column">
			<Flex justifyContent="space-between" mb={6}>
				<Box>1 review</Box>
				<Box marginLeft="auto">⭐⭐⭐⭐⭐</Box>
			</Flex>
			<Flex justifyContent="space-between" mb={6}>
        <Text>SOFA "MARTA"</Text>
        <Text>750$</Text>
      </Flex>
			<Text mb={6}>
        Marta is a small sofa with a big heart that fits perfectly wherever space is limited. Smartly designed, lightweight, comfortable, padded cover and useful material - good for the planet
      </Text>
			<Flex width="50%" justifyContent="space-between" mb={6}>
        <IconButton aria-label='Search database' icon={<FiTwitter />} />
        <IconButton aria-label='Search database' icon={<FiFacebook />} />
        <IconButton aria-label='Search database' icon={<FiInstagram />} />
      </Flex>
			<Box>
        <Button>
          Add to Cart
        </Button>
        <Button ml={4}>
          Add to WishList
        </Button>
      </Box>
		</Flex>
	);
}
