import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Error({ pathName }: any) {
  const router = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      router.navigate(pathName as never);
    }, 3000);

    return () => {};
  }, []);

  return (
    <View style={styles.errorStyles}>
      <Image
        source={require("../assets/errorImage.jpg")}
        style={styles.errorImage}
      />
      <Text>An Error Ocurred</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  errorStyles: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  errorImage: {
    height: 285,
    width: 285,
  },
});
