import { HStack, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

interface Props {
  value: string;
}

export const Rating = (props: Props) => {
  const defaultValue = parseInt(props.value, 10);

  const color = useColorModeValue("gray.200", "gray.600");
  const activeColor = useColorModeValue("blue.500", "blue.200");
  return (
    <HStack spacing="0.5">
      {Array.from({ length: 5 })
        .map((_, index) => index + 1)
        .map((index) => (
          <Icon
            key={index}
            as={FaStar}
            fontSize={"sm"}
            color={index <= defaultValue ? activeColor : color}
          />
        ))}
    </HStack>
  );
};
