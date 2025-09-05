import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import TopHeader from "../atoms/TopHeader";


const ProgressBar = ({ progress, color }: { progress: number; color?: string }) => {
  return (
    <View style={styles.progressContainer}>
      <View
        style={[
          styles.progressFill,
          { width: `${progress * 100}%`, backgroundColor: color || "#4F46E5" },
        ]}
      />
    </View>
  );
};

const ProgressCard = ({
  title,
  value,
  progress,
  color,
}: {
  title: string;
  value: string;
  progress: number;
  color?: string;
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardValue}>{value}</Text>
      <ProgressBar progress={progress} color={color} />
      <Text style={styles.cardProgressText}>
        {Math.round(progress * 100)}% Complete
      </Text>
    </View>
  );
};

const ProgressView = () => {
  return (
    <View style={{
        flex:1
    }} >
        <TopHeader text="Progress Summary"/>
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Header */}
      <Text style={styles.subHeader}>Track your goals against your plan</Text>

      {/* Progress Cards */}
      <View style={styles.cardsWrapper}>
        <ProgressCard
          title="Today"
          value="3 of 5 Goals"
          progress={0.6}
          color="#34D399"
        />
        <ProgressCard
          title="This Week"
          value="18 of 25 Goals"
          progress={0.72}
          color="#3B82F6"
        />
        <ProgressCard
          title="This Month"
          value="80 of 120 Goals"
          progress={0.66}
          color="#F59E0B"
        />
        <ProgressCard
          title="Against Plan"
          value="210 of 300 Goals"
          progress={0.7}
          color="#8B5CF6"
        />
      </View>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 20,
    color: "#111827",
  },
  subHeader: {
    fontSize: 14,
    color: "#6B7280",
    margin: 20,
    fontWeight:"bold"
  },
  cardsWrapper: {
    flexDirection: "column",
    gap: 16,
    marginBottom:50
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 6,
  },
  cardValue: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 10,
  },
  progressContainer: {
    height: 10,
    borderRadius: 6,
    backgroundColor: "#E5E7EB",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 6,
  },
  cardProgressText: {
    marginTop: 8,
    fontSize: 13,
    color: "#6B7280",
  },
});

export default ProgressView;
