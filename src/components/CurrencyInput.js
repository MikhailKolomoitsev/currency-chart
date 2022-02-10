import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';
import './styles.module.css';

function CurrencyInput(props) {
    return (
        <div className="group" >
            <input type="text"  value={props.amount} onChange={e => props.onValueChange(e.target.value)} />
            <select value={props.currency} onChange={e => props.onTypeChange(e.target.value)}>
                {props.currencies.map((currency => (
                    <option value={currency} key={uuidv4()}>{currency}</option>
                )))}
            </select>
        </div>
    );
}

CurrencyInput.propTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies: PropTypes.array,
    onValueChange: PropTypes.func,
    onTypeChange: PropTypes.func,
};

export default CurrencyInput;