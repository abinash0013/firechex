import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChange, createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from "./../firebase.config";
import { doc, getDoc, setDoc} from 'firebase/firestore';

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
  const [user, setUser] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(undefined)

  useEffect(()=>{     
    const unSub = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
        setUser(user);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    });  
    return unSub;
  }, [])

  const login = async (email, password) => {
    try {
      
    } catch (error) {
      
    }
  }
  const logout = async () => {
    try {
      
    } catch (error) {
      
    }
  }
  const register = async (email, password, profileUrl) => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log("responseLog______________", response?.user);
      await setDoc(doc(db, "users", response?.user?.uid),{
        username,
        profileUrl,
        userId:response.user.uid
      });
      return {success: true, data: response?.user}
    } catch (error) {
      console.log("Firebase Error:", error);  // Log the entire error object
      let msg = error.message;
      if (msg.includes('(auth/invalid-email)')) msg = 'Invalid email';
      else if (msg.includes('(auth/network-request-failed)')) msg = 'Network request failed. Please check your connection.';
      return { success: false, msg };   
    }
  }

  return (
    <AuthContext.Provider value={{user, isAuthenticated, login, register, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const value = useContext(AuthContext);

  if(!value){
    throw new Error("useAuth must be wrapped inside in Auth context provider")
  }
  return value
}