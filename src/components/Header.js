import React from 'react';

const Header =() => {

    return (
        <header>  
        <div className='header-menu'>                       
                <a href="/">Главная</a>
                <a href="/gallery">Галерея</a>
                <a href="/sound">Sound</a>
                {/* <a href="/blog">Блог</a> */}
                <a href="/school">Школа</a>
                <a href="/info">Афиша</a>
                <a href="/contacts">Контакты</a>
        </div>   
        </header>
    )
}

export default Header;