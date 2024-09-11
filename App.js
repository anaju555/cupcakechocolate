import { StyleSheet, Text, View, Image } from "react-native";
import { useFonts } from "expo-font"; //importa a fonte

export default function App() {
  const [font] = useFonts({
    Rokkitt: require("../cupcakechocolate/src/fontes/Rokkitt/static/Rokkitt-BoldItalic.ttf"),
  });

  if (!font) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../cupcakechocolate/src/imagem/logo.png")}
      />

      <Text style={styles.txt}>Cupcake de Chocolate</Text>
      <View style={styles.row}></View>

      <Image
        style={styles.cupcakechocolate}
        source={require("../cupcakechocolate/src/imagem/cupcakechocolate.png")}
      />

      <Text style={styles.txtcupcake}>blablabla</Text>

      <Image
        style={styles.cupcake1}
        source={require("../cupcakechocolate/src/imagem/cupcakechocolate.png")}
      />

      <Image
        style={styles.cupcake2}
        source={require("../cupcakechocolate/src/imagem/cupcakechocolate.png")}
      />

      <Image
        style={styles.cupcake3}
        source={require("../cupcakechocolate/src/imagem/cupcakechocolate.png")}
      />

      <Image
        style={styles.cupcake4}
        source={require("../cupcakechocolate/src/imagem/cupcakechocolate.png")}
      />

      <Image
        style={styles.cupcake5}
        source={require("../cupcakechocolate/src/imagem/cupcakechocolate.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    position: "relative",
  },

  row: {
    width: "50%",
    height: 2,
    backgroundColor: "brown",
  },

  txt: {
    fontSize: 40,
    fontFamily: "Rokkitt",
    zIndex: 5,
    width: "55%",
    textAlign: "center",
  },

  txtcupcake: {
    fontSize: 30,
    top: "50%",
    fontFamily: "Rokkitt",
  },

  logo: {
    width: "15%",
    height: "15%",
    left: "40%",
    top: "5%",
  },

  cupcakechocolate: {
    width: 660,
    height: "100%",
    right: "20%",
    top: "5%",
  },

  cupcake1: {
    width: 300,
    height: 400,
    position: "absolute",
    right: "80%",
    transform: [{ rotate: "20deg" }],
    top: "5%",
  },

  cupcake2: {
    width: 150,
    height: 200,
    position: "absolute",
    top: "55%",
    right: "85%",
  },

  cupcake3: {
    width: 150,
    height: 200,
    position: "absolute",
    top: "25%",
    left: "75%",
  },

  cupcake4: {
    width: 150,
    height: 200,
    position: "absolute",
    top: "70%",
    left: "75%",
  },

  cupcake5: {
    width: 200,
    height: 300,
    position: "absolute",
    top: "85%",
    right: "85%",
    transform: [{ rotate: "30deg" }],
  },
});
