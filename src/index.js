import React from "react";
import {createRoot} from "react-dom/client";
import W_Field from "./UI/Field/W_Field";


import {createStore} from "redux";
import {Provider} from "react-redux";
import counter from "./store/reducers/reducer";
import initialState from "./store/initialState/initialState";

const destination = document.querySelector("#container");
// 
const store = createStore(counter,initialState())
console.log(store.getState())
const root = createRoot(destination);
root.render(
    <Provider store={store}>
        <W_Field>

        </W_Field>
    </Provider>
)

