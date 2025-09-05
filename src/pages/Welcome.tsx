import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Dumbbell, ArrowRight } from 'lucide-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { cards } from '../constant/Data';

const { width } = Dimensions.get('window');

// ✅ Remote healthcare cards

const Welcome = ({ navigation }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const checkOnoboarding = async () => {
    const info = await AsyncStorage.getItem('userInfo');
    const parsed = info ? JSON.parse(info) : null;

    if (parsed) {
      navigation.navigate('DashBoard');
    }
  };

  useEffect(() => {
    checkOnoboarding();
  }, []);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slide = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(slide);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Background Gradient */}
      <LinearGradient
        colors={['#5F33D6', '#BBA5F4']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.background}
      >
        {/* Hero Section */}
        <View style={styles.hero}>
          <Image  source={require('../assets/fyxlife.png')} height={64} width={64}  style={styles.icon} />
          <Text style={styles.title}>Welcome To FyxLife</Text>
          <Text style={styles.subtitle}>
            Stay motivated, reach your goals, and live healthier with us.
          </Text>
        </View>

        {/* Carousel Section */}
        <View style={styles.carouselContainer}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
          >
            {cards.map(card => (
              <View key={card.id} style={styles.card}>
                <Image
                  source={{ uri: card.image }}
                  style={styles.cardImage}
                  resizeMode="cover"
                />
                <View style={styles.cardOverlay}>
                  <Text style={styles.cardTitle}>{card.title}</Text>
                </View>
              </View>
            ))}
          </ScrollView>

          {/* Indicators */}
          <View style={styles.indicatorContainer}>
            {cards.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  activeIndex === index && styles.activeIndicator,
                ]}
              />
            ))}
          </View>
        </View>

        {/* CTA Section */}
        <View style={styles.cta}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation?.navigate('Details')}
          >
            <LinearGradient
              colors={['#FF7E5F', '#FD3A69']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Get Started</Text>
              <ArrowRight size={20} color="#fff" style={styles.buttonIcon} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 48,
    justifyContent: 'space-between',
  },
  hero: {
    marginTop: 40,
    alignItems: 'center',
  },
  icon: {
    height:104,
    width:164,
    resizeMode:"contain"
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#E0DFF5',
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 16,
  },
  carouselContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  card: {
    width: width * 0.8,
    height: 220,
    borderRadius: 16,
    overflow: 'hidden',
    marginHorizontal: width * 0.1 - 16,
    backgroundColor: '#fff',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    alignSelf: 'center',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardOverlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 12,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  indicatorContainer: {
    flexDirection: 'row',
    marginTop: 12,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: '#fff',
    width: 16,
  },
  cta: {
    alignItems: 'center',
    marginBottom: 60,
    marginTop: 20,
  },
  button: {
    width: width * 0.7,
    paddingVertical: 16,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#FD3A69',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 10,
    elevation: 6,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    letterSpacing: 1,
  },
  buttonIcon: {
    marginLeft: 8,
  },
});
