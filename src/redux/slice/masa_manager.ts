import { MasaShape } from "@masa-finance/masa-react";
import { login } from "@masa-finance/masa-sdk";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ethers } from "ethers";

const initialState: MasaShape = {
  company: "Unwind",
  isConnected: false,
  isDisconnected: true,
  forceNetwork: "alfajores",
  walletAddress: "",
};

export const MasaSlice = createSlice({
  name: "MASA",
  initialState,
  reducers: {},
  extraReducers: {
    // const provider = new ethers.providers.Web3Provider(window.ethereum)

    loginMasa: (state, action: PayloadAction<any>) => {
      // login(state);
    },
    logoutMasa: (state, action: PayloadAction<any>) => {},
  },
});

export const AuthActions = { ...MasaSlice.actions };

const AuthReducer = MasaSlice.reducer;
export default AuthReducer;
