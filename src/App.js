import React, { useState } from 'react';
import Route from './components/Route';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Blog from './components/Blog';
import BlogItem from './components/BlogItem';
import Gallery from './components/Gallery';
import Sound from './components/Sound';
import School from './components/School';
import Contacts from './components/Contacts';
import Info from './components/Info';
import './App.css'


const App = ()=> {

    const itemNumber = window.location.pathname.includes("/blog/") ? parseInt(window.location.pathname.slice(6)) : null
    const [currentItem, setCurrentItem] = useState(itemNumber);
      
    const onTitleClick =(id)=>{
      setCurrentItem(id);             
    };
    

    return (
      <div className='body'>
        <div className="container">
            <Header />
        {/* <div className=""> */}
          <Route path="/">
            <MainPage />
          </Route>          
          {/* <Route path="/blog">
            <Blog onTitleClick={onTitleClick}/>
          </Route> */}
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/sound">
            <Sound />
          </Route>
          <Route path="/school">
            <School />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path={`/blog/${currentItem}`}>
            <BlogItem currentItem={currentItem}/>
          </Route>
          <Route path="/info">
            <Info />
          </Route>
        </div>
      <Footer />
    </div>       
        )
};

export default App;