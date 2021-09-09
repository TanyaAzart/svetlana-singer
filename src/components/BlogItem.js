import React from 'react';
import blogs from './blogs';
import Sveta from '../images/1.jpg';
import Item1 from './blogs/Item1';
import Item2 from './blogs/Item2';
import Item3 from './blogs/Item3';

const components = [Item1, Item2, Item3];


const BlogItem = ({currentItem}) => {

    const items = blogs;
    
    const item = items.find(item => item.id===currentItem);
    
    const Component = components[currentItem-1];

    return (  
            <div className='post'>            
                <div className="post-header">
                    <h2>{item.title}</h2>
                        <div>
                            <img src={Sveta} alt={"Author"}/>        
                            by: Svetlana Kharlamova,
                            <span>  {item.date}</span>
                        </div>
                </div>                       
                    <div className="post-content">
                        <Component />
                    </div>           
            </div>
            )
}
    
export default BlogItem;
