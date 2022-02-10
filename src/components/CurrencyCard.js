import React from 'react'
import PropTypes from "prop-types";
import Styles from './Styles.module.css'

const CurrencyCard = ({ value, currency}) => {
  return (
      <div className={Styles.card}>
          <div className={Styles.card__content}>
              <h3 className={Styles.card__header}>UAH/{currency}</h3>
              <p className={Styles.card__info}>{value}</p>
          </div>
      </div>
  )
}

CurrencyCard.propTypes = {
    value: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
};

export default CurrencyCard