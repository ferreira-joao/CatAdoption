import React from "react";

import { MainContainer } from "./styles";

interface IAdoptionCard {
  data: {
    id: number;
    photo: string;
    name: string;
    city: string;
    street: string;
  };
}

const AdoptionCard: React.FC<IAdoptionCard> = ({ data }) => {
  return (
    <MainContainer>
      <div className="cat_data">
        <img src={`${data.photo}?random=${data.id}`} />

        <div className="cat_text">
          <h3>{data.name}</h3>

          <p>
            <span>City: </span>
            {data.city}
          </p>

          <p>
            <span>Address: </span>
            {data.street}
          </p>
        </div>
      </div>
    </MainContainer>
  );
};

export default AdoptionCard;
