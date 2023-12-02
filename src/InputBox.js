import React, { useId } from 'react'

const InputBox = (
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectedCurrency='usd',
    amountDisabled=false,
    currencyDisabled=false,
    className=''
) => {
    const currencyId = useId()
  return (
    <div>
      <label htmlFor={currencyId}>{label}</label>
      <input
      id={currencyId}
      type="number"
      className=''
      placeholder='Amount'
      disabled={amountDisabled}
      value={amount}
      onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))} />

      <div>
        <select className=''
        value={selectedCurrency}
        onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled={currencyDisabled}>
            {
                currencyOptions.map((item)=>{
                    <option value={item} key={item}>{item}</option>
                })
            }
        </select>
      </div>
    </div>
  )
}

export default InputBox
