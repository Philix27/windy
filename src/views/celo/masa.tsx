"use client";
import React, { useCallback } from "react";
import {
  MasaProvider,
  MasaLoading,
  useMasa,
  ModalComponent,
} from "@masa-finance/masa-react";
// import { WagmiConfig, createConfig, configureChains, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { Masa as MasaSdk } from "@masa-finance/masa-sdk";
import { providers, Wallet, ethers } from "ethers";
import { ExternalProvider } from "./create_masa";

// const _externalP = window.ethereum as ExternalProvider;
// const provider = new providers.Web3Provider(window.ethereum);

// const provider = new providers.Web3Provider(_externalP);

// const signer = provider.getSigner();
// const wallet = "";

// export const masa = new MasaSdk({
//   signer,
//   networkName: "goerli",
//   apiUrl: "https://middleware.masa.finance",
//   environment: "dev",
// });

// const address = "0x7054b457f55dc0D47725bdeeB98eddE543eC448D";

export default function MasaComp() {
  const { connect } = useMasa();

  return <div>Modal Component</div>;
}
