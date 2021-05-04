import axios from 'axios';
import { API_URL } from './api';
import { IUser } from '../models/user';

function getUsers() {
  return axios.get(API_URL)
    .then(resp => resp.data);
}

function createUser(user: IUser) {
  return axios.post(API_URL, user)
    .then(resp => resp.data);
}

function updateUser(id: string, user: IUser) {
  return axios.put(`${API_URL}/${id}`, user)
    .then(resp => resp.data);
}

function deleteUser(id: string) {
  return axios.delete(`${API_URL}/${id}`);
}

function getUser(id: string) {
  return axios.get(`${API_URL}/${id}`)
    .then(resp => resp.data);
}

export const userService = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUser
}