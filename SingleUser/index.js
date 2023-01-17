import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  useGetUsersByIdQuery,
  useloginUserMutation,
} from '../services/userApiSlice';

const SingleUser = props => {
  const {data: userId} = props.route.params;
  const {data, isLoading, isError} = useGetUsersByIdQuery(userId);

  console.log('S', userId);

  return (
    <View>
      <Text style={{color: 'red'}}>{data?.website}</Text>
    </View>
  );
};

export default SingleUser;
