import {
  Box,
  Stack,
  Heading,
  Flex,
  HStack,
  Link,
  useColorModeValue as mode,
  Button,
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
        (accumulator, currentValue) => accumulator + currentValue.price,
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
      <Button onClick={() => navigate("/products")}>back</Button>
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
              Shopping Cart ({products.length})
            </Heading>

            <Stack spacing="6">s{productsInCart}</Stack>
          </Stack>

          <Flex direction="column" align="center" flex="1">
            <CartOrderSummary
              priceTotal={totalPrice}
              quantity={products.length}
            />
            <HStack mt="6" fontWeight="semibold">
              <p>or</p>
              <Link color={mode("blue.500", "blue.200")}>
                Continue shopping
              </Link>
            </HStack>
          </Flex>
        </Stack>
      </Box>
    </>
  );
};
