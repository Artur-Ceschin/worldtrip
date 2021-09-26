import { Flex, Grid, Icon, Image } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { RiArrowLeftSLine } from 'react-icons/ri';

export function Header() {
  const { asPath } = useRouter();
  const isNotHome = asPath !== '/';
  return (
    <Flex
      bg="white"
      w="100%"
      as="header"
      mx="auto"
      px="1rem"
      h={['50px', '100px']}
      align="center"
      justify="center"
    >
      <Grid
        h="100%"
        m="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >
        {isNotHome && (
          <Link href="/">
            <a>
              <Icon
                as={RiArrowLeftSLine}
                fontSize={[20, 40]}
                alignSelf="start"
              />
            </a>
          </Link>
        )}
        <Image
          w={['81px', '144px']}
          src="/logo.svg"
          alt="Logo worldtrip"
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  );
}
