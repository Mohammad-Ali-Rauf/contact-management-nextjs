import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    // auth,
    // contacts,
    // users
})

const store = configureStore({
    reducer: rootReducer
})

export default store;
