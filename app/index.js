import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

export default function Index() {
  return (
  //  <View className="flex-1 items-center justify-center bg-red">
  //   <ActivityIndicator size="large" color="gray"  />
  //   <Text style={{margin:20}}>adfadasdasdfasdfsdf</Text>
  //   </View>
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'crimson' }}>
    <ActivityIndicator size="large" color="gray" />
    <Text style={{ margin: 20 }}>adfadasdasdfasdfsdf</Text>
  </View>
  );
}