import { StyleSheet, TouchableOpacity, View, Platform } from 'react-native';
import React from 'react';

import { LinearGradient } from 'react-native-linear-gradient';
import {
    ChartBarStacked,
  Group,
  HousePlus,
  LayoutDashboard,
  MessageCircleCode,
  Salad,
  ScanFace,
  Sparkles,
  UserCircle,
} from 'lucide-react-native';
const ICONS = [
  {
    name: 'home-variant-outline',
    lib: LayoutDashboard,
    label: 'Home',
  },
  {
    name: 'heart-outline',
    lib: Salad,
    label: 'Social',
  },
  {
    name: 'sparkles',
    lib: ChartBarStacked,
    label: 'Create',
    isCenter: true,
  },
  {
    name: 'search1',
    lib: HousePlus,
    label: 'Reflection',
  },
  {
    name: 'chat',
    lib: UserCircle,
    label: 'Profile',
  },
];

const BottomTab = ({ state, descriptors, navigation }:{
    state:any,descriptors:any,navigation:any
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.bottomContainer}>
        {ICONS.map((icon, idx) => {
          const isFocused = state.index === idx;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: state.routes[idx].key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(state.routes[idx].name);
            }
          };

          // Center Floating Button

          // Normal Icons
          return (
            <TouchableOpacity
              key={icon.label}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              onPress={onPress}
              style={styles.icon}
              activeOpacity={0.7}
            >
              {isFocused ? (
                <LinearGradient
                  colors={['#BBA5F4', '#5F33D6']}
                  style={styles.activeCircle}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  {icon.label === 'Create' ? (
                    <ChartBarStacked size={20} color={'#fff'} />
                  ) : (
                    <icon.lib  size={20} color="#fff" />
                  )}
                </LinearGradient>
              ) : icon.label === 'Create' ? (
                <ChartBarStacked size={24} color={'#fff'} />
              ) : (
                <icon.lib
                  size={24}
                  color="#fff"
                  style={{ alignSelf: 'center' }}
                />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: Platform.OS === 'ios' ? 24 : 16,
    alignItems: 'center',
    zIndex: 100,
    marginHorizontal: 16,
    backgroundColor: '#191934',
    borderRadius: 22,
  },

  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 68,
    paddingHorizontal: 18,
    position: 'relative',
  },
  icon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  activeCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerBtnWrapper: {
    position: 'absolute',
    left: '50%',
    top: -28,
    transform: [{ translateX: -32 }],
    zIndex: 10,
  },
  centerBtnTouchable: {
    borderRadius: 32,
    overflow: 'hidden',
    elevation: 12,
    shadowColor: '#A084F7',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    borderWidth: 4,
    borderColor: '#2F104C',
  },
  centerBtn: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
