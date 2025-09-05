import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserCircle2 } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <View style={styles.progressContainer}>
      <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
    </View>
  );
};

const GoalCard = ({ emoji, title, progress, target }: TYpeNS.GoalCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardEmoji}>{emoji}</Text>
      <Text style={styles.cardTitle}>{title}</Text>
      <ProgressBar progress={progress} />
      <Text style={styles.cardProgressText}>
        {Math.round(progress * 100)}% of {target}
      </Text>
    </View>
  );
};

const Dashboard = () => {

  const [userInfo, setUserInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const storedData = await AsyncStorage.getItem('userInfo');
      if (storedData) {
        setUserInfo(JSON.parse(storedData));
      }
      setLoading(false);
    };
    loadData();
  }, []);
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >
      {/* User Profile Header */}
      <View style={styles.profileCard}>
        <UserCircle2 size={40} />
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.profileName}>{userInfo?.name}</Text>
          <Text style={styles.profileQuote}>
            “Stay strong, live healthy 💪”
          </Text>
        </View>
      </View>

      <Text style={styles.header}>Daily Health Dashboard</Text>

      {/* Goal Cards */}
      <View style={styles.cardsWrapper}>
        <GoalCard
          emoji="🏃"
          title="Move"
          progress={0.7}
          target="10,000 steps"
        />
        <GoalCard emoji="🍽" title="Eat" progress={0.5} target="2,000 kcal" />
        <GoalCard
          emoji="😌"
          title="Calm"
          progress={0.9}
          target="20 min meditation"
        />
        <GoalCard
          emoji="💧"
          title="Hydration"
          progress={0.6}
          target="3L water"
        />
        <GoalCard emoji="🛌" title="Sleep" progress={0.8} target="8h sleep" />
        <GoalCard
          emoji="❤️"
          title="Heart"
          progress={0.75}
          target="72 bpm avg"
        />
      </View>

      {/* Analytics Section */}
      <View style={styles.analyticsCard}>
        <Text style={styles.analyticsTitle}>📊 Weekly Overview</Text>
        <Text style={styles.analyticsSubtitle}>🔥 Calories Burned: 12,540</Text>
        <Text style={styles.analyticsSubtitle}>💧 Water Intake: 14 L</Text>
        <Text style={styles.analyticsSubtitle}>🛌 Sleep: Avg 7h 30m</Text>
        <Text style={styles.analyticsSubtitle}>
          ❤️ Resting Heart Rate: 70 bpm
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 12,
    color: '#111827',
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  profileQuote: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  cardsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: width / 2 - 24,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  cardEmoji: {
    fontSize: 28,
    marginBottom: 6,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  progressContainer: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E5E7EB',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
    backgroundColor: '#4F46E5',
  },
  cardProgressText: {
    marginTop: 6,
    fontSize: 12,
    color: '#6B7280',
  },
  analyticsCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 60,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4,
  },
  analyticsTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
    color: '#111827',
  },
  analyticsSubtitle: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 6,
  },
});

export default Dashboard;
