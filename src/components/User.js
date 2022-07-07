import React from 'react';
import Avatar from '../assets/img/Avatar.svg';
import AvatarBlanc from '../assets/img/AvatarCropped.png';
import Address from '../assets/fonts/fontawesome/house-solid.svg';
import AddressBlanc from '../assets/fonts/fontawesome/house-solid-blanc.svg';
import Phone from '../assets/fonts/fontawesome/phone-solid.svg';
import PhoneBlanc from '../assets/fonts/fontawesome/phone-solid-blanc.svg';
import Mail from '../assets/fonts/fontawesome/envelope-solid.svg';
import MailBlanc from '../assets/fonts/fontawesome/envelope-solid-blanc.svg';

const User = () => {
    return (
        <div className='user'>
            <img src={Avatar} alt='Avatar de Miguel' className='Avatar' />
            <img src={AvatarBlanc} alt='Avatar de Miguel' className='AvatarBlanc' />
            <div className="identity">
                <h1 className="user-name">Clairy Miguel</h1>
                <h2 className="user-profession">Développeur Front-End</h2>
            </div>
            
            <div className="user-infos">
                <address className="user-info"><div className="imgUser"><img src={Address} alt='Adresse de Miguel' className='Adresse' /><img src={AddressBlanc} alt='Adresse de Miguel' className='AdresseBlanc' /></div><div className='dotDot'>∶</div>14, rue du Try 95160 Montmorency</address>
                <p className="user-info"><a href="tel:+33768437621"><div className="imgUser"><img src={Phone} alt='Numéro téléphone de Miguel' className='Telephone' /><img src={PhoneBlanc} alt='Numéro téléphone de Miguel' className='TelephoneBlanc' /></div><div className='dotDot1'>∶</div>07.68.43.76.21</a></p>
                <p className="user-info"><a href="mailto:miguel.clairy@gmail.com"><div className="imgUser"><img src={Mail} alt='Adresse emeil de Miguel' className='AdresseMail' /><img src={MailBlanc} alt='Adresse emeil de Miguel' className='AdresseMailBlanc' /></div><div className='dotDot2'>∶</div>miguel.clairy@gmail.com</a></p>
            </div>
        </div>
    );
};

export default User;