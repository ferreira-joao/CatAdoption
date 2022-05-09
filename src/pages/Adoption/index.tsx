import React, { useEffect } from "react";

import { Header, Logo } from "./styles";

import { useParams } from "react-router-dom";

import { getCat } from "../../services/apiCalls";

import logo from "../../assets/cat_cartoon.svg";

const Adoption: React.FC = () => {
  const { id } = useParams() as { id: string };

  const handleCat = async () => {
    const list = await getCat(id);

    console.log(list);
  };

  useEffect(() => {
    handleCat();
  }, []);

  return (
    <div>
      <Header>
        <div className="figure">
          <Logo src={logo} />
        </div>

        <div>
          <h1>CatAdoption</h1>

          <p>Let us help you find your new pet!</p>
        </div>
      </Header>
      <h1>ID:{id}</h1>
    </div>
  );
};

export default Adoption;
