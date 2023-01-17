import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Rides from './Rides';
import SingleRide from './SingleRide';
import Options from './Options';
import Users from './Users';
import SingleUser from './SingleUser';

const MainStack = createStackNavigator();

export const Main = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Options" component={Options} />
    <MainStack.Screen name="Rides" component={Rides} />
    <MainStack.Screen name="SingleRide" component={SingleRide} />
    <MainStack.Screen name="Users" component={Users} />
    <MainStack.Screen name="SingleUser" component={SingleUser} />
  </MainStack.Navigator>
);
