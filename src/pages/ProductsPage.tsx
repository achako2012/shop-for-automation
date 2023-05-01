import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "store";
import { ProductI } from "types";
import BasketIcon from "components/BasketIcon";
import { ProductCard } from "components/ProductCard";
import { ProductGrid } from "components/ProductGrid";

export const ProductPage: React.FC = () => {
  const navigate = useNavigate();
  const basket = useSelector(
    (state: RootState) => state.productReducer.products
  );

  const [productsList, setProductsList] = useState<ProductI[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/products");
      const data = await response.json();

      setProductsList([...data])
    };

    fetchData();

    const isLoaded = localStorage.getItem("isAuthentificated");

    if (!isLoaded) navigate("/");
  }, []);
  
  const renderProducts = (arr: ProductI[]) =>
    arr.map((item: ProductI) => <ProductCard key={item.id} product={item} />);

  // add spinner here
  const products = renderProducts(productsList);

  return (
    <>
      <BasketIcon count={basket.length} />
      <Box
        maxW="7xl"
        mx="auto"
        px={{ base: "4", md: "8", lg: "12" }}
        py={{ base: "6", md: "8", lg: "12" }}
      >
        <ProductGrid>{products}</ProductGrid>
      </Box>
    </>
  );
};
