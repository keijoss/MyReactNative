import React, { useRef } from "react";
import { StyleSheet } from "react-native";
import Video from "react-native-video";

const Gift = () => {
  const videoRef = useRef(null);
  const background = require("../assets/rickroll.mp4");

  const onBuffer = () => {
    console.log("Buffering...");
  };

  const onError = (error) => {
    console.error("Video error:", error);
  };

  return (
    <Video
      source={background} // Can be a URL or a local file.
      ref={videoRef} // Store reference
      onBuffer={onBuffer} // Callback when remote video is buffering
      onError={onError} // Callback when video cannot be loaded
      style={styles.backgroundVideo}
      resizeMode="cover" // Optional: Adjust video to cover the entire screen
      repeat // Optional: Loop the video
    />
  );
};

// Styles
const styles = StyleSheet.create({
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default Gift;
