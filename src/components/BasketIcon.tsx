import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface BasketIconPropsI {
  count: number;
}

export default function BasketIcon(props: BasketIconPropsI) {
  const { count } = props;
  const navigate = useNavigate();
  
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <Stat
          px={{ base: 2, md: 4 }}
          py={"5"}
          shadow={"xl"}
          border={"1px solid"}
          borderColor={useColorModeValue("gray.800", "gray.500")}
          rounded={"lg"}
        >
          <Flex justifyContent={"space-between"}>
            <Box pl={{ base: 2, md: 4 }}>
              <StatLabel fontWeight={"medium"} isTruncated>
                In your basket:
              </StatLabel>
              <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
                {count}
              </StatNumber>
            </Box>
            <Button onClick={()=>{navigate("/cart")}}/>
          </Flex>
        </Stat>
      </SimpleGrid>
    </Box>
  );
}
