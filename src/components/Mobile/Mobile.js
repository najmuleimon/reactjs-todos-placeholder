import React, { useState } from 'react';

const Mobile = () => {
    const [power, setPower] = useState(100)

    const batteryDown = () => {
        if(power > 0){
            const newPower = power - 10
            setPower(newPower)
        }
    }
    return (
        <div>
            <h2>{power}%</h2>
            <button onClick={batteryDown}>Battery down</button>
        </div>
    );
};

export default Mobile;