import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { WrapItem } from "@chakra-ui/layout";
import { Spacer } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Wrap } from "@chakra-ui/layout";
import React, { useState } from "react";
import { MdReceipt } from "react-icons/md";
import { Projects } from "../portfolio";
import { useDisclosure } from "@chakra-ui/hooks";
import ProjectModal from "./ProjectModal";
function Project({ colorMode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [id, setId] = useState();
  const handleModal = (id) => {
    onOpen();
    setId(id);
  };
  return (
    <Wrap justify="center">
    <Text fontSize="4xl" paddingTop="10px" paddingBottom="20px">Projects</Text>
    <Wrap justify="center">
      {Projects.map((project, index) => (
        <React.Fragment key={index}>
          <WrapItem>
            <Box
              w={[230, 400]}
              borderWidth={colorMode === "dark" ? "0px" : "1px"}
              borderRadius="lg"
              height={{base:"370px", md:"450px", lg:"450px"}}
              width={{base:"300px"}}
              margin="5px"
              bg={colorMode === "dark" ? "rgb(1, 22, 39)" : null}
              align="center"
            >
              <Image
                w={[280, 400]}
                maxH="200px"
                src={project.imageUrl}
                alt={project.imageAlt}
                padding="10px"
                borderRadius="10px"
                
              />
              <Box p="5" align="center">
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  <Text fontSize={{ base: "16px", md: "20px", lg: "25px" }}>
                    {project.title}
                  </Text>
                </Box>
                <Spacer />
                <Box>
                  <Text fontSize={{ base: "12px", md: "15px", lg: "large" }}>{project.shortdescription}</Text>
                </Box>
              </Box>
              <Box align="center">
                <Button
                  onClick={() => handleModal(index)}
                  colorScheme="twitter"
                  leftIcon={<MdReceipt />}
                  height={{base:"30px", md:"40px", lg:"48px"}}
                  width={{base:"120px", md:"130px", lg:"150px"}} 
                >
                  View Details
                </Button>
              </Box>
            </Box>
            <Spacer />
          </WrapItem>
        </React.Fragment>
      ))}
      {isOpen && (
        <Box>
          <ProjectModal isOpen={isOpen} onClose={onClose} index={id} />
        </Box>
      )}
    </Wrap>
    </Wrap>
  );
}

export default Project;
