import {
  Stack,
  Box,
  AspectRatio,
  Skeleton,
  useColorModeValue,
  HStack,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useCallback } from "react";
import { FavouriteButton } from "./FavoriteButton";
import { PriceTag } from "./PriceTag";
import { Rating } from "./Rating";
import { useDispatch } from "react-redux";
import { ProductI } from "types";

interface ProductCardI {
  product: ProductI;
}

export const ProductCard = ({ product }: ProductCardI) => {
  const { imageUrl, name, price, rating } = product;

  const dispatch = useDispatch();

  const handleProduct = useCallback(() => {
    dispatch({ type: "ADD_PRODUCT", product });
  }, [dispatch]);

  return (
    <Stack spacing={{ base: "4", md: "5" }}>
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={imageUrl}
            alt={name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={{ base: "md", md: "xl" }}
          />
        </AspectRatio>
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text
            fontWeight="medium"
            color={useColorModeValue("gray.700", "gray.400")}
          >
            {name}
          </Text>
          <PriceTag price={price} />
        </Stack>
        <HStack>
          <Rating defaultValue={rating} size="sm" />
          <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
            12 Reviews
          </Text>
        </HStack>
      </Stack>
      <Stack align="center">
        <Button colorScheme="blue" width="full" onClick={handleProduct}>
          Add to cart
        </Button> 
      </Stack>
    </Stack>
  );
};
