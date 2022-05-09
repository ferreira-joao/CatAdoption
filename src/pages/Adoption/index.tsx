import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

import { getCat } from "../../services/apiCalls";

const Adoption: React.FC = () => {
  const { id } = useParams() as { id: string };

  const handleCat = async () => {
    const list = await getCat(id);

    console.log(list);
  };

  useEffect(() => {
    handleCat();
  }, []);

  return <h1>ID:{id}</h1>;
};

export default Adoption;
