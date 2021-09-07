import React from 'react';

const Header =() => {

    return (
        <header>  
        <div className='header'>                       
                <a href="/">Главная</a>
                <a href="/gallery">Галерея</a>
                <a href="/blog">Блог</a>
                <a href="/school">Школа</a>
                <a href="/contacts">Контакты</a>
        </div>   
        </header>
    )
}

export default Header;