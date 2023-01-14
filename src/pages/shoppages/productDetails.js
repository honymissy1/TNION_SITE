import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import Image from '../../asset/images/he.jpg'

const ProductDetails = () =>{
    const [quantity, setQuantity] = useState(1);
    const {id} = useParams();
    const username = 1;


    const handleQuantity = (e) =>{
        if(e.target.value < 1) {
            setQuantity(1)
        }else{
            setQuantity(e.target.value)

        }
    }

    const order = () =>{
        console.log(' Yes we can order now');
        // We can send product order to the back-end from
        // this fuction
    }

    const login = () =>{
        const prompt = document.querySelector('.login-prompt');
        prompt.classList.add('show-prompt')
        console.log('Oga them never log you in');
    }

    const cancel = () =>{
        const prompt = document.querySelector('.login-prompt');
        prompt.classList.remove('show-prompt')
       console.log('Oga them never log you in');
    }

    
    return(
        <div className="product-details-container">
            <div className="product-details">
                <div className="product-details-img">
                    <img src={Image} alt="" />
                </div>
                <div className="product-details-content">
                    <h1>Rhapsody Bible</h1>
                    <h3>$33.50</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Neque blanditiis inventore aliquid accusantium! Asperiores
                    </p>
                    <input className="quantity" type="number" value={quantity} onChange={handleQuantity} /><br /><br />
                    <button onClick={username ? order : login}>Order</button>
                </div>
            </div>
            {
                !username && (
                        <div className="login-prompt">
                            <div style={{position: 'relative', padding: "30px"}}>
                                <h1 className="cancel" onClick={cancel}>x</h1>
                                <h1>Signin Now</h1>
                                <p>To order any product you must signin / signup</p>
                                <Link to="/signin">Signin </Link>or
                                <Link to="signup"> Signup</Link>
                            </div>
                        </div>
                    
                    )    
            }

        </div>
    )
}


export default ProductDetails;