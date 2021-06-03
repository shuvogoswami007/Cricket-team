import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';
import './Team.css';
import playerData from '../../fakeData/fakedata.json';
const Team = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        setPlayers(playerData);
        console.log('playerData');
    }, [])
    const [cart, setCart] = useState([]);

    const handleAddPlayer = (player) => {
        const newCart = [...cart, player];
        setCart(newCart);
    }

return (
    <div className="team-container">
        <div className="player-container">
            {
                players.map(cricketer => <Player handleAddPlayer={handleAddPlayer} player={cricketer} ></Player>)
            }
        </div>
        <div className="cart-container">
            <Cart cart={cart}></Cart>
        </div>
    </div>
);
};

export default Team;