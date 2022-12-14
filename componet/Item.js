import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Item({ item, onPress }) {
  return (
    <TouchableOpacity style={{ marginVertical: 10 }} onPress={onPress}>
      <View
        style={{
          width: 160,
          height: 210,
          backgroundColor: "#EFDFC8",
          marginHorizontal: 4,
        }}
      >
        <Image style={{ flex: 1 }} source={{ uri: item.uri }} />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 20 }}>{item.name}</Text>
        <Text style={{ fontSize: 20, color: "#rgba(0, 0, 0, 0.5)" }}>
          {item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
