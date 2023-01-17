import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import {
  useAddRideMutation,
  useGetAllRidesQuery,
} from '../services/ridesApiSlice';

const Rides = props => {
  const {navigation} = props;
  const {data, isLoading, isError} = useGetAllRidesQuery();
  const [addRide] = useAddRideMutation();

  console.log('S', isLoading);

  const addPost = () => {
    console.log('AAAA');
    addRide({
      title: 'TEST',
      body: 'TEST BODY',
      userId: 100,
    });
  };

  return (
    <View>
      <TouchableOpacity
        onPress={addPost}
        style={{padding: 30, backgroundColor: 'purple'}}>
        <Text> ADD POST</Text>
      </TouchableOpacity>
      {isLoading ? (
        <ActivityIndicator color={'red'} size={'large'} />
      ) : (
        <>
          {data?.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{padding: 20, backgroundColor: 'black'}}
                onPress={() =>
                  navigation.navigate('SingleRide', {
                    data: item.id,
                  })
                }>
                <Text>{item?.title}</Text>
              </TouchableOpacity>
            );
          })}
        </>
      )}
    </View>
  );
};

export default Rides;
