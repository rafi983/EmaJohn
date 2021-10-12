import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeFirebase from '../Firebase/firebase.init';

initializeFirebase();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const auth = getAuth();

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    }).then(() => {});
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {});
  };

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {})
      .catch(error => {
        setError(error.message);
      });
  };

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const handleRegister = e => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user);
        setUserName();
        verifyEmail();
        setError('');
      })
      .catch(error => setError(error.message));
  };

  const handleLogin = e => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user);
        setError('');
      })
      .catch(error => setError(error.message));
  };

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });

    return () => unsubscribed;
  }, []);

  return {
    user,
    error,
    signInUsingGoogle,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleRegister,
    handleResetPassword,
    handleLogin,
    setUser,
    logOut,
  };
};

export default useFirebase;
