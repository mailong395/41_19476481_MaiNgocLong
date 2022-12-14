import { Image, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Screen03({ item }) {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View style={{ flex: 1, backgroundColor: "#EFDFC8" }}>
        <Image
          style={{ flex: 1, resizeMode: "contain" }}
          source={{
            uri: "https://res.cloudinary.com/dpux6zwj3/image/upload/v1670978233/Avata/img1_bxxqvx.png",
          }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 25 }}>Jennifer Lopez</Text>
        <View style={{ flexDirection: "row", marginBottom: 20 }}>
          <Text
            style={{
              fontSize: 25,
              color: "rgba(0, 0, 0, 0.59)",
              marginRight: 30,
            }}
          >
            10% OFF I 445$
          </Text>
          <Text style={{ fontSize: 25, textDecorationLine: "line-through" }}>
            449$
          </Text>
        </View>
        <Text>Description</Text>
        <Text>
          It is a very important form of writing as we write almost everything
          in paragraphs, be it an answer, essay, story, emails, etc.
        </Text>
        <View>
          <AntDesign name="hearto" size={24} color="black" />
          <View>
            <TouchableOpacity>
              <Text>Add to card</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
