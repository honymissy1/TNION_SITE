import { Link } from 'react-router-dom'
import AdminPost from './admin-post'
const Blog = ({link, header, file, like, date, filetype}) => {
    return (
        <div>  
         <div className="blog-card">
          <div>
            <Link to={"/blog/"+link}>
              {
                filetype === 'image' ? 
                (
                  <div className="blog-img"> 
                   <img src={`/uploads/${file}`}  alt="Images from the server" />
                  </div>
                 ) : filetype === 'video' ?
                 (
                  <div className="blog-img"> 
                    <video src={`/uploads/${file}`} alt="Video from server"></video>
                  </div>
                ) : (<div className="blog-img" style={{display: 'none'}}></div>)
              }

            <div style={{padding: '20px'}}>
              <h1>{header}</h1>
              <div className="tags">
                <span>Church</span>
                <span>Love</span>
                <span>Special</span>
              </div>
              </div>
            </Link>
         
          {/* Admin Photo with date posted and like */}
          <AdminPost like={like} date={date} />
         </div>
         </div>  
        </div>
    )
}

export default Blog