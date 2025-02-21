 import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [roomID, setRoomID] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleJoin = () => {
        if (!roomID.trim()) {
            setError('Please enter a valid Room ID');
            return;
        }
        setError('');
        navigate(`/room/${roomID}`);
    }

    return (
        <div className='App'>
            <div className='home-container'>
                <h1>Join a Room</h1>
                <input 
                    placeholder='Enter Room ID' 
                    type='text' 
                    value={roomID} 
                    onChange={(e) => {
                        setRoomID(e.target.value);
                        setError('');
                    }}
                    className={error ? 'input-error' : ''}
                />
                {error && <p className='error-message'>{error}</p>}
                <button 
                    onClick={handleJoin}
                    className='join-button'
                >
                    Join Room
                </button>
            </div>
        </div>
    );
}

export default Home;
