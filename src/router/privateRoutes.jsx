
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import PanelAdmi from '../components/panelAdmi/panelAdmi';

const PrivateRoutes = () => {
  const userLogged = useSelector((state) => state.userLogged);

  if (!isLogged) {
    return <Navigate to="/ingresar" /> ;
  } else if (userLogged.admi === true) {
    return (
      <>
      {/* rutas para administradores  */}
      <Route path="/administrador" element={<PanelAdmi />} />
      </>
    );
  } else {
    return (
      <>
       
        <Outlet />
      </>
    );
  }
};

export default PrivateRoutes;