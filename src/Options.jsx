import React, {useContext} from 'react';
import { Context } from './Context';
import  './Options.css'



const Options = () => {
    const { selectedOpt, setSelectedOpt } = useContext(Context);
    return (
        <div style={{ marginTop: "1.5rem" }}>
            <div onClick={(e) => setSelectedOpt(e.target.innerText)}
                className={selectedOpt === 'Daily' ? 'selected' : 'simple'}>Daily</div>
             <div onClick={(e) => setSelectedOpt(e.target.innerText)}
                className={selectedOpt === 'Monthly' ? 'selected' : 'simple'}>Monthly</div>
             <div onClick={(e) => setSelectedOpt(e.target.innerText)}
                className={selectedOpt === 'Yearly' ? 'selected' : 'simple'}>Yearly</div>
        </div>
    )
}

export default Options;