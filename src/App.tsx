
import './App.css'
import TheNumberOfAttempts from "./components/TheNumberOfAttempts.tsx";
import BtnReset from "./components/BtnReset.tsx";
import ThePlayingField from "./components/ThePlayingField.tsx";
import {useState} from "react";

const createItems = () => {
    const items = Array(36).fill(null).map(() => ({
        hasItem: false,
        clicked: false,
    }));

    const ringPosition = Math.floor(Math.random() * 36);
    items[ringPosition].hasItem = true;

    return items;
};

const App = () => {
    const [items, setItems] = useState(createItems());
    const [attempts, setAttempts] = useState(0);

    const handleCellClick = (index: number) => {
        const newItems = items.map((item, i) => {
            if (i === index) {
                return { ...item, clicked: true };
            }
            return item;
        });
        setItems(newItems);

        if (items[index].hasItem) {
            alert('Вы нашли кольцо!');
        } else {
            setAttempts(attempts + 1);
        }
    };

    const clickReset = () => {
        setItems(createItems());
        setAttempts(0);
    };

    return (
        <div>
            <TheNumberOfAttempts attempts={attempts} />
            <BtnReset Reset={clickReset} />
            <ThePlayingField items={items} onCellClick={handleCellClick} />

        </div>
    );
};

export default App;