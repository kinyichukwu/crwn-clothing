import Home from "./routes/home/home.component";
import { createBrowserRouter,   RouterProvider
} from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";
const Shop = () => {
  return <h1>Shop</h1>
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation/>,
    children: [
      {
        
        element: <Home/>,
        index: true
      },
      {
        path: '/shop',
        element: <Shop/>,
      },
      {
        path: '/sign-in',
        element: <SignIn/>,
      }
    ]
  }
])

const App = () => {

  return( 
    <RouterProvider router={router}/>
   
    );
};

export default App;
