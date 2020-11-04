import {useEffect, useState} from 'react'
import API_KEY from './key'

const CONTEX_KEY = '6993565a697cb0aa4'

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async() => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEX_KEY}&q=${term}`)
            
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
        }

        fetchData()
    },[term])

    return { data }
} 

export default useGoogleSearch