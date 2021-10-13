import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  OAuthProvider,
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
const yahooProvider = new OAuthProvider('yahoo.com');
const facebookProvider = new FacebookAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMsg, setLoginMsg] = useState('');
  const [verificationMsg, setVerificationMsg] = useState('');
  const [resetMsg, setResetMsg] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

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
      .then(() => {
        setResetMsg('Reset password link sent !');
        setLoginMsg('');
      })
      .catch(error => {
        setError(error.message);
      });
  };

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signInUsingYahoo = () => {
    return signInWithPopup(auth, yahooProvider);
  };

  const signInUsingFacebook = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  const handleRegister = e => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user);
        setUser(result.user);
        setUserName();
        verifyEmail();
        setVerificationMsg('Verification e-mail sent!! 😎');
        setError('');
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  const handleLogin = e => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user);
        setLoginMsg('Login successful');
        setError('');
      })
      .catch(error => setError(error.message));
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth).then(() => {
      setUser({});
      setIsLoading(false);
    });
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, user => {
      if (user && user.emailVerified) {
        setUser(user);
        setLoginMsg('Login successful');
        setResetMsg('');
      } else {
        setUser({});
      }

      setIsLoading(false);
    });

    return () => unsubscribed;
  }, []);

  return {
    user,
    error,
    loginMsg,
    verificationMsg,
    isLoading,
    resetMsg,
    setVerificationMsg,
    setIsLoading,
    signInUsingGoogle,
    signInUsingYahoo,
    signInUsingFacebook,
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
