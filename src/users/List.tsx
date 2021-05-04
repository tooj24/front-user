import React from 'react';
import { Link } from 'react-router-dom';

const List = () => {
  return (
    <div>
      <h1>Utilisateurs</h1>
      <Link to="/users/add" className="btn btn-sm btn-success mb-2">Ajouter</Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Noms</th>
            <th>Prénoms</th>
            <th>Email</th>
            <th>Crée le</th>
            <th>Modifié le</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default List;