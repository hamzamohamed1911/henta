import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './_auth/forms/Login'
import Register from './_auth/forms/Register'
import ForgetPassword from './_auth/forms/forget-password'
import Otpverif from './_auth/forms/Otpverif'
import CreateNewPassword from './_auth/forms/createNewPassword'
import Home from './pages/Home'
import Category from './pages/Category'
import Categories from './pages/Categories'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import WatchList from './pages/WatchList'
import Profile from './pages/Profile'
import AutherProfile from './pages/AutherProfile';
import Library from './pages/Library'
import Book from './pages/Book'
import Payment from './pages/Payment'
import MainLayout from './pages/MainLayout'
import ErrorPage from './components/Error'
import Notification from './pages/Notification'
import Favourite from './pages/Favourite'
import PublishBook from './pages/PublishBook'
const router = createBrowserRouter([
 {path:'',
  element:<MainLayout/>,errorElement:<ErrorPage/>,

  children:[
    {index:true, element:<Home/> ,index:true},
    {path:'categories',element:<Categories/> },
    {path:'cart' , element:<Cart/>},
    {path:'watchList' , element:<WatchList/>},
    {path:'favourite', element:<Favourite/>},

  
  ]
  },
  {path:'categories/:catId',element:<Category/> },
  {path:'/categories/:catId/:book' ,element:<ProductDetails/>},
  {path:'/book/:bookId' ,element:<Book/>},
  {path:'library', element:<Library/>},
  {path:'library', element:<Library/>},
  {path:'payment', element:<Payment/>},
  {path:'publish-book', element:<PublishBook/>},
  {path:'notification', element:<Notification/>},




{path:'login',element:<Login/>},
{path:'register',element:<Register/>},
{path:'forget-password',element:<ForgetPassword/>},
{path:'verify-otp',element:<Otpverif/>},
{path:'new-password',element:<CreateNewPassword/>},
{path:'profile' , element:<Profile/>},
{path:'auther-profile',element:<AutherProfile/>},

])
function App() {

  return (
    <>
    <main>
    <RouterProvider router={router}/>
    </main>
      
    </>
  )
}

export default App
