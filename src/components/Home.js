import React from 'react'
import './Home.css';
import {Link} from 'react-router-dom'
import AppsIcon from '@material-ui/icons/Apps';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Search from './Search';

const Home = () => {
    return(
        <div className='home'>
            <h1>Home Page</h1>

            <div className='home__header'>
                <div className='header__left'>
                    <Link to='/about'>about</Link>
                    <Link to='/store'>Store</Link>

                </div>
                <div className='header__right'>
                    <Link to='gmail'>Gmail</Link>
                    <Link to='about'>Images</Link>
                    <AppsIcon />
                    <AccountBoxIcon />
                </div>

            </div>

            <div className='home__body'>
                <img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
                alt=''/>

                <div className='home__inputContainer'>
                    <Search />
                </div>

            </div>
        </div>
    );

}


export default Home