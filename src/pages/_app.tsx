'use client';

import MovieLayoutComponents from "@/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import StoreProvider from "./provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
 <MovieLayoutComponents>
        <Component {...pageProps} />
      </MovieLayoutComponents>
    </StoreProvider>
     
   
  );
}
