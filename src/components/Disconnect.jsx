import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Disconnect = () => {
  const user = useSelector((state) => state.user.currentUser);

  const logout = async () => {
    const res = await  axios.get('http://api.ecommerce.nonoweb17.fr/api/auth/logout');
    console.log('logout', res)
  };

  useEffect(() => {
    user(false);
    logout();
  }, []);
  return <Navigate to="/" />;
};

export default Disconnect;
