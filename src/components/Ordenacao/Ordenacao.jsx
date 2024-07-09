import { useState } from 'react';
import './Ordenacao.css';

const OrdenacaoItems = [{ Texto: 'Recent' }, { Texto: 'Popular' }];

export default function Ordenacao() {
    const [selected, setSelected] = useState('Recent');

    const handleSelected = (Texto) => {
        setSelected(Texto);
    };

    return (
        <ul className="ordenacao">
            {OrdenacaoItems.map(({ Texto }) => {
                return (
                    <li key={Texto}>
                        <a
                            className={`ordenacao-item ${
                                selected === Texto ? 'ordenacao-selected' : ''
                            }`}
                            href="#"
                            onClick={() => handleSelected(Texto)}
                        >
                            {Texto}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}
