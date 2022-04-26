
import { db } from "../firebase.config";
import {
    getAuth,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword as createWithEmailPassword,
    signInWithEmailAndPassword as signWithEmailPassword,
    updateProfile as fbUpdateProfile,
} from "firebase/auth";
import { useState, useEffect, useContext, createContext } from "react";
import { setDoc, updateDoc, doc } from 'firebase/firestore/lite';

const auth = getAuth();

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const createUserWithEmailAndPassword = (email, password) => {
        return createWithEmailPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                return userCredential.user;
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    }

    const signInWithEmailAndPassword = (email, password) => {
        return signWithEmailPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    }

    const logout = () => {
        return signOut(auth)
            .then(() => {
                setUser(null);
            });
    }

    const updateProfileName = async (credential, profileName) => {
        return fbUpdateProfile(credential.user, { displayName: profileName })
            .then((value) => {
                return setDoc(doc(db, 'users', credential.user.uid), {
                    uid: credential.user.uid,
                    displayName: credential.user.displayName,
                    email: credential.user.email,
                })
                    .catch((error) => {
                        console.log('setDoc error');
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log('profile name error');
                console.log(error);
            });
    }

    const updateProfileURL = async (profileURL) => {
        return fbUpdateProfile(user, { photoURL: profileURL })
            .then(async (value) => {
                return updateDoc(doc(db, 'users', user.uid), {
                    photoURL: profileURL
                })
                    .catch((error) => {
                        console.log('updateDoc error');
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log('profile picture error');
                console.log(error);
            });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                setIsAuthenticating(false);
            } else {
                setUser(false);
            }
        });
        return () => unsubscribe();
    }, []);

    const values = {
        user,
        isAuthenticating,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        updateProfileName,
        updateProfileURL,
        logout
    };

    return (
        <AuthContext.Provider value={values}>
            {!isAuthenticating && children}
        </AuthContext.Provider>
    );
}
