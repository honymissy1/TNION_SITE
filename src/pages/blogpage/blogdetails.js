import Nav from "../../components/Nav"
import '../../asset/styles/blog-details.css';
import '../../asset/styles/home.css'
import AdminPost from '../../components/admin-post';
// import Image from '../asset/images/blog-img.jpg'
import { useNavigate, useParams, Link } from "react-router-dom";
import useContextHook from "../../Hooks/contestHook";
import { useEffect, useState, useRef } from "react";


const BlogDetails = () => {
    const {username} = useContextHook();
    const {id} = useParams();
    const [data, setData] = useState({});
    const navigate = useNavigate()

    // Ref for element
    const commentRef = useRef('');
    // ................................................................

    useEffect(() =>{
        fetch(`http://localhost:3001/blog/${id}`)
         .then(result => result.json())
         .then(response => {
            setData(response)
            console.log(response);
         })
        }, [])

        const commentFunc = async () =>{
            const sendComment = await fetch(`http://localhost:3001/blog/${id}`, {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: username.user.username ,
                    content: commentRef.current.value
                })
            })

            const response = await sendComment.json();
            navigate(0)
        }
        console.log(data);
        return (
        <div className="home">
           {/* {console.log(data)} */}
            <Nav username={username} />
            <section>
              <div style={{padding: "10px 30px"}}>
               <AdminPost like={data.like} date={data.posted}/>

              </div>
              <div className="post-body">
                
                {
                    data?.file?.filetype === 'image' ? (
                        <div className="details-img">
                            <img src={`/uploads/${data?.file?.fileName}`} alt="From server"/>
                        </div>
                    ) : data?.file?.filetype === 'video' ? (
                        <div className="details-img">
                        <video  style={{width: '100%'}} src={`/uploads/${data?.file?.fileName}`}  controls />
                        </div>
                    ) :(
                        <div className="details-img">
                           <img src={'/dummy'} alt="No Images"/>
                        </div>
                    )
                }
                <h1>{data.title}</h1>
              
                <p>{data.content}</p>
              </div>


                <div className="comment">
                    {
                        
                        username.user ?
                        (
                            <div className="post-comment">
                                <textarea placeholder="Add Comment" ref={commentRef} style={{width: "100%", height: '100px',padding: '20px', fontSize:"20px", marginTop: "40px"}}></textarea>
                                <button onClick={commentFunc}>Comment</button>
                            </div> 
                        ) : (
                            <div className="login-card" style={{width:"100%"}}> 
                            <h1>Signup / Signin to comment 👩‍💻👨‍💻 </h1>
                            
                            <Link to="/signin"><button>Sign In</button></Link>
                            <Link to="/signup"><button id="second-btn">Sign Up</button></Link>
                            </div> 
                        )
                    }


                    <div className="comment-container">
                        

                       { data.comment !== undefined && (<h1>{data?.comment?.length > 1 ? ('Comments'):('Comment')}{'('+data?.comment?.length+')'}</h1>)}
                       { data?.comment?.map(ele => (
                        <div className="comment-item">
                            <h4>{ele.name} <span>$ weeks ago</span></h4>
                            <p>- {ele.content}</p>
                        </div>
                        ))} 
                     
                    </div>

                </div>
            </section>

          
        </div>
    )
}

export default BlogDetails