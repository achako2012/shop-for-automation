import { Button, Flex } from "@chakra-ui/react";
import { PriceTag } from "./PriceTag";
import { CartProductMeta } from "./CartProductMeta";
import { useDispatch } from "react-redux";
import { useCallback } from "react";

type CartItemProps = {
  name: string;
  price: string;
  imageUrl: string;
  onClickGiftWrapping?: () => void;
};

export const CartItem = (props: CartItemProps) => {
  const { name, imageUrl, price } = props;

  const dispatch = useDispatch();

  const handleProductDelete = useCallback(() => {
    dispatch({ type: "REMOVE_PRODUCT", name });
  }, [dispatch]);

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta name={name} image={imageUrl} />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{ base: "none", md: "flex" }}
      >
        <PriceTag price={price} />
        <Button
          aria-label={`Delete ${name} from cart`}
          onClick={handleProductDelete}
        >
          Delete
        </Button>
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{ base: "flex", md: "none" }}
      >
        <Button
          fontSize="sm"
          textDecor="underline"
          onClick={handleProductDelete}
        >
          Delete
        </Button>
        <PriceTag price={price} />
      </Flex>
    </Flex>
  );
};
