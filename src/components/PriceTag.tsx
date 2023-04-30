import {
  HStack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface PriceTagPropsI {
  price: number;
}

export const PriceTag = (props: PriceTagPropsI) => {
  const { price } = props;
  return (
    <HStack spacing="1">
      <Price>{price}</Price>
    </HStack>
  );
};

interface PriceProps {
  children?: ReactNode;
}

const Price = (props: PriceProps) => {
  const { children } = props;

  const color = mode("gray.700", "gray.400");
  return (
    <Text as="span" fontWeight="medium" color={color} textDecoration={"none"}>
      {children}
    </Text>
  );
};
