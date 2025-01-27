import Rootlayout from './Rootlayout'
import Modal from './components/modal/Modal'
import Home from './components/home/Home'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

function App() {

  let browserRouter=createBrowserRouter([
    {
        path:'/',
        element:<Rootlayout/>,
        children:[{
            path:'',
            element:<Home/>
        }
    ]
    }
])
return (
<div><RouterProvider router={browserRouter} /></div>
)
}

export default App
