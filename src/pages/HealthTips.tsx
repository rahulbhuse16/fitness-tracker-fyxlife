// HealthTips.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TopHeader from '../atoms/TopHeader';
import { tipsData } from '../constant/Data';

const TipCard = ({ item }: { item: TYpeNS.TipItem }) => (
  <LinearGradient colors={item.colors} style={styles.card}>
    <View style={styles.icon}>{item.icon}</View>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  </LinearGradient>
);

const HealthTips = () => {
  return (
    <View style={styles.container}>
      <TopHeader text="🌱 Health Tips" />
      <Text style={styles.subHeading}>
        Simple daily tips to keep your body and mind healthy
      </Text>
      <FlatList
        data={tipsData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <TipCard item={item} />}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default HealthTips;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#222',
  },
  subHeading: {
    fontSize: 14,
    color: '#666',
    margin: 16,
  },
  listContainer: {
    paddingBottom: 100,
    paddingHorizontal: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
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
    fontWeight: '600',
    color: '#fff',
  },
  description: {
    fontSize: 13,
    color: '#fff',
    marginTop: 4,
    lineHeight: 18,
  },
});
