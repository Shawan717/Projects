import React from 'react';

const BKMK = ({BKmark}) => {
    const{titile}=BKmark
    console.log(BKmark);
    return (
        <div>
            <h2 className="text-3xl">{titile}</h2>
        </div>
    );
};

export default BKMK;