import React from 'react';

const Watch = ({ watch }) => {
    const { brand, model, price } = watch;
    return (
        <div>
            <h3>Watch: {brand} {model}</h3>
            <p>Price: {price} $</p>
        </div>
    );
};

export default Watch;