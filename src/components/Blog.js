import React from 'react';
import blogs from './blogs';
import Link from './Link';
import Logo from '../images/logo.png';

const Blog = ({onTitleClick})=> {

    const myBlogs = blogs;
   
    const renderedBlogs = myBlogs.map ((blog)=>{
        
        return (
            <div className='blog' key={blog.id} onClick={()=>onTitleClick(blog.id)}>
                <Link href={`/blog/${blog.id}`}>
                <div className="blog-post">
                    <img src={Logo} alt={''}/>
                        <div className="post-title"><h3>{blog.title}</h3></div>
                            <div className="post-date"> <span>опубликовано: {blog.date}</span></div>
                </div>                
                
                <div className="post-text">
                    <p>{blog.text}</p>
                </div>
                </Link>
            </div>
        )
    })
    
    return(               
        <div>
              <h2 className='blog'>Музыкальные заметки</h2>
                {/* <h3><i>... и прочие размышления вслух</i></h3>               */}
                {renderedBlogs}                                     
        </div>  
    )   
};

export default Blog;