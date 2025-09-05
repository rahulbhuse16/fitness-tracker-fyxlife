import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  CircleUser,
  Calendar,
  Phone,
  Venus,
  Activity,
  Ruler,
  Weight,
  LogOut,
} from 'lucide-react-native';
import { CircleFade } from 'react-native-animated-spinkit';
import TopHeader from '../atoms/TopHeader';
import { useNavigation } from '@react-navigation/native';
const { width } = Dimensions.get("window");


const UserProfile = () => {
  const [userInfo, setUserInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const navigation=useNavigation() as any


  const handleLogout=async()=>{
    await AsyncStorage.removeItem("userInfo")
    navigation.navigate("Welcome")
  }

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

  if (loading) {
    return (
      <View style={styles.loader}>
        <CircleFade color="#2575fc" />
      </View>
    );
  }

  if (!userInfo) {
    return (
      <View style={styles.loader}>
        <Text style={{ color: '#fff', fontSize: 16 }}>
          No user information found
        </Text>
      </View>
    );
  }

  return (
    <LinearGradient colors={['#0F1443', '#2575fc']} style={styles.container}>
      <TopHeader text="User Profile" />
      <ScrollView style={{
        
      }} contentContainerStyle={{ padding: 20 }}>
        {/* Header Card */}
        <LinearGradient
          colors={['#2575fc', '#6a11cb']}
          style={styles.headerCard}
        >
          <CircleUser size={60} color="#fff" />
          <Text style={styles.headerTitle}>{userInfo.name}</Text>
          <Text style={styles.headerSubtitle}>
            Personalized fitness profile
          </Text>
        </LinearGradient>

        {/* Info Cards */}
        <View style={styles.card}>
          <InfoRow
            icon={<Calendar size={20} color="#2575fc" />}
            label="Age"
            value={userInfo.age}
          />
          <InfoRow
            icon={<Phone size={20} color="#2575fc" />}
            label="Phone"
            value={userInfo.phone}
          />
          <InfoRow
            icon={<Venus size={20} color="#2575fc" />}
            label="Gender"
            value={userInfo.gender}
          />
        </View>

        <View style={styles.card}>
          <InfoRow
            icon={<Activity size={20} color="#2575fc" />}
            label="Activity Level"
            value={userInfo.activityLevel}
          />
          <InfoRow
            icon={<Ruler size={20} color="#2575fc" />}
            label="Height"
            value={`${userInfo.height} cm`}
          />
          <InfoRow
            icon={<Weight size={20} color="#2575fc" />}
            label="Weight"
            value={`${userInfo.weight} kg`}
          />
        </View>
         <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleLogout}
          >
            <LinearGradient
              colors={["#C04848", "#480048"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Logout</Text>
              <LogOut size={20} color="#fff" style={styles.buttonIcon} />
            </LinearGradient>
          </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

const InfoRow = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <View style={styles.infoRow}>
    <View style={styles.iconWrapper}>{icon}</View>
    <View style={{ flex: 1 }}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  </View>
);

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom:60
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F1443',
  },
  headerCard: {
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    marginTop: 12,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#eee',
    marginTop: 4,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconWrapper: {
    backgroundColor: '#e9f0ff',
    padding: 10,
    borderRadius: 12,
    marginRight: 12,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  button: {
    width: width * 0.5,
    paddingVertical: 16,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#FD3A69",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 10,
    elevation: 6,
    alignSelf:"center",
    marginBottom:10
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    letterSpacing: 1,
  },
  buttonIcon: {
    marginLeft: 8,
  },
});
