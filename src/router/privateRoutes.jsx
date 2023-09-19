// import { Outlet } from 'react-router-dom';
// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Navigate, Outlet } from 'react-router-dom';

// const PrivateRoutes = () => {
//   const userLogged = useSelector((state) => state.userLogged);

//   if (!userLogged) {
//     return <Navigate to="/ingresar" /> ;
//   } else if (userLogged.role === "admin") {
//     return (
//       <>
//       {/* rutas para administradores */}
//        {/* <Route path="/admin/servicios" element={<AdminServices />} /> */}
//       </>
//     );
//   } else {
//     return (
//       // rutas privadas pero que no son de administrador
//       <>
//         {/* aqui se pone para ingresar a las rutas privadas */}
//         <Outlet />
//       </>
//     );
//   }
// };

// export default PrivateRoutes;