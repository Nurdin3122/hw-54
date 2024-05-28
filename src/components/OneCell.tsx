
import React from 'react';

interface CellProps {
    hasItem: boolean;
    clicked: boolean;
    onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ hasItem, clicked, onClick }) => {

    return (
        <div
            onClick={onClick}
            style={{
                width: '50px',
                height: '50px',
                margin: '5px',
                backgroundColor: clicked ? ('gray') : 'white',
                border: '1px solid black',
                display: 'inline-block',
            }}
        >
            {clicked && hasItem ? '🎉' : ''}
        </div>
    );
};

export default Cell;