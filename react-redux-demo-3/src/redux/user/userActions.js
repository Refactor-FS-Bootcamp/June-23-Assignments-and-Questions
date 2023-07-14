import axios from "axios"
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/userz')
                .then(res => dispatch(fetchUsersSuccess(res.data)))
                .catch(err => dispatch(fetchUsersFailure(err.message)))
    }
}

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}