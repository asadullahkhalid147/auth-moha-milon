import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';
import { onAuthStateChanged } from 'firebase/auth';
import { signOut } from 'firebase/auth';

import { signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';


export const AuthContext = createContext(null);

  const googleProvider = new GoogleAuthProvider();

 const Authprovider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading , setLoading]=useState(true);

  

    const createUser=(email,password)=>{
      setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser=(email,password)=>{
      setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const signInWithGoogle = ()=>{
      return signInWithPopup(auth,googleProvider);
    }

    const signOutUser = () =>{
      setLoading(true);
      return signOut(auth);
    }

      useEffect(()=>{
      const unSubscribe=  onAuthStateChanged(auth,currentUser=>{
          console.log('Current User',currentUser);
          setUser(currentUser);
          setLoading(false);
        })

        return()=>{
          unSubscribe();
      }
      },[])

      

    const authInfo = {
     
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle,
    }
    return (
        
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
       
    );
};

export default Authprovider;