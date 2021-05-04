import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../models/user';
import { userService } from '../services/userService';
import { formatDate } from '../utils/helpers';

const List = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState<string>('');

  // fetch users
  useEffect(() => {
    userService.getUsers().then(data => {
      setUsers(data);
    });
  }, [])

  // handle search
  const handleSearch = ({ currentTarget }: any) => {
    setSearch(currentTarget.value);
  }

  // filtered users
  const filteredUsers = users.filter(u => (
    u.firstname.toLowerCase().includes(search.toLowerCase()) ||
    u.lastname.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  ))

  // handle delete
  const handleDelete = async (id: string) => {
    const data = [...users];
    setUsers(users.filter(i => i._id !== id));

    try {
      await userService.deleteUser(id);
    } catch (error) {
      console.log(error);
      setUsers(data);
    }
  }

  return (
    <div>
      <h1 className="mb-4">Liste des utilisateurs</h1>
      <div className="row">
        <div className="col-md-6">
          <Link to="/users/add" className="btn btn-sm btn-success mb-2">Ajouter</Link>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="search"
              onChange={handleSearch}
              value={search}
              className="form-control form-control-sm"
              placeholder="Rechercher ..."
            />
          </div>
        </div>
      </div>
      
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Noms</th>
            <th>Prénoms</th>
            <th>Email</th>
            <th>Crée le</th>
            <th>Modifié le</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((u: User, i: number) => (
            <tr key={i}>
              <td>{u.lastname}</td>
              <td>{u.firstname}</td>
              <td>{u.email}</td>
              <td>{formatDate(u.createdAt)}</td>
              <td>{formatDate(u.updatedAt)}</td>
              <td>
                <Link to={`/users/edit/${u._id}`} className="btn btn-success btn-sm mr-2">Modifier</Link>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(u._id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;