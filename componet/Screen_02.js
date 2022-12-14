import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Screen02({ onPress }) {
  return (
    <View style={{ flex: 1, paddingHorizontal: 10, paddingTop: 40 }}>
      <View>
        <Text style={{ fontSize: 20, fontWeight: "700" }}>WELCOME BACK!</Text>
        <Text style={{ fontSize: 18, color: "rgba(0, 0, 0, 0.47)" }}>
          Jennifer Marconova
        </Text>
      </View>
      <View
        style={{
          marginVertical: 20,
          backgroundColor: "#EFDFC8",
          flexDirection: "row",
          padding: 10,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 19, fontWeight: "700" }}>New Products</Text>
          <Text
            style={{
              fontSize: 19,
              color: "rgba(0, 0, 0, 0.58)",
              textAlign: "center",
            }}
          >
            Get a 50% discount on your first purchase
          </Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "black",
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  color: "white",

                  fontSize: 20,
                }}
              >
                Buy now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ width: 100, height: 110 }}>
          <Image
            style={{ flex: 1 }}
            source={{
              uri: "https://res.cloudinary.com/dpux6zwj3/image/upload/v1670978382/Avata/img2_qiynvg.png",
            }}
          />
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            // borderWidth: 1,
            justifyContent: "center",
            paddingHorizontal: 10,
            marginHorizontal: 2,
            borderRadius: 4,
          }}
        >
          <Text style={{ fontSize: 18 }}>Trending</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: "center",
            // borderWidth: 1,
            justifyContent: "center",
            paddingHorizontal: 10,
            marginHorizontal: 2,
            borderRadius: 4,
          }}
        >
          <Text style={{ fontSize: 18 }}>Popular</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: "center",
            // borderWidth: 1,
            justifyContent: "center",
            paddingHorizontal: 10,
            marginHorizontal: 2,
            borderRadius: 4,
          }}
        >
          <Text style={{ fontSize: 18 }}>We recommended</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
