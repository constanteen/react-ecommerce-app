import { Box, Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import './App.css';
import ShopLayout from './components/Layout/Layout';
import PreviewShopItem from './components/PreviewShopItem';
import ShopItem from './components/ShopItem';

function App() {
	return (
		<ShopLayout>
			<Box mx={5} my={5}>
				<Grid templateColumns="repeat(8, 1fr)" gap={4}>
					<GridItem rowSpan={2} colSpan={2}>
						<SimpleGrid>
							<ShopItem />
							<ShopItem />
						</SimpleGrid>
					</GridItem>
					<GridItem colSpan={6}>
						<SimpleGrid>
            	<PreviewShopItem />
						</SimpleGrid>
          </GridItem>
				</Grid>
        <SimpleGrid columns={4} gap={10}>
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
        </SimpleGrid>
			</Box>
		</ShopLayout>
	);
}

export default App;
