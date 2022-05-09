import api from "./api";

export const getCats = () => {
  return api
    .get("/cats")
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

export const getCat = (id: string) => {
  return api
    .get(`/cats/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};
