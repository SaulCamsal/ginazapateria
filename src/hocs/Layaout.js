import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
//Export con brakets {}, porq nuestro componente no va definido como un "export default"
import Navbar from "../componets/navigation/Navbar";
import Footer from "../componets/navigation/Footer";
import Display from "../componets/navigation/Display";
import Cart from "../componets/navigation/Cart";

const Layout = (props) => {
    return(
        <div>
            <Navbar/>
            <Cart/>
            <ToastContainer autoClose={5000} /> 
            {props.children}
            <Footer/>
        </div>
    )
} 

export default Layout