import { useRef } from 'react'
import BlogImg from '../asset/images/blog-img.jpg'

export default function AdminPost({like, date}) {
    const lke = useRef();
  
    return(
        <div className='admin'>
            <div className='poster-img'>
                <img src={BlogImg} alt="Server Data" />
            </div> 
            <div>
                <h3>Admin 123</h3>
                <p style={{fontWeight: 'bolder'}}>{date}</p>
            </div>

            <div className='like' ref={lke}>
            <span class="material-symbols-outlined">
            thumb_up
            </span>
            <p style={{width: '5px'}}>{like}</p>
            </div>
        </div>
    )
}