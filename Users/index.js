import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import {
  useAddPostMutation,
  useGetAllVehiclesQuery,
  useLoginUserMutation,
} from '../services/userApiSlice';
import {useDispatch, useSelector} from 'react-redux';
import {addLoginUser} from '../store/authSlice';

const Users = ({navigation}) => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  console.log('ATUGH =============', auth?.userData?.displayName);
  // const {data, isLoading, isError} = useGetAllUsersQuery();
  const {data: vehiclesData, isLoading, isError} = useGetAllVehiclesQuery();

  // console.log('vehiclesData', vehiclesData?.data);

  const [loginUser, {isLoading: isLoadingLogin, isError: isErrorLogin}] =
    useLoginUserMutation();
  // const [addPost, {isLoading: isLoadingLogin, isError: isErrorLogin}] =
  //   useAddPostMutation();

  const addUser = () => {
    const reqBody = {
      email: 'Maaz2@gmail.com',
      password: '12345678',
    };
    loginUser(reqBody)
      .unwrap()
      .then(payload => {
        console.log('fulfilled', payload);
        dispatch(addLoginUser(payload));
      })
      .catch(error => console.error('rejected', error?.data?.message));

    // const reqBody = {
    //   title: 'TEST',
    //   body: 'TR',
    //   id: 10,
    // };
    // addPost(reqBody)
    //   .unwrap()
    //   .then(payload => console.log('fulfilled', payload))
    //   .catch(error => console.error('rejected', error?.data?.message));
  };

  console.log('S', isLoadingLogin, isErrorLogin);

  return (
    <View>
      <Text style={{color: 'black', fontSize: 30}}>
        {auth?.userData?.displayName}
      </Text>
      <TouchableOpacity
        style={{padding: 20, backgroundColor: 'red'}}
        onPress={addUser}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
      {/* {isLoading ? (
        <ActivityIndicator color={'green'} size={'small'} />
      ) : (
        <>
          {data?.map(item => {
            return (
              <TouchableOpacity
                style={{padding: 20, backgroundColor: 'purple'}}
                onPress={() =>
                  navigation.navigate('SingleUser', {
                    data: item.id,
                  })
                }>
                <Text color={'black'}>{item?.name}</Text>
              </TouchableOpacity>
            );
          })}
        </>
      )} */}
    </View>
  );
};

export default Users;
