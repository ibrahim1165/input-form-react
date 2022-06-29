import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import "./Rephone.css"

const RePhon = () => {
    const [value, setValue] = useState()

   return (
   <div className="">
 <PhoneInput
  international
  defaultCountry="RU"
  value={value}
  onChange={setValue}/>
   </div>
   )
};

export default RePhon;