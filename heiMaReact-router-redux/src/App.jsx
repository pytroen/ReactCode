import React from 'react'
import ReduxLearn from './Redux学习'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import router from './router'
const App = () => {
    return (
        <>
            <Provider store={store}>
                <RouterProvider router={router}></RouterProvider>
                {/* <ReduxLearn /> */}
            </Provider>

        </>

    )
}

export default App