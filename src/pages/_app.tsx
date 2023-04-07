import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import toast, { Toaster } from 'react-hot-toast';
import { NextUIProvider } from '@nextui-org/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
      <Toaster />
    </NextUIProvider>
  );
}
