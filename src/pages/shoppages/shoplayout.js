import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav";
import '../../asset/styles/shop.css';
import Image from '../../asset/images/shop.png'

const ShopLayout = () =>{
    return(
        <div>
            <Nav />
            <div className="shop-container">
              <div className="shop-img">
                <img src={Image} alt="See it"/>
              </div>

              <div className="shop-content">
                <Outlet />  
              </div>
            </div>
    
        </div>
    )
}


export default ShopLayout;