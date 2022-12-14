import { useEffect, useRef } from "react";
import { Animated, Image, Text, TouchableOpacity, View } from "react-native";

export default function Screen01({ onPress }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    fadeIn();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: "#EFDFC8",
      }}
    >
      <View style={{ flex: 1 }}>
        <Animated.View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            opacity: fadeAnim,
          }}
        >
          <Text style={{ fontSize: 26, fontWeight: "700" }}>
            WELCOME TO FURISAS
          </Text>
        </Animated.View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={{ fontSize: 22, fontWeight: "400", textAlign: "center" }}
          >
            A premium online store for women and their stylish choice
          </Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity
            onPress={onPress}
            style={{
              backgroundColor: "black",
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 100,
            }}
          >
            <Text style={{ color: "white", fontSize: 27, fontWeight: "400" }}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Image
          style={{ flex: 1 }}
          source={{
            uri: "https://res.cloudinary.com/dpux6zwj3/image/upload/v1670978233/Avata/img1_bxxqvx.png",
          }}
        />
      </View>
    </View>
  );
}
