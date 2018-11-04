import firebase from "firebase";
import { Actions } from "react-native-router-flux"
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from "../actionTypes";

export const emailChanged = (email) => {
    return {
        type: EMAIL_CHANGED,
        email
    }
}

export const passwordChanged = (password) => {
    return {
        type: PASSWORD_CHANGED,
        password
    }
}

export const loginUser = ({ email, password }) => {

    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFail(dispatch))
            });
    }
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({ type: LOGIN_USER_SUCCESS, user })
    Actions.main();
}

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL })
}