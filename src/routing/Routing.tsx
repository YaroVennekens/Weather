import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";


import Mainpage from '@/pages/Mainpage.tsx'
import ErrorPage from '@/pages/ErrorPage.tsx'

const Routing: FunctionComponent = () => {

  return (
    <Routes>
      <Route path={"/"} element={<Mainpage />} />
      <Route path={"*"} element={<ErrorPage />} />
    </Routes>
  );
};

export default Routing;
