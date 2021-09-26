import { Grid, GridItem } from '@chakra-ui/react';
import { Caracteristc } from './Characteristic';

export function Caracteristcs() {
  return (
    <Grid
      templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5,1fr)']}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      mx="auto"
      mt={['10', '32']}
      maxW="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <Caracteristc icon="cocktail" text="vida noturna" />
      </GridItem>
      <GridItem>
        <Caracteristc icon="surf" text="praia" />
      </GridItem>
      <GridItem>
        <Caracteristc icon="building" text="moderno" />
      </GridItem>
      <GridItem>
        <Caracteristc icon="museum" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Caracteristc icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  );
}
