import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {
  CircleUser,
  Calendar,
  Phone,
  Venus,
  Activity,
  Ruler,
  Weight,
} from 'lucide-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TopHeader from '../atoms/TopHeader';
import { useNavigation } from '@react-navigation/native';

const UserInfo = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState<'Male' | 'Female' | 'Other' | ''>('');
  const [activityLevel, setActivityLevel] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const navigation = useNavigation() as any;

  const handleSubmit = async () => {
    if (
      !name ||
      !age ||
      !phone ||
      !gender ||
      !activityLevel ||
      !height ||
      !weight
    ) {
      Alert.alert('Please fill all fields');
      return;
    }

    const userInfo = {
      name,
      age,
      phone,
      gender,
      activityLevel,
      height,
      weight,
    };

    const info = JSON.stringify(userInfo);

    console.log('User Info:', userInfo);

    await AsyncStorage.setItem('userInfo', info);
    navigation.navigate('DashBoard');

    Alert.alert('Success', 'User info saved successfully!');
  };

  return (
    <LinearGradient colors={['#0F1443', '#2575fc']} style={styles.container}>
      <TopHeader text="User Information" />
      <ScrollView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.inner}
        >
          <View style={styles.card}>
            {/* Title */}
            <Text style={styles.title}>Tell Us About Yourself</Text>
            <Text style={styles.subtitle}>
              We’ll use this info to personalize your fitness plan
            </Text>

            {/* Name */}
            <View style={styles.inputContainer}>
              <CircleUser size={20} color="#666" />
              <TextInput
                placeholder="Full Name"
                value={name}
                onChangeText={setName}
                style={styles.input}
              />
            </View>

            {/* Age */}
            <View style={styles.inputContainer}>
              <Calendar size={20} color="#666" />
              <TextInput
                placeholder="Age"
                value={age}
                onChangeText={setAge}
                style={styles.input}
                keyboardType="numeric"
              />
            </View>

            {/* Phone */}
            <View style={styles.inputContainer}>
              <Phone size={20} color="#666" />
              <TextInput
                placeholder="Phone Number"
                value={phone}
                onChangeText={setPhone}
                style={styles.input}
                keyboardType="phone-pad"
              />
            </View>

            {/* Gender Selection */}
            <View style={styles.selectionWrapper}>
              <View style={styles.selectionLabel}>
                <Venus size={20} color="#666" />
                <Text style={styles.selectionText}>Gender</Text>
              </View>
              <View style={styles.optionsRow}>
                {['Male', 'Female', 'Other'].map(option => (
                  <TouchableOpacity
                    key={option}
                    style={[
                      styles.optionButton,
                      gender === option && styles.optionButtonSelected,
                    ]}
                    onPress={() => setGender(option as typeof gender)}
                  >
                    <Text
                      style={[
                        styles.optionText,
                        gender === option && styles.optionTextSelected,
                      ]}
                    >
                      {option}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Activity Level Selection */}
            <View style={styles.selectionWrapper}>
              <View style={styles.selectionLabel}>
                <Activity size={20} color="#666" />
                <Text style={styles.selectionText}>Activity Level</Text>
              </View>
              <View style={styles.optionsRow}>
                {['Sedentary', 'Moderate', 'Active', 'Very Active'].map(
                  level => (
                    <TouchableOpacity
                      key={level}
                      style={[
                        styles.optionButton,
                        activityLevel === level && styles.optionButtonSelected,
                      ]}
                      onPress={() => setActivityLevel(level)}
                    >
                      <Text
                        style={[
                          styles.optionText,
                          activityLevel === level && styles.optionTextSelected,
                        ]}
                      >
                        {level}
                      </Text>
                    </TouchableOpacity>
                  ),
                )}
              </View>
            </View>

            {/* Height */}
            <View style={styles.inputContainer}>
              <Ruler size={20} color="#666" />
              <TextInput
                placeholder="Height (cm)"
                value={height}
                onChangeText={setHeight}
                style={styles.input}
                keyboardType="numeric"
              />
            </View>

            {/* Weight */}
            <View style={styles.inputContainer}>
              <Weight size={20} color="#666" />
              <TextInput
                placeholder="Weight (kg)"
                value={weight}
                onChangeText={setWeight}
                style={styles.input}
                keyboardType="numeric"
              />
            </View>

            {/* Save Button */}
            <TouchableOpacity
              onPress={handleSubmit}
              activeOpacity={0.8}
              style={{ width: '100%' }}
            >
              <LinearGradient
                colors={['#2575fc', '#0F1443']}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Save & Continue</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </LinearGradient>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 15,
    width: '100%',
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  selectionWrapper: {
    width: '100%',
    marginBottom: 15,
  },
  selectionLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  selectionText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  optionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  optionButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 10,
    marginBottom: 10,
  },
  optionButtonSelected: {
    backgroundColor: '#2575fc',
  },
  optionText: {
    fontSize: 14,
    color: '#333',
  },
  optionTextSelected: {
    color: '#fff',
    fontWeight: '600',
  },
  button: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
