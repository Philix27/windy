"use client";
import { type AppType } from "next/app";
import "../src/styles/index.scss";
import { MasaProvider } from "@masa-finance/masa-react";
import { createPublicClient, http } from "viem";
import LayoutComp from "@/src/comp/global/Layout";

// app/layout.tsx
import { polygonMumbai, polygon } from "wagmi/chains";
import { configureChains, createConfig, WagmiConfig, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { InjectedConnector } from "wagmi/connectors/injected";
import { LensProvider, LensConfig, production } from "@lens-protocol/react-web";
import { bindings as wagmiBindings } from "@lens-protocol/wagmi";

const { publicClient, webSocketPublicClient } = configureChains(
  [polygonMumbai, polygon],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors: [
    new InjectedConnector({
      options: {
        shimDisconnect: false,
      },
    }),
  ],
});

const lensConfig: LensConfig = {
  bindings: wagmiBindings(),
  environment: production,
};

// const config = createConfig({
//   autoConnect: true,
//   publicClient: createPublicClient({
//     chain: mainnet,
//     transport: http(),
//   }),
// });

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <WagmiConfig config={config}>
      <LayoutComp>
        <Component {...pageProps} />
      </LayoutComp>
    </WagmiConfig>
  );
};

export default MyApp;
