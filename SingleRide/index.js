import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {
  useGetAllRidesQuery,
  useGetRidesByIdQuery,
} from '../services/ridesApiSlice';

const SingleRide = props => {
  const {data} = props.route.params;

  const {data: rideDetail, isLoading} = useGetRidesByIdQuery(data);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator color={'yellow'} size={'large'} />
      ) : (
        <Text style={{color: 'green'}}>{rideDetail.body}</Text>
      )}
    </View>
  );
};

export default SingleRide;
