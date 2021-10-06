import React from 'react';

const Footer = () => {

    return (
        <div >
            <footer>
                <div className="footer-link">
                    <a href="/">Главная</a>
                    <a href="/gallery">Галерея</a>
                    <a href="/sound">Sound</a>
                    {/* <a href="/blog">Блог</a> */}
                    <a href="/school">Школа</a>
                    <a href="/info">Афиша</a>
                    <a href="/contacts">Контакты</a>
                </div>
                    <p>Created by TanyaAzart</p>      
            </footer>
        </div>
    );
}

export default Footer;