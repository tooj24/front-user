import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Gestion des utilisateurs</h1>
            <p>SPA pour gérer les utilisateurs</p>
            <p><Link to="users">&gt;&gt; Utilisateurs</Link></p>
        </div>
    );
}

export default Home;