import { Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar'
import { useRef, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Loading from '../components/Loading';

export default function SignIn() {
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if(!emailRef.current || passwordRef.current){
      Alert.alert("Sign In", "Please fill all the fields")
      return;
    }
    // login process 
  }
 
  return (
    <View className="flex-1"> 
      <StatusBar style="dark" />
      <View className="flex-1 gap-12" style={{paddingTop: hp(8), paddingHorizontal: wp(8)}}>  
        <View className="items-center">
          <Image style={{height: hp(20)}} resizeMode='contain' source={require('./../assets/images/signin.png')} />
        </View>
        <View className="">
          <Text style={{fontSize: hp(4)}} className="font-bold tracking-wider text-center text-neutral-800">Sign In</Text>
          <View className="gap-4 pt-6">
            <View style={{height:hp(7)}} className="flex-row px-4 bg-neutral-100 items-center rounded-2xl">
              <Octicons name="mail" color={"gray"} size={hp(2.7)} />
              <TextInput
                onChange={()=>emailRef.current=value}
                style={{fontSize: hp(2), marginLeft: 5}}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Enter Email"
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={{height:hp(7)}} className="flex-row px-4 bg-neutral-100 items-center rounded-2xl">
              <Octicons name="lock" color={"gray"} size={hp(2.7)} />
              <TextInput
                onChange={()=>passwordRef.current=value}
                style={{fontSize: hp(2), marginLeft: 5}}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Enter Password"
                secureTextEntry
                placeholderTextColor={'gray'}
              />
            </View>
          </View> 
          <View className="gap-4">
            <Text style={{fontSize: hp(1.8)}} className="font-bold text-right text-neutral-500 pt-3">Forgot Password.!</Text>
            <View>
              {loading ? (
                <View className="flex-row justify-center">
                  <Loading size={50} />
                </View>
              ) : (
                <TouchableOpacity onPress={handleLogin} style={{height: hp(6.5)}} className="bg-indigo-500 rounded-xl justify-center items-center">
                  <Text style={{fontSize: hp(2.7)}} className="text-white font-bold tracking-wider">Sign In</Text>
                </TouchableOpacity>
              )}
            </View>
            <View className="flex-row justify-center">
              <Text style={{fontSize: hp(1.8)}} className="font-semibold text-neutral-500">Don't have an account </Text>
              <Pressable>
                <Text style={{fontSize: hp(1.8)}} className="font-bold text-indigo-500">Sign Up</Text>
              </Pressable>
            </View>
          </View>
        </View> 
      </View>
    </View>
  )
}