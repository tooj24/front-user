import React, { useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Field } from '../components';
import { User, UserError } from '../models/user';
import { userService } from '../services/userService';

interface RouteParams {
  id: string;
}

const FormUser = ({ match, history }: RouteComponentProps<RouteParams>) => {
  // constants
  const { id } = match.params;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isAddMode: boolean = !id;
  const [user, setUser] = useState<User>(new User());
  const [errors, setErrors] = useState<UserError>(new UserError());

  // submit form
  const onSubmit = async (event: any) => {
    setIsLoading(true);
    event.preventDefault();
    try {
      setErrors(new UserError());
      if (isAddMode) {
        await userService.createUser(user);
      } else {
        await userService.updateUser(id, user);
      }
      setIsLoading(false);
      history.replace('/users');
    } catch (error) {
      setIsLoading(false);
    }
  }

  // fetch user by id
  useEffect(() => {
    if (!isAddMode) {
      userService.getUser(id).then((data: User) => setUser(data))
    }
  }, [id, isAddMode]);

  // handlechane
  const handleChange = ({ currentTarget }: any) => {
    const { name, value } = currentTarget;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <h1 className="mb-4">{isAddMode ? 'Nouvel utilisateur' : 'Modification d\'un utilisateur'}</h1>
      <form onSubmit={onSubmit} className="col-md-6 m-auto">
        <Field
          type="text"
          name="lastname"
          label="Nom"
          placeholder="Nom"
          value={user.lastname}
          onChange={handleChange}
          error={errors.lastname}
        />
        <Field
          type="text"
          name="firstname"
          label="Prénoms"
          placeholder="Prénoms"
          value={user.firstname}
          onChange={handleChange}
          error={errors.firstname}
        />
        <Field
          type="text"
          name="email"
          label="Email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          error={errors.email}
        />
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary mr-2"
            disabled={isLoading}
          >
            {isLoading && <span className="spinner-border spinner-border-sm mr-1"></span>}
          Enregistrer
        </button>
          <Link to={isAddMode ? '.' : '..'} className="btn btn-danger">Annuler</Link>
        </div>
      </form>
    </>
  )
}

export default FormUser;