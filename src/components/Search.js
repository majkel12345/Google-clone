import React, { useState} from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom";
import { useStateValue } from '../StateProvider';
import {actionTypes} from '../reducer'

const Search = ({hideButtons = false}) => {

    const [{}, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const history = useHistory();

    const handleOnChange = (e) => {
        setInput(e.target.value)
    }


    const search = (e) => {
        e.preventDefault();
        console.log('you hit the search button >>>', input)

        dispatch({
            type: actionTypes.SER_SEARCH_TERM,
            term: input
        })


        history.push('/search')
    }

    return(
        <form className='search'>
            <div className='search__input'>
                <SearchIcon className='search_inputIcon'/>
                <input
                value = {input} 
                onChange={handleOnChange}
                />
                <MicIcon />
            </div>

            { 
            !hideButtons
            ?
            <div className='search__buttons'>
                <Button 
                type='submit' 
                onClick={search} 
                variant='outlined'>
                Google Search
                </Button>
                <Button variant='outlined'>I'm Feeling Lucky</Button>
            </div>
            :
            <div className='search__buttons'>
                <Button
                className='button__hidden' 
                type='submit' 
                onClick={search} 
                variant='outlined'>
                Google Search
                </Button>
                <Button 
                variant='outlined'
                className='button__hidden'>I'm Feeling Lucky</Button>
            </div>
            }   
        </form>
    );  
}


export default Search