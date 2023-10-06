// import { AppMasa } from "@/src/lib";
import React from "react";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsName,
  useEnsAvatar,
  useBalance,
  useQuery,
} from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

export default function Home() {
  const { address, isConnected } = useAccount();
  const { data } = useBalance({ address: address });
  const { data: ensData } = useEnsName({ address: address });

  // AppMasa.account.getBalances(address).then((e) => {
  //   console.log("AppMasa", e);
  // });

  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  const { disconnect } = useDisconnect();
  if (isConnected)
    return (
      <div>
        <p>Connected to {address}</p>
        <p>Balance to {data?.formatted}</p>
        <p>Ens: {ensData?.length}</p>
        <button onClick={() => disconnect()}>Disconnect</button>
        {/* <p>BB: {bb}</p> */}
      </div>
    );
  return <button onClick={() => connect()}>Connect Wallet</button>;
}
