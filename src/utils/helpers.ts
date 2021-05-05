import { IUser } from "../models/user";

// format date
export const formatDate = (value?: Date) => {
  return value && value
    .toString()
    .split(/T/)
    .join(' à ')
    .replace(/\.(\w)+/, '');
}

// verify if field is valid
export const valid = (name: string, value: string) => {
  switch (name) {
    case 'lastname':
      return { lastname: value.length > 2 ? '' : 'Le nom doit être au minimum 3 caractères' };

    case 'firstname':
      return { firstname: value.length > 2 ? '' : 'Le prénom doit être au minimum 3 caractères' };

    case 'email':
      return { email: value.match(/[a-zA-Z0-9_.]+@[a-z]+\.[a-z]{2,}/) ? '' : 'Veuillez insérer une adresse email' };
  }
}

// verify if form is valid
export const isValid = (data: IUser): boolean => {
  const { lastname, firstname, email } = data
  return lastname.length > 2 && firstname.length > 2 && email.match(/[a-zA-Z0-9_.]+@[a-z]+\.[a-z]{2,}/) !== null;
}