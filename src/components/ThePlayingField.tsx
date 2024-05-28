import React from 'react';
import OneCell from "./OneCell.tsx";

interface GameBoardProps {
    items: { hasItem: boolean; clicked: boolean }[];
    onCellClick: (index: number) => void;
}

const ThePlayingField: React.FC<GameBoardProps> = ({ items, onCellClick }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', width: '400px' }}>
            {items.map((item, index) => (
                <OneCell
                    key={index}
                    hasItem={item.hasItem}
                    clicked={item.clicked}
                    onClick={() => onCellClick(index)}
                />
            ))}
        </div>
    );
};

export default ThePlayingField;
