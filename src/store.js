import { configureStore, createSlice } from "@reduxjs/toolkit"

const userLog = createSlice({
    name: 'user',
    initialState: {
        loggedIn : false,
        userKey : null,
        currentUser : [],
    },
   
    reducers: {
        connectUser: (state, tokenKey) => {
            state.loggedIn = true;
            state.userKey = tokenKey.payload;
        },

        setUser: (state, user) => {
            state.currentUser = user.payload;
        },

        updateUserState: (state, user) => {
            state.currentUser.firstName = user.payload.firstName
            state.currentUser.lastName = user.payload.lastName
        },


        disconnectUser: (state) => {
            state.loggedIn = false;
            state.userKey = null;
            state.currentUser = [];
        }
    },
}) 

export const {connectUser, setUser, updateUserState, disconnectUser} = userLog.actions;

export const store = configureStore({
    reducer: {
        userLog: userLog.reducer,
    },

})

