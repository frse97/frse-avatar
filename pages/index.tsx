import React, { useState } from "react";
import Head from "next/head";
import { FrseAvatar } from "../components/FrseAvatar";
import { Avatar } from "../components/avatar-elements/Avatar";
import { ColorPicker } from "../components/editor-elements/ColorPicker";

const FrseAvatarGenerator = () => {
  const [currentSkinColor, setCurrentSkinColor] = useState("#f0beaf");
  const [currentBodyColor, setCurrentBodyColor] = useState("#133337");
  const [currentMouthColor, setCurrentMouthColor] = useState("#424B54");
  const [currentTongueColor, setCurrentTongueColor] = useState("#f254a9");

  const handleSkinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setCurrentSkinColor(e.target.value);
  };

  const handleBodyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setCurrentBodyColor(e.target.value);
  };

  const handleMouthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setCurrentMouthColor(e.target.value);
  };

  const handleTongueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setCurrentTongueColor(e.target.value);
  };

  return (
    <div>
      <Head>
        <title>FRSE CSS Avatar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <FrseAvatar /> */}
        <Avatar
          skinColor={currentSkinColor}
          bodyColor={currentBodyColor}
          mouthColor={currentMouthColor}
          tongueColor={currentTongueColor}
        />
        <div className="sidebar">
          <h2>Avatar.edit</h2>
          <ColorPicker
            id="skin"
            name="Skin"
            value={currentSkinColor}
            onChange={handleSkinChange}
          />
          <ColorPicker
            id="body"
            name="Body"
            value={currentBodyColor}
            onChange={handleBodyChange}
          />
          <ColorPicker
            id="mouth"
            name="Mouth"
            value={currentMouthColor}
            onChange={handleMouthChange}
          />
          <ColorPicker
            id="tongue"
            name="Tongue"
            value={currentTongueColor}
            onChange={handleTongueChange}
          />
        </div>
      </main>
    </div>
  );
};

export default FrseAvatarGenerator;
