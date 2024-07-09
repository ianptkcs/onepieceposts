import { useState } from 'react';
import './Filtro.css';

const FiltroItems = [
    { Texto: 'All' },
    { Texto: 'Ancient Weapons' },
    { Texto: 'Imu' },
    { Texto: 'JoyBoy' },
    { Texto: "JoyBoy's Crew" },
    { Texto: 'Laugh Tale' },
    { Texto: 'Void Century' },
];

function Filtro() {
    const [selected, setSelected] = useState('All');
    const handleSelected = (Texto) => {
        setSelected(Texto);
    };

    return (
        <div className="filtro">
            <ul className="lista">
                {FiltroItems.map(({ Texto }) => {
                    return (
                        <li
                            className={`lista-item ${
                                selected === Texto ? 'filtro-selected' : ''
                            }`}
                            key={Texto}
                            onClick={() => handleSelected(Texto)}
                        >
                            {Texto}
                        </li>
                    );
                })}
            </ul>
            <button className="lista-botao">Clear all</button>
        </div>
    );
}

export default Filtro;
