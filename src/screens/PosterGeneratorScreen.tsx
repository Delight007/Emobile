import { Ionicons } from "@expo/vector-icons";
import React, { useMemo, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

type Segment = "Smart script" | "Advanced script";

const posterTypes = [
  {
    id: "display",
    title: "display",
    subtitle: "Prod",
    image: require("../../assets/images/tri.jpg"),
    color: "#8B4513",
  },
  {
    id: "promotion",
    title: "Promotion",
    subtitle: "",
    image: require("../../assets/images/tri2.jpg"),
    color: "#D2691E",
  },
  {
    id: "branding",
    title: "Editor's Choice",
    subtitle: "Branding",
    image: require("../../assets/images/tri3.jpg"),
    color: "#4169E1",
  },
  {
    id: "announce",
    title: "Announceme…",
    subtitle: "",
    image: require("../../assets/images/tri4.jpg"),
    color: "#32CD32",
  },
];

export default function PosterGeneratorScreen() {
  const [segment, setSegment] = useState<Segment>("Smart script");
  // const [prompt, setPrompt] = useState(

  // );

  const headerTabs = useMemo<Segment[]>(
    () => ["Smart script", "Advanced script"],
    []
  );

  return (
    <View className="flex-1 bg-black">
      <View className="flex-col px-4 pt-2">
        <TouchableOpacity
          className="w-8 h-8 rounded-full  items-center justify-center"
          activeOpacity={0.7}
        >
          <Ionicons name="close" size={25} color="white" />
        </TouchableOpacity>
        <View className="flex-row bg-white/8 rounded-2xl p-1 mt-2 w-full">
          {headerTabs.map((tab) => {
            const active = segment === tab;
            return (
              <TouchableOpacity
                key={tab}
                onPress={() => setSegment(tab)}
                className={`flex-1 py-1.5 px-3 ${
                  active ? "border-b-2 border-purple-600" : ""
                }`}
              >
                <Text
                  className={`text-base text-center font-medium ${
                    active ? "text-white font-semibold" : "text-zinc-500"
                  }`}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 160 }}
        showsVerticalScrollIndicator={false}
      >
        <Text className="text-white text-2xl font-semibold px-4 pt-4">
          What type of posters do you want to create?
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="px-4 pt-4"
        >
          {posterTypes.map((t, idx) => (
            <View
              key={t.id}
              className={`w-36 h-44 mr-3 rounded-2xl overflow-hidden ${
                idx === 0 ? "border-2 border-white" : ""
              }`}
              // style={{ backgroundColor: t.color }}
            >
              <Image
                source={t.image}
                className={`w-full h-full absolute opacity-70 ${
                  idx === 0 ? "m-1 rounded-xl" : ""
                }`}
              />
              <View className="p-3 flex-1">
                <Ionicons
                  // name={t.icon as any}
                  size={24}
                  color="white"
                  style={{ marginBottom: 8 }}
                />
                <Text className="text-white font-extrabold text-sm">
                  {idx === 0 ? "New\nLimited\nEdition" : t.title}
                </Text>
              </View>
              <View className="absolute bottom-2.5 left-3 right-3 flex-row items-center justify-between">
                <Text className="text-white text-xs font-semibold">{t.id}</Text>
                {t.subtitle ? (
                  <Text className="text-white/70 text-xs">{t.subtitle}</Text>
                ) : null}
              </View>
            </View>
          ))}
        </ScrollView>

        <View className="mx-4 mt-4 rounded-2xl bg-zinc-900 p-3.5 flex flex-col gap-10 h-[150px]">
          <Text className="text-white text-[15px] font-medium tracking-widest ">
            stunning promotional image of a deliciously decorated cake,
            emphasizing its layers, frosting, and toppings in an enticing
            setting.
          </Text>
          <TouchableOpacity
            className=" absolute right-2 bottom-2 w-9 h-9 rounded-full bg-white/10 items-center justify-center"
            activeOpacity={0.8}
          >
            <Ionicons name="image-outline" size={16} color="white" />
          </TouchableOpacity>
        </View>

        <Text className="text-zinc-500 font-normal text-xl ml-4 my-4">
          Settings
        </Text>
        <View className="mx-4  rounded-2xl bg-zinc-900">
          <Row label="Size" value="1080 x 1920 px" />
          <Separator />
          <Row label="Category" value="Foods and beverage" />
        </View>
      </ScrollView>

      <View className="absolute left-0 right-0 bottom-0 p-4 bg-black/90">
        <TouchableOpacity
          className="bg-white py-3.5 rounded-xl items-center flex-row justify-center gap-2"
          activeOpacity={0.9}
        >
          <View className="bg-blue-400 rounded-full w-6 h-6"></View>
          <Text className="text-black text-lg font-bold">Generate</Text>
        </TouchableOpacity>
        <View className="flex-row items-center justify-center pt-3">
          <Text className="text-white font-bold">✂ CapCut</Text>
          <Text className="text-gray-400 mx-1">curated by </Text>
          <Text className="text-white font-bold">Mobbin</Text>
        </View>
      </View>
    </View>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <View className="px-4 py-4 flex-row items-center justify-between">
      <Text className="text-gray-300 text-base font-medium">{label}</Text>
      <View className="flex-row items-center">
        <Text className="text-zinc-500 text-base mr-1.5 font-medium">
          {value}
        </Text>
        <Ionicons name="chevron-forward" size={16} color="#666" />
      </View>
    </View>
  );
}

function Separator() {
  return <View className="h-px bg-zinc-700" />;
}
