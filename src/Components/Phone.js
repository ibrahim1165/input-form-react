import React, { useState,  useEffect } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import RePhon from './Hooks/RePhon';


const Phone = () => {
    const [value, setValue] = useState()
const handleSubmit=()=>{
    console.log("hello")
}

    return (
        <div>
            <div>
                <h1 className="text-4xl text-center font-bold">Welcome!</h1>
                <p className="text-center mt-2 font-bold">Let’s get you started with a free Account.</p>
            </div>
            <div class="card w-[400px] h-[150px] bg-base-200 mt-14 mx-auto">
                <div class="card-body">
                    <p className="text-sm">Lets get started by entering your <small className="text-sm font-bold">phone number</small></p>
                    <div className="mx-auto items-center justify-center">
                        <PhoneInput
                        className="w-[170px] h-[34px]"
                            international
                            defaultCountry="Ru"
                            value={value}
                            onChange={setValue} />
                    </div>

                </div>

            </div>
            <div className="text-center mt-32">
                <button onClick={handleSubmit} class="rounded-lg font-bold h-[45px] bg-accent text-black w-[441px]">Continue</button>
            </div>

        </div>
    );
};

export default Phone;