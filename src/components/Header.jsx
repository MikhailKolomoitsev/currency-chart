import React, { useEffect } from 'react'
import { useState } from 'react'
import { Card } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner'
import Container from "react-bootstrap/Container";
import { fetchData } from '../http/currencyAPI';
import CurrencyCard from './CurrencyCard';

const Header = () => {
    const [usd, setusd] = useState(null)
    const [eur, seteur] = useState(null)
    const [visible, setvisible] = useState(true)
    let usdValue
    let eurValue
    useEffect(() => {
            fetchData().then(data => setusd(data.USD))
            fetchData().then(data => seteur(data.EUR))
            setvisible(false)

    }, [])
    usdValue = (''+(1 / usd)).slice(0,5)
    eurValue = (''+(1 / eur)).slice(0,5)

    return (

        <div style={{
            height: 230,
            padding:20,
            backgroundColor: 'tomato'
        }}>
            <h1 style={{ color: "white", marginBottom: 20}}>Welcome to currency converter!</h1>
            {visible ?
                <div>
                    <span style={{ color: 'white' }}>Loading...</span>
                    <Spinner animation="grow" role="status" variant='light' size='sm'>
                    </Spinner>
                </div>
                :
                <div style={{ display: 'flex', justifyContent: 'center',  }}>
                    <CurrencyCard value={usdValue} currency={'USD'} />
                    <CurrencyCard value={eurValue} currency={'EUR'} />
                </div>
            }

        </div>

    )
}

export default Header