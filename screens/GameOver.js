import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText> The Game is Over! </TitleText>
      <View style={styles.imageContainer}>
        <Image
        fadeDuration={300} //default, after first load cached
          // source={require("../assets/success.png")} //don't have to set width
          // and height
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Summit_of_the_Matterhorn.jpg/1600px-Summit_of_the_Matterhorn.jpg'}} //need to include width height
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <BodyText>Number of rounds : {props.rounds}</BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    borderRadius: 125,
    borderWidth: 3,
    borderColor: "black",
    width: 250,
    height: 250,
    overflow: "hidden",
    marginVertical: 30,
  },
});

export default GameOverScreen;
