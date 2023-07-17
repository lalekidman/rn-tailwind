import React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Button
          className="bg-red-500 rounded-lg p-4 my-2"
          title="Update Profile Details"
          onPress={() =>
            navigation.navigate('UserUpdateDetails', {name: 'Jane'})
          }
      />
      <Button
          title="QR Screen"
          onPress={() =>
            navigation.navigate('qr-code', {screen: "CreateQRCodeForm"})
          }
      />
      <Button
          title="Rooms"
          onPress={() =>
            navigation.navigate('rooms')
          }
      />
      <Button
          title="Room Threadx"
          onPress={() =>
            navigation.navigate('conversation')
          }
      />
      <Text>Home Scrxeen</Text>
    </View>
  );
};

export default HomeScreen
