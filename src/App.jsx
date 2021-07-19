import React from "react";
import Avatar from "avataaars";

function App() {
  return (
    <div>
      Your avatar:
      <Avatar
        style={{ width: "100px", height: "100px" }}
        avatarStyle="Circle"
        topType="LongHairMiaWallace"
        accessoriesType="Kurt"
        hairColor="BrownDark"
        facialHairType="Blank"
        clotheType="Hoodie"
        clotheColor="PastelBlue"
        eyeType="Happy"
        eyebrowType="Default"
        mouthType="Smile"
        skinColor="Light"
      />
    </div>
  );
}

export default App;
