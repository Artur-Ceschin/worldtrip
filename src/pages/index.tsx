import { Flex, Heading } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import React from 'react';
import { Banner } from '../components/Banner';
import { Caracteristcs } from '../components/Characteristics';
import { Header } from '../components/Header';
import { Separator } from '../components/Separator';
import { Slider } from '../components/Slider';
import { getPrismicClient } from '../services/prismic';
import { RichText } from 'prismic-dom';
import Prismic from '@prismicio/client';

export interface ContinentProps {
  continents: {
    slug: string;
    title: string;
    summary: string;
    image: string;
  }[];
}

export default function Home({ continents }: ContinentProps) {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Caracteristcs />
      <Separator />
      <Heading
        textAlign="center"
        fontWeight="500"
        mb={['5', '14']}
        fontSize={['xl', '3xl', '4xl']}
      >
        Vamos nessa ? <br /> Então escolha seu continente
      </Heading>
      <Slider continents={continents} />
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'continent'),
  ]);

  const continents = response.results.map((continent) => {
    return {
      slug: continent.uid,
      title: RichText.asText(continent.data.title),
      summary: continent.data.summary,
      image: continent.data.slider_image.url,
    };
  });

  return {
    props: {
      continents,
    },
  };
};
