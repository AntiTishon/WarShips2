import React from 'react'
import "./CenterField.css"

import {Provider} from "react-redux";
import {createStore} from "redux";

import {counter} from "../../../store/reducers/reducer";
import initialState from "../../../store/initialState/initialState";
import {FieldContainer} from "../../Field/FieldContainer.jsx";

const store = createStore(counter,initialState())
console.log(store.getState())

const  CenterField = () => {

     return (
         <div className='clsCenterField'>
            <Provider store={store}>
                <FieldContainer></FieldContainer>
            </Provider>
         </div>
    );
};

    

export {CenterField};