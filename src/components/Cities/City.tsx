import { Box, Flex, Image, Text, Heading } from '@chakra-ui/react';

export function City({ name, country, image, flag }) {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image src={image} alt={`Imagem da cidade: ${name}`} h="170px" w="100%" />
      <Flex
        p="6"
        align="center"
        justifyContent="space-between"
        bg="white"
        border="1px"
        borderColor="yellow.300"
        borderTop="0"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">
            {name}
          </Heading>
          <Text marginTop="3" fontSize="md" color="gray.500" fontWeight="500">
            {country}
          </Text>
        </Flex>
        <Image
          src={flag}
          alt={`bandeira da ${country}`}
          w="30px"
          h="30px"
          borderRadius="50%"
          objectFit="cover"
        />
      </Flex>
    </Box>
  );
}
