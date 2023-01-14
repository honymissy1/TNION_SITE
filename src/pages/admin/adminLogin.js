// import {Link} from 'react-router-dom';

const AdminLogin = () =>{
 return(
   <div className='signin'>

   <h1>-</h1>
   <p style={{fontWeight: 'bolder'}} className='signin-label'>Admin Login 👩‍💻👨‍💻</p>
   <div>
       <form>
           <label>Email</label>
           <input type="text" />

           <label>Password</label>
           <input type="password" />

           <p>Forgotten Password?</p>
           <input id="submit" type="submit" value="Signin" />
       </form>

   </div>
</div>
 )
}

export default AdminLogin