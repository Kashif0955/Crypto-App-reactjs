import { Avatar, Box, Stack, VStack,Text } from '@chakra-ui/react'
import React from 'react'
import pic from '../assets/Photoroom-20240521_201121 (1).png'

const Footer = () => {
  return (
    <Box minH={'48'} w={'full'} bgColor={'blackAlpha.900'} color={'whiteAlpha.700'} px={'16'} py={['16','8']}>
        <Stack direction={['column','row']} alignItems={'center'} h={'full'}>

<VStack w={'full'} alignItems={['center','flex-start']}>
<Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in Pakistan, we provide our guidance
            at a very cheap price.
          </Text>
</VStack>

<VStack>
    <Avatar   boxSize={"28"} mt={["4", "0"]}  src={pic}/>
    <Text>Malik Kashif</Text>
</VStack>


        </Stack>

    </Box>
  )
}

export default Footer