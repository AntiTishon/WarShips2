import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Bottom } from '../Bottom/Bottom';
import { CenterField } from '../CenterField/CenterField';
import { Header } from '../Header/Header';
import { LeftField } from '../LeftField/LeftField';
import { Profile } from '../Profile/Profile';
import { Records } from '../Records/Records';
import { RightBar } from '../RightBar/RightBar';
import { Rules } from '../Rules/Rules';
import  "./App.css"

const  App = () => {

     return (
         <BrowserRouter>
         
         <div className='clsApp'>
            <div className = "innerContent">
                <Routes>
                    <Route path = '/records' element = {<Records/>}/>
                    <Route path = '/game' element = {<CenterField/>}/>
                    <Route path = '/profile' element = {<Profile/>}/>
                    <Route path = '/rules' element = {<Rules/>}/>
                </Routes>
            </div>

            <Header/>
            <LeftField/>
            <RightBar/>
            <Bottom/>
            
         </div>
         </BrowserRouter>
    );
};

    

export {App};