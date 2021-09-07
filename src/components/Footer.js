import React from 'react';

const Footer = ({changePage}) => {

    return (
        <div >
            <footer>
                <div className="footer-link">
                    <a href="/">Главная</a>
                    <a href="/gallery">Галерея</a>
                    <a href="/blog">Блог</a>
                    <a href="/school">Школа</a>
                    <a href="/contacts">Контакты</a>
                </div>
                <p>Created by Tanya Azart</p>      
            </footer>
        </div>
    )
}

export default Footer;