import React from "react";

import { useParams } from "react-router-dom";

const Adoption: React.FC = () => {
  const { id } = useParams();

  return <h1>ID:{id}</h1>;
};

export default Adoption;
