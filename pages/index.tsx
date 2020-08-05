import React, { useState } from "react";
import Head from "next/head";
import AppContext from "../context/appContext";
import { Avatar } from "../components/avatar-elements/Avatar";
import { SideBar } from "../components/editor-elements/Sidebar";

const FrseAvatarGenerator = () => {
  return (
    <AppContext>
      <Head>
        <title>FRSE CSS Avatar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="avatar-wrapper">
          <Avatar />
        </div>
        <SideBar />
      </main>
    </AppContext>
  );
};

export default FrseAvatarGenerator;
