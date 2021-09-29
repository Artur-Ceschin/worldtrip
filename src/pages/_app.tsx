import { ChakraProvider } from '@chakra-ui/react';
import NextNProgress from 'nextjs-progressbar';
import { AppProps } from 'next/app';
import { theme } from '../styles/theme';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/slider.scss';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NextNProgress
        color="#FFBA08"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
