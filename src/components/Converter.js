import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { fetchData } from '../http/currencyAPI'
import CurrencyInput from './CurrencyInput'

const Converter = () => {

    const [amount1, setAmount1] = useState(1);
    const [amount2, setAmount2] = useState(1);
    const [currency1, setCurrency1] = useState('UAH');
    const [currency2, setCurrency2] = useState('UAH');

    const [currencyRates, setcurrencyRates] = useState({})

    useEffect(() => {
        fetchData().then(data => setcurrencyRates(data))
    }, [])

    function formatDigits(number) {
        return Number(number.toFixed(4))
    }

    function handleAmount1(amount1) {
        setAmount2(formatDigits(amount1 * currencyRates[currency2] / currencyRates[currency1]))
        setAmount1(amount1)
    }

    function hadnleType1(currency1) {
        setAmount2(formatDigits(amount1 * currencyRates[currency2] / currencyRates[currency1]))
        setCurrency1(currency1)
    }

    function handleAmount2(amount2) {
        setAmount1(formatDigits(amount2 * currencyRates[currency1] / currencyRates[currency2]))
        setAmount2(amount2)
    }

    function hadnleType2(currency2) {
        setAmount1(formatDigits(amount2 * currencyRates[currency1] / currencyRates[currency2]))
        setCurrency2(currency2)
    }

    function buttonHandler() {
        setAmount1(amount2)
        setAmount2(amount1)
        setCurrency1(currency2)
        setCurrency2(currency1)
    }

    return (
        <Container className='d-flex justify-content-center pt-3'>
            <CurrencyInput
                onValueChange={handleAmount1}
                onTypeChange={hadnleType1}
                currencies={Object.keys(currencyRates)}
                amount={amount1}
                currency={currency1}
            />
            <Button
                onClick={() => buttonHandler()}
                variant="info"
                style={{ color: 'white', margin: 10, backgroundColor:'#f85211', borderColor: 'white' }}
            >Swipe</Button>
            <CurrencyInput
                onValueChange={handleAmount2}
                onTypeChange={hadnleType2}
                currencies={Object.keys(currencyRates)}
                amount={amount2}
                currency={currency2}
            />
        </Container>
    )
}

export default Converter