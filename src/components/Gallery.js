import React, { useState } from 'react';
import Left from '../images/left.png';
import Right from '../images/right.png';
import myImages from './images';
import Liversion from '../images/liversion.jpg';


const Gallery =() =>{

    // PHOTO GALLERY

    const school = myImages.slice(0,10)
    const images = myImages.slice(10,25)
    const lotos = myImages.slice(25,49)
    const bands = myImages.slice(49,61)
    const life = myImages.slice(61,93)

    const items = [{
        title:  "Школа",
        pics:  school
    },
    
    {
        title:  "Театр",
        pics: lotos
    },
    {
        title: "Выступления",
        pics: bands
    },
    {
        title: "Образы",
        pics: images
    },
    {
        title: "Жизнь",
        pics: life
    }]  
       
    const [currentItem, setCurrentItem] = useState(items[1]);
    const [currentImage, setCurrentImage] = useState(currentItem.pics[0]);

    const [visibility, setVisibility] = useState('');

    const onItemClick = (item)=>{
        setCurrentItem (item);
        setCurrentImage(item.pics[0])
    };
   
    const onImageClick = (image)=>{  
        setCurrentImage(image);     
    };

    // const onImageHover =(string)=> {
    //     setVisibility(string);
    // }

    const onLeftClick =() => {
        const newImage = currentItem.pics.find(image=>image.id===currentImage.id - 1) || currentItem.pics[currentItem.pics.length-1];
        setCurrentImage(newImage)
    };

    const onRightClick =() => {
        const newImage = currentItem.pics.find(image=>image.id===currentImage.id + 1) || currentItem.pics[0];
        setCurrentImage(newImage)
    };

    const renderedItems = items.map(item=> {
        
        const atr = item===currentItem ? 'activeItem' : '';
              
        return(
            <React.Fragment key={item.title}>
                <li id={atr} onClick={()=>onItemClick(item)}>{item.title}</li>
            </React.Fragment>
        )
    })

    const renderedImages = (imgs) =>{
        
        return imgs.map(image=>{

            const atr = image===currentImage ? 'active' : '';
            
            return(<React.Fragment  key={image.id} >
                        <img 
                            id={atr} 
                            src={image.small} 
                            alt ='thumbnail'  
                            onClick={()=>onImageClick(image)}
                        /> 
                    </React.Fragment>            
            )
        });
    } 

    const enlarged = () => {         
        if (currentImage) {

            const atr = currentImage.style || '';            
            
            return (                             
                <div 
                    className={`enlarged ${atr}`} 
                    // onMouseEnter={()=>onImageHover('')}
                    // onMouseLeave={()=>onImageHover('none')}
                    > 
                    <div className='left-icon' onClick={()=>onLeftClick()} style={{display: `${visibility}`}}>
                        <img id='icon' src ={Left} alt=''/>
                    </div>
                    <figure>                           
                        <img  
                            src= {currentImage.large} 
                            alt={currentImage.alt} 
                            onClick={()=>onImageClick(currentImage)}
                            />
                        <br/>
                        <figcaption className='caption'>{currentImage.caption}</figcaption>
                    </figure>
                       
                        <div className='right-icon' onClick={()=>onRightClick()} style={{display: `${visibility}`}}>
                            <img id='icon' src={Right}  alt=''/>
                        </div>                                        
                </div>      
            )
        } 
    }


    return (
        <div>            
            <div>
                <img alt='Liversion Band' src={Liversion} style={{width: '100vw'}}/>
            </div>
          
            <div className='gallery'>
                <div className='pics-chain'>                   
                    {renderedImages(currentItem.pics)}               
                </div>
            <div className='under-chain'>
                <div className='items'>
                    <ul>
                        {renderedItems}
                    </ul>
                </div>
            {enlarged()} 
                </div>  
            </div>                                                         
        </div>
    )
}

export default Gallery;