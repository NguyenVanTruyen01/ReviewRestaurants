import { configureStore } from '@reduxjs/toolkit'
import {Provider} from 'react-redux'

import rootReducers from './reducers/index'

//Redux toolkit auto add thunk
const store = configureStore({
        reducer: {
            rootReducers,
        }
    }
)

const DataProvider = ({children})=>{
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default  DataProvider