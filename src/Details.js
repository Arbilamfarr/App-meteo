import {View, ImageBackground, Image,TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {deviceHeight, deviceWidth} from './Dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Details(props) {
  const [data, setData] = useState();
  const {name} = props.route.params;

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=f431ca91812d9776ede2ad81eb4ace6f`,
    )
      .then(res => res.json())
      .then(res =>{setData(res);
      console.log(res)} )
      .catch(err => console.log(err));
  }, []);

  const Data = ({title, value}) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{color: 'white', fontSize: 22}}>{title}</Text>
      <Text style={{color: 'white', fontSize: 22}}>{value}</Text>
    </View>
  );

  return (
    <View>
      <ImageBackground
        source={require("../assets/images/image1.jpg")}
        style={{height: deviceHeight, width: deviceWidth}}
        imageStyle={{opacity: 0.6, backgroundColor: 'blue',marginVertical:50}}
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
          <TouchableOpacity onPress={()=>props.navigation.goBack()}>
      <Icon name="arrow-left" size={30} color="white" />
         </TouchableOpacity>
          <Image
            source={require('../assets/images/user.jpeg')}
            style={{height: 46, width: 46, borderRadius: 50}}
          />
        </View>

        {data ? (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              height: deviceHeight - 100,
            }}>
            <View>
              <Text style={{color: 'white', fontSize: 40}}>{name}</Text>
              <Text style={{fontSize: 22, color: 'white', textAlign:"center"}}>
                {data['weather'][0]['main']}
              </Text>
            </View>

            <Text style={{color: 'white', fontSize: 64}}>
              {(data['main']['temp'] - 273).toFixed(2)}&deg; C
            </Text>

            <View>
            <Text style={{color: 'white', fontSize: 22,fontWeight:'bold', marginBottom: 16 ,textAlign:'center'}}>Weather Details</Text>
            <View style={{width: deviceWidth - 60}}>
              <Data value={data['wind']['speed']} title="Wind" />
              <Data value={data['main']['pressure']} title="Pressure" />
              <Data value={`${data['main']['humidity']}%`} title="Humidity" />
              <Data value={data['visibility']} title="Visibility" />
            </View>
            </View>
          </View>
        ) : <ActivityIndicator size="large" color="#ff0" style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:deviceHeight/2-50}}></ActivityIndicator>}
      </View>
    </View>
  );
}

//npm i -g eas-cli
//eas login
//set-ExecutionPolicy
//scope executionPolicy
// RemoteSigned