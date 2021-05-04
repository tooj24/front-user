import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FormUser = () => {
  const isAddMode: boolean = false;

  return (
    <form>
      <h1>{isAddMode ? 'Add User' : 'Edit User'}</h1>
      <div className="form-row">
        <div className="form-group col-5">
          <label>Nom</label>
          <input name="lastname" type="text" className="form-control" />
          <div className="invalid-feedback"></div>
        </div>
        <div className="form-group col-5">
          <label>Prénoms</label>
          <input name="firstname" type="text" className="form-control" />
          <div className="invalid-feedback"></div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-5">
          <label>Email</label>
          <input name="email" type="text" className="form-control" />
          <div className="invalid-feedback"></div>
        </div>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          {/* <span className="spinner-border spinner-border-sm mr-1"></span> */}
          Enregistrer
        </button>
        <Link to={isAddMode ? '.' : '..'} className="btn btn-danger">Annuler</Link>
      </div>
    </form>
  )
}

export default FormUser;