import { AsyncStorage } from "react-native";

export const onSignIn = (token) => AsyncStorage.setItem('token', token);

export const onSignOut = () => AsyncStorage.removeItem('token');

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('token')
      .then(res => {
        if (res !== null) {
          console.log('KEADAAN LOGIN')
          resolve(true);
        } else {
          resolve(false);
          console.log('KEADAAN LOGOUT')
        }
      })
      .catch(err => reject(err));
  });
};

export const isToken = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('token')
      .then(res => {
        if (res !== null) {
          resolve(res);
        } else {
          resolve('');
        }
      })
      .catch(err => reject(err));
  });
};