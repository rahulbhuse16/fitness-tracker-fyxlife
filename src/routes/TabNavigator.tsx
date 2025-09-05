// navigation/TabNavigator.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashBoard from "../pages/DashBoard";
import TabBar from "./TabBar";
import UserProfile from "../pages/UserProfile";
import ProgressView from "../pages/Progress";
import RiskyOmeter from "../pages/RiskyOmeter";
import HealthTips from "../pages/HealthTips";

const Tab = createBottomTabNavigator();

export default function TabNavigator({ screenProps = {} }) {
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="DashBoard" component={DashBoard} initialParams={screenProps} />
      <Tab.Screen name="HealthTips" component={HealthTips} />
      <Tab.Screen name="Progress" component={ProgressView} />
      <Tab.Screen name="RiskyOmeter" component={RiskyOmeter} />
      <Tab.Screen name="Profile" component={UserProfile} />
    </Tab.Navigator>
  );
}
