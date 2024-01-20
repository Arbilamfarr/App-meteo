import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {deviceHeight, deviceWidth} from './Dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';
import Cards from './Cards';

export default Home=(props)=> {
  const [city, setCity] = useState('');

  const cities = [
    {
      name: 'New Delhi',
      image: require('../assets/images/image3.jpg'),
    },
    {
      name: 'New York',
      image: require('../assets/images/image4.jpg'),
    },
    {
      name: 'London',
      image: require('../assets/images/image5.jpg'),
    },
    {
      name: 'San Francisco',
      image: require('../assets/images/image6.jpg'),
    },
    {
      name: 'New Jersey',
      image: require('../assets/images/image7.jpg'),
    },
  ];

  return (
    <View>
      <ImageBackground
        source={require('../assets/images/image2.jpg')}
        style={{height: deviceHeight, width: deviceWidth,marginTop:50}}
        imageStyle={{opacity: 0.8, backgroundColor: 'green'}}
      />
      <View
        style={{
          position: 'absolute',
          paddingVertical: 70,
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: deviceWidth - 20,
          }}>
           <Icon name="bars" size={22} color="white" />
          <Image
            source={require('../assets/images/user.jpeg')}
            style={{height: 46, width: 46, borderRadius: 50}}
          />
        </View>

        <View style={{paddingHorizontal: 10, marginTop: 100}}>
          <Text style={{fontSize: 26, color: 'white'}}>Hello Lamfarrad Elarbi</Text>
          <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
            Search the city by the name
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 50,
              borderWidth: 1,
              borderColor: 'white',
              marginTop: 16,
              paddingHorizontal: 10,
            }}>
            <TextInput
              value={city}
              onChangeText={val => setCity(val)}
              placeholder="Search City"
              placeholderTextColor="white"
              style={{paddingHorizontal: 15, paddingVertical:10,color: 'white', fontSize: 16}}
            />
            <TouchableOpacity onPress={() => props.navigation.navigate('Details', {name: city})}>
              <Icon name="search" size={22} color="white" style={{paddingRight:10}} />
            </TouchableOpacity>
          </View>

          <Text style={{color: 'white', fontSize: 25, paddingHorizontal: 10, marginTop: 120, marginBottom: 20}}>
            My Locations
          </Text> 
          <FlatList
          horizontal
            data={cities}
            renderItem={({item}) => (
              <Cards name={item.name} image={item.image} navigation={props.navigation} />
            )}
          />
        </View>
      </View>
    </View>
  );
}
