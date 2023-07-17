import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './main';
// import Profile from '@app/screens/profile';
// import UserUpdateDetails from '@app/screens/users/user-update-details';
// import QRCodeNavigator from './qr-code.route'
// import RoomNavigator from './rooms.route'
// import ConversationNavigatior from './messages.route'
const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen}  />
      {/* <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="UserUpdateDetails" component={UserUpdateDetails} />

      <Stack.Screen name="qr-code" component={QRCodeNavigator} options={{headerShown: false}} />
      <Stack.Screen name="rooms" component={RoomNavigator} options={{headerShown: false}} />
      <Stack.Screen name="conversation" component={ConversationNavigatior} options={{headerShown: false}} /> */}
    </Stack.Navigator>
  );
};

export default Routes;
