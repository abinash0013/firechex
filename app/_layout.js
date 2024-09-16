import { router, Slot, useSegments } from 'expo-router';
import React, { useEffect } from 'react';
import { AuthContextProvider, useAuth } from '../context/authContext';

const MainLayout = () => {
  const {isAuthenticated} = useAuth()
  const segments = useSegments()

  useEffect(()=>{
    // check if the user is auth is not
    if(typeof isAuthenticated == "undefined") return;
    const inApp = segments[0]=='(app)';
    if(isAuthenticated && !inApp){
      // redirect to home
      // router.replace('home');
      router.replace('signIn');
    } else if (isAuthenticated == false){
      // redirect to signin page
      router.replace('signIn');

    }
  },[isAuthenticated])

  return <Slot />
}

export default function RootLayout() {
  return (
    <AuthContextProvider>
      <MainLayout />
    </AuthContextProvider>
  );
}
