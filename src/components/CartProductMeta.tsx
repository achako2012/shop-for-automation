import {
    Box,
    Image,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  
  export type CartProductMetaPropsI = {
    name: string
    image: string
  }
  
  export const CartProductMeta = (props: CartProductMetaPropsI) => {
    const { image, name } = props
    return (
      <Stack direction="row" spacing="5" width="full">
        <Image
          rounded="lg"
          width="120px"
          height="120px"
          fit="cover"
          src={image}
          alt={name}
          draggable="false"
          loading="lazy"
        />
        <Box pt="4">
          <Stack spacing="0.5">
            <Text fontWeight="medium">{name}</Text>
            <Text color={mode('gray.600', 'gray.400')} fontSize="sm">
              Description here
            </Text>
          </Stack>
        </Box>
      </Stack>
    )
  }