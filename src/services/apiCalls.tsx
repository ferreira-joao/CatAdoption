import api from "./api";

export const getCats = () => {
  return api
    .get("/cats")
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};
