import { useState } from 'react';
import PropTypes from 'prop-types';
import Logo from '../../assets/logo.svg';
import Feed from './assets/feed.svg';
import Chat from './assets/chat.svg';
import Discover from './assets/discover.svg';
import User from './assets/user.svg';
import Info from './assets/info.svg';
import Settings from './assets/settings.svg';
import './Sidebar.css';

console.log(Feed);

export default function Sidebar() {
    const [selected, setSelected] = useState('Feed');

    const handleSelected = (item) => {
        setSelected(item);
    };

    const items = [
        { item: Feed },
        { item: Chat },
        { item: Discover },
        { item: User },
        { item: Info },
        { item: Settings },
    ];

    return (
        <aside>
            <a className="logo-link" href="#">
                <img className="logo-img" src={Logo} alt="Logo" />
            </a>
            <nav>
                <ul className="lista-sidebar">
                    <li>
                        <a className="item__post" href="#">
                            Post
                        </a>
                    </li>
                    <div>
                        {items.map(({ item }) => (
                            <SidebarItem
                                key={capitalize(
                                    String(item).split('/')[5].split('.')[0]
                                )} // Adicionando uma chave única para cada filho
                                item={item}
                                nome={capitalize(
                                    String(item).split('/')[5].split('.')[0]
                                )}
                                onSelect={handleSelected}
                                isSelected={
                                    selected ===
                                    capitalize(
                                        String(item).split('/')[5].split('.')[0]
                                    )
                                }
                            />
                        ))}
                    </div>
                </ul>
            </nav>
        </aside>
    );
}

function SidebarItem({ item, nome, onSelect, isSelected }) {
    const [hover, setHover] = useState(false);

    return (
        <li>
            <div
                className={`item ${isSelected ? 'item__selected' : ''} ${
                    isSelected
                        ? ''
                        : hover
                        ? 'item__hovered'
                        : 'item__unhovered'
                }`}
            >
                <a
                    className={`item__link ${
                        hover ? 'item__link__hovered' : 'item__link__unhovered'
                    } ${isSelected ? 'item__link__selected' : ''}`}
                    href="#"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    onClick={() => onSelect(nome)}
                >
                    <img src={item} alt={nome} />
                    <span>{nome}</span>
                </a>
            </div>
        </li>
    );
}

SidebarItem.propTypes = {
    item: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    onSelect: PropTypes.func,
    isSelected: PropTypes.bool,
};

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
