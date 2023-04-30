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
import React from "react";
import { CartOrderSummary } from "./CartOrderSummary";
import { CartItem } from "./CartItem";
import { ss } from "../product-page/_data";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "pages/product-page/ProductCard";
import { ProductI } from "pages/product-page/ProductsPage";

export const ShoppingCartPage: React.FC = () => {
  const navigate = useNavigate();
  const { products } = useSelector((state: RootState) => state.productReducer);
  console.log(products);


  const renderProductsInCart = (arr: ProductI[]) => {
    // console.log(arr)
    return arr.map((item) => <CartItem key={item.id} {...item} />);
  };

  // add spinner here
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
            <CartOrderSummary />
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
