import React, { useEffect, useState } from "react";

import { Header, Logo } from "./styles";

import AdoptionCard from "../../components/AdoptionCard";

import { useParams } from "react-router-dom";

import { getCat } from "../../services/apiCalls";

import logo from "../../assets/cat_cartoon.svg";

const Adoption: React.FC = () => {
  const { id } = useParams() as { id: string };

  const [cat, setCat] = useState() as any;

  const handleCat = async () => {
    const item = await getCat(id);

    setCat(item);
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

      <AdoptionCard data={cat} />
      <p>{cat.name}</p>
    </div>
  );
};

export default Adoption;
