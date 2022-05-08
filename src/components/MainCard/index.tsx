import React from "react";

interface IMainCard {
  data: {
    id: number;
    photo: string;
    name: string;
    city: string;
    street: string;
  };
}

const MainCard: React.FC<IMainCard> = ({ data }) => {
  return (
    <li key={data.id}>
      <img src={data.photo} width="100px" height="100px" />
      <p>{data.name}</p>
      <p>{data.city}</p>
      <p>{data.street}</p>
    </li>
  );
};

export default MainCard;
