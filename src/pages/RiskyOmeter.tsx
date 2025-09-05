// RiskyOmeter.tsx
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {
  HeartPulse,
  Brain,
  SquareActivity,
  Stethoscope,
  Activity,
} from "lucide-react-native";
import TopHeader from "../atoms/TopHeader";
import { riskData } from "../constant/Data";


const getGradientColors = (riskLevel: TYpeNS.RiskItem["riskLevel"]) => {
  switch (riskLevel) {
    case "Low":
      return ["#4facfe", "#00f2fe"]; // Blue gradient
    case "Moderate":
      return ["#f7971e", "#ffd200"]; // Orange gradient
    case "High":
      return ["#ff5858", "#fb1f1f"]; // Red gradient
    default:
      return ["#ddd", "#bbb"];
  }
};

const RiskCard = ({ item }: { item: TYpeNS.RiskItem }) => (
  <LinearGradient
    colors={getGradientColors(item.riskLevel)}
    style={styles.card}
  >
    <View style={styles.icon}>{item.icon}</View>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{item.system}</Text>
      <Text style={styles.riskLevel}>{item.riskLevel} Risk</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  </LinearGradient>
);

const RiskyOmeter = () => {
  return (
    <View style={styles.container}>
        <TopHeader text="Risky Ometer"/>
      <Text style={styles.subHeading}>
        Snapshot of your current body risks (Age: 37)
      </Text>
      <FlatList
        data={riskData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RiskCard item={item} />}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default RiskyOmeter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
  },
  subHeading: {
    fontSize: 14,
    color: "#666",
    margin: 16,
  },
  listContainer: {
    paddingBottom: 100,
    paddingHorizontal: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    elevation: 4,
  },
  icon: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
  riskLevel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 4,
  },
  description: {
    fontSize: 12,
    color: "#fff",
    marginTop: 2,
  },
});
