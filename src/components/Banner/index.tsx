import { Flex, Heading, Image, Text } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex
      w="100%"
      h={['163px', '250px', '250px', '335px']}
      bgImage="url('/banner.jpg')"
      bgPosition={['100% 20%', '100% 20%', '100% 30%']}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        justifyContent={['center', 'space-between']}
        align="center"
        w="100%"
        mx="auto"
        px={['4', '18', '15', '20', '36']}
      >
        <div>
          <Heading
            color="gray.100"
            fontWeight="500"
            fontSize={['xl', '2l', '2xl', '4xl']}
          >
            5 continentes, <br /> infinitas possibilidades
          </Heading>
          <Text
            color="gray.500"
            mt="5"
            fontSize={['0.8rem', 'xl']}
            maxW={['100%', '100', '100%', '550px']}
          >
            Chegou a hora de você tirar do papel a viagem que você sempre
            sonhou.
          </Text>
        </div>
        <Image
          src="/airplane.svg"
          al="Avião voando sob banner"
          w={['300px', '300px', '300px', '400px']}
          display={['none', 'none', 'block']}
          transform="translateY(48px)"
          ml="8"
        />
      </Flex>
    </Flex>
  );
}
