import { Link, useNavigate} from 'react-router-dom';
import '../asset/styles/nav.css';
import '../asset/styles/signin.css';
import { useEffect, useRef, useState } from 'react';
import useContextHook from ".././Hooks/contestHook";



const Signin = () =>{
    const {userLogin} = useContextHook();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [err, setErr] = useState('')

    const navigate = useNavigate()

    const submitHandle = async (e) =>{
        e.preventDefault()
        const request = await fetch(`/login`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                email: emailRef.current.value,
                password: passwordRef.current.value
            })
        })

        const result = await request.json()
        if(request.ok){
            userLogin(result.fullname, result.email)
            navigate('/',{replace: true})
        }else{
            setErr('Username / Password Invalid')
        }
    }

    useEffect(() =>{
        const email = document.querySelector('.email');
        email.focus = () =>{
            setErr('')

        }
    }, [emailRef])
    return (
         <div className='signin'>

            <h1>Welcome to TNION Community 👩‍💻👨‍💻</h1>
            <p className='signin-label'>Signin</p>
            <div>
                <form>
                    <b className='error' style={{color: 'red'}}>{err}</b><br/>
                    <label className='email'>Email</label>
                    <input ref={emailRef} type="text" />

                   
                    <label>Password</label>
                    <input ref={passwordRef} type="password" />

                    <p>Forgotten Password?</p>
                    <input id="submit" type="submit" onClick={submitHandle} value="Signin" />
                    <h2>Dont have an account ? <Link to="/signup"> <span style={{color: "white"}}> Sign up</span></Link></h2>
                </form>

            </div>
         </div>
    )
}

export default Signin