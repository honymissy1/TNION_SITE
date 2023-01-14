import useContextHook from "../../Hooks/contestHook";

const PostBlog = () =>{
    const {username, setName, setAge} = useContextHook();
    return(
            <>
                <h1>Post a blog here bro {username.user.username} </h1>
                <p>{username.user.age}</p>
                {
                    !username.user.username ? (<button style={{padding: "5px"}} onClick={() => setName()}>Set Name</button>) :
                    (<button style={{opacity: '0.5', padding: "5px"}}>Set</button>)
                }
                
                <button onClick={() => setAge()}>Set Age</button>
            </>
    )
   }
   
   export default PostBlog