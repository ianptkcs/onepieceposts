import './Feed.css';
import AncientWeapons from './assets/ancientweapons.jpg';
import Imu from './assets/imu.jpg';
import JoyBoy from './assets/joyboy.jpg';
import JoyBoyCrew from './assets/joyboycrew.jpg';
import LaughTale from './assets/laughtale.jpg';
import VoidCentury from './assets/voidcentury.jpg';
import Comments from './assets/comments.svg';
import Likes from './assets/likes.svg';

class Card {
    constructor(imagem, titulo, descricao, likes, comentarios) {
        this.imagem = imagem;
        this.titulo = titulo;
        this.descricao = descricao;
        this.likes = likes;
        this.comentarios = comentarios;
    }
}

const cards = [
    new Card(
        AncientWeapons,
        'Ancient Weapons',
        "The Ancient Weapons, named Pluton, Poseidon, and Uranus, are legendary artifacts with immense power, capable of altering the world's balance.",
        100,
        10
    ),
    new Card(
        Imu,
        'Imu',
        "Imu is the enigmatic sovereign of the World Government, shrouded in secrecy, whose existence is known to only a few at the pinnacle of the world's power structure.",
        200,
        20
    ),
    new Card(
        JoyBoy,
        'JoyBoy',
        "JoyBoy is a legendary figure from the Void Century who played a significant role in the world's history.",
        250,
        30
    ),
    new Card(
        JoyBoyCrew,
        "JoyBoy's Crew",
        'The crew led by JoyBoy, known for their significant impact during the Void Century.',
        300,
        25
    ),
    new Card(
        LaughTale,
        'Laugh Tale',
        'LaughTale is the final island in the Grand Line, said to hold the treasure One Piece.',
        350,
        15
    ),
    new Card(
        VoidCentury,
        'Void Century',
        "The Void Century is a 100-year period in history that was erased from the world's memory.",
        400,
        10
    ),
];

export default function Feed() {
    return (
        <div className="feed">
            {cards.map((card, index) => {
                return (
                    <div key={index} className="card">
                        <div className="card-imagem">
                            <img src={card.imagem} alt={card.titulo} />
                        </div>

                        <div className="card-conteudo">
                            <div>
                                <h2 className="card-titulo">{card.titulo}</h2>
                                <p className="card-descricao">
                                    {card.descricao}
                                </p>
                            </div>
                            <div className="card-footer">
                                <div className="card-likes">
                                    <span
                                        className="card-likes-icone"
                                        role="img"
                                        aria-label="like"
                                    >
                                        <img src={Likes} />
                                    </span>
                                    <span className="card-likes-quantidade">
                                        {card.likes}
                                    </span>
                                </div>
                                <div className="card-comentarios">
                                    <span
                                        className="card-comentarios-icone"
                                        role="img"
                                        aria-label="comment"
                                    >
                                        <img src={Comments} />
                                    </span>
                                    <span className="card-comentarios-quantidade">
                                        {card.comentarios}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
