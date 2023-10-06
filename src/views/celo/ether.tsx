// "use client";
import { MasaConfig, Network } from "@masa-finance/masa-sdk";
import { ethers } from "ethers";
import React, { useState } from "react";
import { ExternalProvider } from "./create_masa";

const address = "0x95222290dd7278aa3ddd389cc1e1d165cc4bafe5";

export default async function EthersComp() {
  let _provider: ethers.providers.Web3Provider;
  if (window) {
    _provider = new ethers.providers.Web3Provider(
      window.ethereum as ExternalProvider
    );
  }

  // const provider = new ethers.providers.Web3Provider(window.ethereum);

  // getBalance(_provider);
  // console.log(_provider, "a provider");
  // const apiKey = _provider.send;
  // console.log(apiKey, "apiKey");

  //   const provider = new ethers.providers.Web3Provider(ethVal);

  //   await provider.send("eth_requestAccounts", []);

  // const signer = _provider.getSigner();
  //   const [currentAccount, setCurrentAccount] = useState("");
  return <div>EthersComp</div>;
}

async function getConfig(
  _provider: ethers.providers.Web3Provider
): Promise<MasaConfig> {
  const signer = _provider.getSigner();
  const balance = await _provider.getBalance(address);
  const network: Network = {
    chainName: (await _provider.getNetwork()).name,
    networkName: "celo",
    chainId: (await _provider.getNetwork()).chainId,
    addresses: {
      SoulNameAddress: (await _provider.getNetwork()).ensAddress,
    },
    rpcUrls: ["celo"],
    chainNameShort: "celo",
  };

  console.log(balance);
  return {
    apiUrl: "_provider",
    environment: "dev",
    networkName: "alfajores",
    network: network,
    signer: _provider.getSigner(0),
    verbose: true,
  };
}
