import { type AppType } from "next/app";
import "../src/styles/index.scss";
import { MasaProvider } from "@masa-finance/masa-react";
import { WagmiConfig, createConfig, mainnet } from "wagmi";
import { createPublicClient, http } from "viem";
import LayoutComp from "@/src/comp/global/Layout";

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http(),
  }),
});

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
