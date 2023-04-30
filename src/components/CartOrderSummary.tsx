import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

interface CartOrderSummaryI {
  quantity: number;
  priceTotal: number;
}

export const CartOrderSummary = (props: CartOrderSummaryI) => {
  const { priceTotal, quantity } = props;

  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Order Summary</Heading>

      <Stack spacing="6">
        <Flex justify="space-between" fontSize="sm">
          <Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
            Quantity
          </Text>
          <Text fontWeight="medium">{quantity}</Text>
        </Flex>

        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total price
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {priceTotal}
          </Text>
        </Flex>
      </Stack>
      <Button
        colorScheme="blue"
        size="lg"
        fontSize="md"
        rightIcon={<FaArrowRight />}
      >
        Checkout
      </Button>
    </Stack>
  );
};
