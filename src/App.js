import React, { useState } from 'react';
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Route from './components/Route';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Blog from './components/Blog';
import BlogItem from './components/BlogItem';
import Gallery from './components/Gallery';
import School from './components/School';
import Contacts from './components/Contacts';
import './App.css'


const App = ()=> {

    const itemNumber = window.location.pathname.includes("/blog/") ? parseInt(window.location.pathname.slice(6)) : 1
    const [currentItem, setCurrentItem] = useState(itemNumber);
      
    const onTitleClick =(id)=>{
      setCurrentItem(id) 
      console.log(currentItem)       
    };
    

    return (
      <div className='body'>
        <div className="container">
            <Header />
        {/* <div className=""> */}
          <Route path="/">
            <MainPage />
          </Route>          
          <Route path="/blog">
            <Blog onTitleClick={onTitleClick}/>
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/school">
            <School />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path={`/blog/${currentItem}`}>
            <BlogItem onTitleClick={onTitleClick} currentItem={currentItem}/>
          </Route>
        </div>
      <Footer />
    </div>       
        )
};

export default App;