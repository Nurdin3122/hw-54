import React from 'react';

interface ResetButton {
    Reset: () => void;
}

const BtnReset: React.FC<ResetButton> = ({ Reset }) => {
    return (
        <button onClick={Reset}>Сбросить игру</button>
    );
};

export default BtnReset;