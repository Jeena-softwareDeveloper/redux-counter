import {configureStore} from '@reduxjs/toolkit'
import  ji from './counter'
export const store=configureStore({
    reducer:{
        counter:ji
    }
})