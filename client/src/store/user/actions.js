import { LOGIN, LOGOUT, ONLOGIN, ONLOGOUT, GET_DATA, GET_ERROR, CREATE_EMP, UPDATE_EMP, DELETE_EMP, GET_PENDING, PENDING_SUCCESS, GET_IMAGE } from './actionTypes'
import { AsyncStorage, Alert } from 'react-native'
import axios from 'axios'
import { isToken } from '../../components/auth'

// export const getData = () => {
//   return dispatch => {

//     AsyncStorage.getItem('token')
//       .then(res => {

//         if (res !== null) {
//         dispatch(pending())
//         axios.post(`http://172.16.13.169:3000/users/login`,{
//           // axios.get(`http://192.168.1.3:3000/employees`, {

//             headers: { token: res },
//           })
//             .then((response) => {
//               console.log('sovereign cafe'+response.data.data);

//               dispatch(successGetData(response.data.data))
//               dispatch(setOnLogin(response.data.data))
//             })
//             .catch((err) => {
//               console.log('now tel me now'+err);

//               dispatch(error(err))
//             })
//         } else {
//           console.log('KENAPAA MASUK GET DATA?');

//         }
//       })
//       .catch(err => reject(err));

//     // dispatch(clearData())

//   }
// }

export const login = (payload) => {
    let newPayload = {...payload }
    return dispatch => {
        // dispatch(pending())
        // axios.post(`http://172.16.13.169:3000/users/login`,{
        axios.post(`http://172.16.13.170:3000/users/login`, {
                username: newPayload.username,
                password: newPayload.password
            })
            .then((response) => {

                console.log('ini pesan' + response.data.message);
                console.log('INI TOKEN' + response.data.token)


                if (response.data.message === 'wrong username/password') {
                    Alert.alert(response.data.message);
                    console.log('KENAPA GAK MUNCUL ALERT')
                } else if (response.data.message === 'get data success') {
                    console.log('GAK SEHARUSNYA MASUK SINI')
                    AsyncStorage.setItem('token', response.data.token)
                    dispatch(success())
                        //BATAS GET
                        // AsyncStorage.getItem('token').then(res => {

                    //   if (res !== null) {
                    //   dispatch(pending())
                    //     // axios.get(`http://172.16.13.169:3000/employees`, {
                    //       axios.get(`http://192.168.1.3:3000/employees`, {
                    //       headers: { token: res },
                    //     })
                    //       .then((response) => {
                    //         console.log('sovereign cafe'+response.data.data);

                    //         dispatch(success(response.data.data))
                    //       })
                    //       .catch((err) => {
                    //         console.log('now tel me now'+err);

                    //         dispatch(error(err))
                    //       })
                    //   } else {
                    //     console.log('KENAPAA MASUK GET DATA?');

                    //   }
                    // })
                    .catch(err => reject(err));


                }

            })
            .catch((err) => {
                console.log('ini error' + err);
                Alert('Connection Problem')
                dispatch(error(err))

            })
    }
}

export const logout = () => {
    return dispatch => {
        AsyncStorage.removeItem('token')
        dispatch(successLogout())

    }
}





export const isSignedIn = () => {
    return dispatch => {

        AsyncStorage.getItem('token')
            .then(res => {

                if (res === null) {
                    dispatch(statLogin(false))

                } else {
                    dispatch(statLogin(true))
                }
            })
            .catch(err => reject(err));

    }
}

export const onLogin = () => {
    return dispatch => {


        AsyncStorage.getItem('token')
            .then(res => {

                if (res !== null) {
                    dispatch(pending())
                        // axios.get(`http://172.16.13.169:3000/employees`, {
                    axios.get(`http://172.16.13.170:3000/employees`, {

                            headers: { token: res },
                        })
                        .then((response) => {
                            console.log('sovereign cafe' + response.data.data);

                            dispatch(successGetData(response.data.data))
                            dispatch(setOnLogin(response.data.data))
                        })
                        .catch((err) => {
                            console.log('now tel me now' + err);

                            dispatch(error(err))
                        })
                } else {
                    console.log('stayyyy');

                }
            })
            .catch(err => reject(err));
    }
}

export const onLogout = () => {
    return dispatch => {
        dispatch(setOnLogout())
    }
}

export const onError = () => {
    return dispatch => {
        dispatch(error())
    }
}

export const onLoad = () => {
    return dispatch => {
        dispatch(pending())
    }
}

export const onLoadSuccess = () => {
    return dispatch => {
        dispatch(pendingSuccess())
    }
}


export const getData = () => {
    return dispatch => {

        AsyncStorage.getItem('token')
            .then(res => {

                if (res !== null) {
                    dispatch(pending())

                    //  axios.get(`http://172.16.13.169:3000/employees`, {
                    axios.get(`http://172.16.13.170:3000/employees`, {
                            headers: { token: res },
                        })
                        .then((response) => {
                            console.log('data image' + response.data.data);

                            dispatch(successGetData(response.data.data))
                        })
                        .catch((err) => {
                            console.log('error image' + err);

                            dispatch(error(err))
                        })
                } else {
                    console.log('NO TOKEN NO PARTY');

                }
            })
            .catch(err => reject(err));

        // dispatch(clearData())

    }
}


export const getImage = () => {
    return dispatch => {

        AsyncStorage.getItem('token')
            .then(res => {

                if (res !== null) {
                    dispatch(pending())
                    axios.get(`http://172.16.13.170:3000/employees`, {
                            //  axios.get(`http://172.16.13.169:3000/images`, {

                            headers: { token: res },
                        })
                        .then((response) => {
                            console.log('data image' + response.data.data);

                            dispatch(successGetImage(response.data.data))
                        })
                        .catch((err) => {
                            console.log('error image' + err);

                            dispatch(error(err))
                        })
                } else {
                    console.log('NO TOKEN NO PARTY');

                }
            })
            .catch(err => reject(err));

        // dispatch(clearData())

    }
}

function statLogin(payload) {
    return { type: STATLOGIN, payload }
}

function setOnLogin(payload) {
    return { type: ONLOGIN, payload }
}


function setOnLogout() {
    return { type: ONLOGOUT }
}

function success(payload) {
    return { type: LOGIN, payload }
}

function successLogout() {
    return { type: LOGOUT }
}


function successGetData(payload) {
    return { type: GET_DATA, payload }
}

function successGetImage(payload) {
    return { type: GET_IMAGE, payload }
}


function error(payload) {
    return { type: GET_ERROR, payload }
}

function pending() {
    return { type: GET_PENDING }
}

function pendingSuccess() {
    return { type: PENDING_SUCCESS }
}