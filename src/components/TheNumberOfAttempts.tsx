import React from 'react';

interface Attempts {
    attempts: number;
}

const TheNumberOfAttempts:React.FC<Attempts> = ({attempts}) => {
    return (
        <div>
            <h2>Попытки: {attempts}</h2>
            
        </div>
    );
};

export default TheNumberOfAttempts;