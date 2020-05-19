import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const COLOR_INCREMENT = 20;
  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0
          ? null
          : setRed(red + COLOR_INCREMENT);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + COLOR_INCREMENT);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + COLOR_INCREMENT);
        return;
    }
  };
  return (
    <View>
      <ColorCounter
        color={"red"}
        onDecrease={() => setColor("red", -1 * -COLOR_INCREMENT)}
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
      />
      <ColorCounter
        color={"blue"}
        onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
        onIncrease={() => setColor("blue", COLOR_INCREMENT)}
      />
      <ColorCounter
        color={"green"}
        onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
        onIncrease={() => setColor("green", COLOR_INCREMENT)}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
