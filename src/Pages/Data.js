import React, { useState } from 'react';
import CurrencyInput from 'react-currency-input-field'
import {FormControl, NativeSelect} from '@mui/material'



export default function Data (){
  const [network,setNetwork] = useState('')
  const [phone,setPhone] = useState('')
  const [amount,setAmount] = useState('')

  const handleSelect = (e) => {
    const {
       target: { value },
    } = e;
    setNetwork(
       typeof value === "string" ? value.split(",") : value
    );
 };
  const submit = (e) =>{
    e.preventDefault()
    console.log('Network: '+network)
    console.log('Phone: '+phone)
    console.log('Amount: '+amount)
  }
  return (
    <div className='container'>
        <div className='content'>
            <form className='card' onSubmit={submit}>
                <div className='card_group'>
                    <p className='card_title'> Data Subscription</p>
                </div>
                <div className='card_group'>
                    <p className='card_label'>Select Network</p>
                    <FormControl fullWidth>
                      <NativeSelect
                        value={network}
                        onChange={handleSelect}
                        placeholder={'Select....'}
                      >
                        <option value={'MTN'}>MTN</option>
                        <option value={'GLO'}>GLO</option>
                        <option value={'Airtel'}>Airtel</option>
                        <option value={'9Mobile'}>9Mobile</option>
                      </NativeSelect>
                    </FormControl>
                </div>
                <div className='card_group'>
                    <p className='card_label'>Enter Number</p>
                    <input placeholder='Enter your number' type='tel'
                     onChange={(e)=>setPhone(e.target.value)} 
                     className='card_input' style={{padding:'1em',width:'80%'}} />
                </div>
                <div className='card_group'>
                    <p className='card_label'>Enter Amount</p>
                    <CurrencyInput
                        id="amount"
                        name="amount"
                        placeholder="Enter Amount"
                        className='card_input'
                        // prefix={ `${&#8358;}`}
                        style={{padding:'1em',width:'80%'}}
                        onValueChange={(value) => setAmount(value)}
                        intlConfig={{ locale: 'ng-NG', currency: 'NGN' }}
                    />
                </div>
                <div className='card_group'>
                    <button type='submit' className='card_btn'>Subscribe</button>
                </div>
            </form>
        </div>
    </div>
  );
};
