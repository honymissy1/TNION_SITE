import '../asset/styles/nav.css';
import useContextHook from ".././Hooks/contestHook";
import '../asset/styles/signin.css'
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';


const Signup = () =>{
    const navigate = useNavigate();
    const {userLogin} = useContextHook();
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const passwordRef1 = useRef();
    const passwordRef2 = useRef();

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const request = await fetch(`/signup`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                fullname: nameRef.current.value,
                email: emailRef.current.value,
                phone: phoneRef.current.value,
                password: passwordRef1.current.value
            })
        })

        if(request.ok){
            // Dispatch hook
            const result = await request.json();

            userLogin(result.data.fullname, result.data.email)
            navigate('/', {replace: true})
        }else{
            console.log('errrt');
        }


    
    }


    return (
         <div className='signin'>
            <h1>Welcome to TNION Community 👩‍💻👨‍💻</h1>
            <p className='signin-label'>Signup</p>
            <div>
                <form action='/signup' method="post">
                    <label>Full Name</label>
                    <input ref={nameRef} type="text" required/>

                    <label>Email</label>
                    <input ref={emailRef} type="text" required />

                    <label>Telephone</label>
                    <input ref={phoneRef} type="number" />


                    <label>Password</label>
                    <input ref={passwordRef1} type="password" required/>

                    <label>Confirm Password</label>
                    <input ref={passwordRef2} type="password" required/>
                    
                    <input id="submit" type="submit" onClick={handleSubmit} value="Signup" />
                    <h2>Have an account ?<Link to="/signin"> <span style={{color: "white"}}> Sign In</span></Link></h2>
                </form>

            </div>
         </div>
    )
}

export default Signup