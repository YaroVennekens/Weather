import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";


import Mainpage from '@/pages/Mainpage.tsx'

const Routing: FunctionComponent = () => {

  return (
    <Routes>
      <Route path={"/"} element={<Mainpage />} />
    </Routes>
  );
};

export default Routing;
