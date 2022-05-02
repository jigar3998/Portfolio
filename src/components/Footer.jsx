import { Container, Text } from '@chakra-ui/react'
import { Wrap } from "@chakra-ui/layout";

import * as React from 'react'

function Footer({ colorMode }){
    return (
        <Wrap width="100%" justify="center" paddingTop="5px" height={8} bg={colorMode === "dark" ? "dark" : "#9DECF9"}>
            <Text fontSize="sm" >
                Developed By Jigar Mehta &copy; {new Date().getFullYear()}
            </Text>
        </Wrap>
    )
}

export default Footer