import React from "react";
import Light from "../Images/Light.jpg";

const ImagePreloader = () => {
  React.useEffect(() => {
    const img = new Image();
    img.src = Light;
  }, []);

  return null; // The component doesn't render anything visible on the page
};

export default ImagePreloader;
