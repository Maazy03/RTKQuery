import {View, Button} from 'react-native';
import React from 'react';

const Options = ({navigation}) => {
  return (
    <View>
      <Button title="Rides" onPress={() => navigation.navigate('Rides')} />
      <Button title="Users" onPress={() => navigation.navigate('Users')} />
    </View>
  );
};

export default Options;
