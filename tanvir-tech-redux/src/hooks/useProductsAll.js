import { useEffect, useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fake-api.up.railway.app/pcProducts")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return products;
};
