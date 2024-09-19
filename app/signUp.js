import { Feather, Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar'
import { useRef, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Loading from '../components/Loading';
import CustomKeyBoardView from '../components/CustomKeyBoardView';

export default function SignUp() {
  const router = useRouter();
  
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const usernameRef = useRef("");
  const profileRef = useRef("");

  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if(!emailRef.current || !passwordRef.current || !usernameRef.current || !profileRef.current){
      Alert.alert("Sign Up", "Please fill all the fields")
      return;
    }
    // login process 
  }

  const handleGoToSignIn = async () => {
    router.push("signIn")
  }
 
  return (
    <CustomKeyBoardView> 
      <StatusBar style="dark" />
      <View className="flex-1 gap-12" style={{paddingTop: hp(8), paddingHorizontal: wp(8)}}>  
        <View className="items-center">
          <Image style={{height: hp(20)}} resizeMode='contain' source={require('./../assets/images/login.png')} />
        </View>
        <View className="">
          <Text style={{fontSize: hp(4)}} className="font-bold tracking-wider text-center text-neutral-800">Sign Up</Text>
          <View className="gap-4 pt-6">
            <View style={{height:hp(7)}} className="flex-row px-4 bg-neutral-100 items-center rounded-2xl">
              <Feather name="user" color={"gray"} size={hp(2.7)} />
              <TextInput
                onChange={(value)=>usernameRef.current=value}
                style={{fontSize: hp(2), marginLeft: 5}}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Username"
                placeholderTextColor={'gray'}
              />
            </View> 
            <View style={{height:hp(7)}} className="flex-row px-4 bg-neutral-100 items-center rounded-2xl">
              <Octicons name="mail" color={"gray"} size={hp(2.7)} />
              <TextInput
                onChange={(value)=>emailRef.current=value}
                style={{fontSize: hp(2), marginLeft: 5}}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Email"
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={{height:hp(7)}} className="flex-row px-4 bg-neutral-100 items-center rounded-2xl">
              <Octicons name="lock" color={"gray"} size={hp(2.7)} />
              <TextInput
                onChange={(value)=>passwordRef.current=value}
                style={{fontSize: hp(2), marginLeft: 5}}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Password"
                secureTextEntry
                placeholderTextColor={'gray'}
              />
            </View>            
            <View style={{height:hp(7)}} className="flex-row px-4 bg-neutral-100 items-center rounded-2xl">
              <Feather name="image" color={"gray"} size={hp(2.7)} />
              <TextInput
                onChange={(value)=>emailRef.current=value}
                style={{fontSize: hp(2), marginLeft: 5}}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Profile Url"
                placeholderTextColor={'gray'}
              />
            </View>
          </View> 
          <View className="gap-4 pt-3">
            <View>
              {loading ? (
                <View className="flex-row justify-center">
                  <Loading size={50} />
                </View>
              ) : (
                <TouchableOpacity onPress={handleRegister} style={{height: hp(6.5)}} className="bg-indigo-500 rounded-xl justify-center items-center">
                  <Text style={{fontSize: hp(2.7)}} className="text-white font-bold tracking-wider">Sign In</Text>
                </TouchableOpacity>
              )}
            </View>
            <View className="flex-row justify-center">
              <Text style={{fontSize: hp(1.8)}} className="font-semibold text-neutral-500">Already have an account ?</Text>
              <Pressable onPress={handleGoToSignIn}>
                <Text style={{fontSize: hp(1.8)}} className="font-bold text-indigo-500">Sign Up</Text>
              </Pressable>
            </View>
          </View>
        </View> 
      </View>
    </CustomKeyBoardView>
  )
}