"use client";

import React, { useState } from "react";
import NewsPosts from "./feed";
import NewsNavbar from "./navbar";
import ProfileView from "./profile";
import GroupView from "./group";
import NewsFab from "./fab";
import NewsBottomSheet from "./bottom";

export type Views = "Home" | "Groups" | "Profile";

export default function NewsView() {
  const [activeScreen, setActiveScreen] = useState<Views>("Home");
  return (
    <>
      <NewsNavbar
        setActiveScreen={setActiveScreen}
        activeScreen={activeScreen}
      />
      {/* <NewsFab /> */}
      <NewsBottomSheet />
      {getActiveScreen(activeScreen)}
    </>
  );
}

function getActiveScreen(params: Views): JSX.Element {
  switch (params) {
    case "Home":
      return <NewsPosts />;
      break;
    case "Groups":
      return <GroupView />;
      break;
    case "Profile":
      return <ProfileView />;
      break;

    default:
      return <NewsPosts />;
      break;
  }
}
