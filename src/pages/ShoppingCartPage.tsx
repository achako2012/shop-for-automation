import {
  Box,
  Stack,
  Heading,
  Flex,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "store";
import { useNavigate } from "react-router-dom";
import { CartItem } from "components/CartItem";
import { CartOrderSummary } from "components/CartOrderSummary";
import { ProductI } from "types";

export const ShoppingCartPage: React.FC = () => {
  const navigate = useNavigate();

  const { products } = useSelector((state: RootState) => state.productReducer);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculatePrice = () => {
      const sumWithInitial = products.reduce(
        (accumulator, currentValue) =>
          accumulator + parseInt(currentValue.price, 10),
        0
      );

      setTotalPrice(sumWithInitial);
    };

    calculatePrice();
  }, [products]);

  const renderProductsInCart = (arr: ProductI[]) => {
    return arr.map((item) => <CartItem key={item.id} {...item} />);
  };

  const productsInCart = renderProductsInCart(products);

  return (
    <>
      <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <Button onClick={() => navigate("/products")}>Back to shoping</Button>
        </SimpleGrid>
      </Box>

      <Box
        maxW={{ base: "3xl", lg: "7xl" }}
        mx="auto"
        px={{ base: "4", md: "8", lg: "12" }}
        py={{ base: "6", md: "8", lg: "12" }}
      >
        <Stack
          direction={{ base: "column", lg: "row" }}
          align={{ lg: "flex-start" }}
          spacing={{ base: "8", md: "16" }}
        >
          <Stack spacing={{ base: "8", md: "10" }} flex="2">
            <Heading fontSize="2xl" fontWeight="extrabold">
              Shopping Cart
            </Heading>

            <Stack spacing="6">s{productsInCart}</Stack>
          </Stack>

          <Flex direction="column" align="center" flex="1">
            <CartOrderSummary
              priceTotal={totalPrice}
              quantity={products.length}
            />
          </Flex>
        </Stack>
      </Box>
    </>
  );
};
