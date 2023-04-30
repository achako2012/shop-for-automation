import {
  Stack,
  Box,
  AspectRatio,
  Skeleton,
  useColorModeValue,
  HStack,
  Button,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { ProductCard } from "./ProductCard";
import { ProductGrid } from "./ProductGrid";
import { ss } from "./_data";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BasicStatistics from "pages/basket";
import { RootState } from "store";

export interface ProductI {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
}

export const ProductPage: React.FC = () => {
  const navigate = useNavigate();
  const basket = useSelector(
    (state: RootState) => state.productReducer.products
  );

  console.log(basket);

  useEffect(() => {
    const isLoaded = localStorage.getItem("isAuthentificated");

    if (!isLoaded) navigate("/");
  }, []);

  const renderProducts = (arr: ProductI[]) =>
    arr.map((item: ProductI) => <ProductCard key={item.id} product={item} />);

  // add spinner here
  const products = renderProducts(ss);

  return (
    <>
      <BasicStatistics count={basket.length} />
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
