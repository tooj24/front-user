import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../models/user';
import { userService } from '../services/userService';

const List = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    userService.getUsers().then(data => {
      setUsers(data);
    });
  }, [])

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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u: User, i: number) => (
            <tr key={i}>
              <td>{u.lastname}</td>
              <td>{u.firstname}</td>
              <td>{u.email}</td>
              <td>{u.createdAt}</td>
              <td>{u.updatedAt}</td>
              <td>
                <Link to={`/users/edit/${u._id}`} className="btn btn-success btn-sm">Modifier</Link>
                <a href="#" className="btn btn-danger btn-sm">Supprimer</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;