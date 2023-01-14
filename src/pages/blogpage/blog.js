import Nav from "../../components/Nav"
import '../../asset/styles/index.css'
import Blog from "../../components/Blog"
import { Link } from "react-router-dom";

import useContextHook from "../../Hooks/contestHook";
import { useEffect, useState } from "react";
const Blogs = () => {
    const {username} = useContextHook();

  
    const [data, setData] = useState([]);
    useEffect(() =>{
         fetch(`http://localhost:3001/blog`)
         .then(result => result.json())
         .then(response => {
            setData(response);
         })
    }, [])
    const blogPrompt = () =>{
      
    }
    
    const prompt = document.querySelector('.blog-prompt');
    const overlay = document.querySelector('.overlay')
    const cancel = () =>{
        prompt.style.display = 'none';
        overlay.style.display = 'none';
        console.log('clicked');
    }

    const show = () =>{
        prompt.style.display = 'block';
        overlay.style.display = 'block';
    }

    console.log(username.user.role);
        return (
        <div className="home">
            <Nav blogSearch={true} />

            <main >
                {
                    !username.user.username  && (
                        <div className="login-card"> 
                            <h1>TNION Blog 👩‍💻👨‍💻 </h1>
                            <p>is where you can access spiritual content and listen to uplifting messages of our man of God.</p>
                            <Link to="/signin"><button>Sign In</button></Link>
                            <Link to="/signup"><button id="second-btn">Sign Up</button></Link>
                        </div> 
                    ) 

                }

                <div className="blog-container" style={{width:'100%'}}>
                 {/* Add Post new blog logic here */}
                {/* Overlay */}
                <div className="overlay" onClick={cancel}></div>
                 <div class="blog-prompt">
                    <h2 onClick={cancel}>x</h2>
                    <h1>Post New Blog</h1>

                    <form method="post" action="http://localhost:3001/post-blog" enctype="multipart/form-data">
                        <label>Title</label>
                        <input type="text" name="header" />

                        <label>Content</label>
                        <textarea name="content" style={{border: "1.5px solid black"}}></textarea>

                        <label>Upload</label>
                        <input type="file" name="file" />

                        <input className="blog-btn" type="submit" value="Post" />
                    </form>
                 </div>
                 {
                    username.user.role === 'admin' ? (
                        <div className="admin-post" onClick={show}>
                                <p>Add a New Blog Post +</p>
                        </div>

                    ):(<div className="admin-post" onClick={blogPrompt}>
                         <p>Can't Post because you're not an admin</p>
                       </div>
                       )
                 }
                 {/* Add Post new blog logic here  */}
  
                    {
                        data.map(ele =>(
                           <Blog
                             key={ele._id}
                             header={ele.title}
                             file={ele.file.fileName}
                             like={ele.like}
                             link={ele._id}
                             date={ele.posted}
                             filetype={ele.file.filetype}
                           />  
                        ))
                    }
                   
                </div>
                
            </main>
             
        </div>
    )
}

export default Blogs