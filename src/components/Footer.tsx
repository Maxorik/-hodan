/**
 * Подвал
 */

import React from 'react';

export const Footer = () => {
    return(
        <div className='footer-container'>
            <div className='contacts-container'>
                <a href='https://t.me/maxorik' target='_blank'><img className='s-icon' src='../assets/telegram.png'/>maxorik</a>
            </div>
            <div>
                ©VelumWeb 2024
            </div>
        </div>
    )
}