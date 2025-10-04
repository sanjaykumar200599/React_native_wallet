import { Image } from "expo-image";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";


export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.heading}>Edit app/index.tsx to edit this screen hellow world</Text>
      <Link href={"/about"}>About</Link>

    </View>


  );
}

const styles=StyleSheet.create({
  container:{
    flex: 1,
        justifyContent: "center",
        alignItems: "center",
       
  },
  heading:{
    fontsize:40,
    color:"purple",
  }
})
