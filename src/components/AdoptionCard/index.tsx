import React, { useEffect } from "react";

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
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div>
      <p>z</p>
    </div>
  );
};

export default AdoptionCard;
