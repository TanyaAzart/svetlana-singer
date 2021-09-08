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
                            <div className="post-date"> <p>опубликовано: {blog.date}</p></div>
                </div>                
                
                <div className="post-text">
                    <p>{blog.text}</p>
                </div>
                </Link>
            </div>
        )
    })
    
    return(               
        <div >
              <h1>Музыкальные заметки</h1>
                <h2>... и прочие размышления вслух</h2>              
                {renderedBlogs}                                     
        </div>  
    )   
};

export default Blog;