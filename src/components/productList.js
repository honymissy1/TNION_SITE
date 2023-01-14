import {Link} from 'react-router-dom'
import '../asset/styles/shop.css';
import Img from '../asset/images/blog-img.jpg';

const ProductList = () =>{
    return(
        <div className="product-container">
            <div className="products">
                <div className="product-img">
                    <img src={Img} alt="Shoppimg" />
                </div>

                <div className="product-content">
                    <h1>Rhapsody</h1>
                    <h2>$33.45</h2>
                    <p>This is the best book in the whole world</p>
                   <Link to="/shop/6t6ftv"><button>Order Now</button></Link> 
                </div>
            </div>

            <div className="products">
                <div className="product-img"></div>

                <div className="product-content">
                    <h1>Rhapsody</h1>
                    <h2>$33.45</h2>
                    <p>This is the best book in the whole world</p>
                    <button>Order Now</button>
                </div>
            </div>
           
        </div>
    )
}

export default ProductList;