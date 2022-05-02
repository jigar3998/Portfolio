import { IconButton } from "@chakra-ui/button";
import { Box, Center, Text, VStack, Wrap, WrapItem } from "@chakra-ui/layout";
import { FaLaptopCode, FaMoon, FaSun } from "react-icons/fa";
import Lottie from "react-lottie";
import Typical from "react-typical";
import { HeaderSection } from "../portfolio";
import React from "react";
import { HStack } from "@chakra-ui/layout";
import { Spacer } from "@chakra-ui/layout";
import animationData from "../animations/man2.json";
import lightGithubData from "../animations/light-github.json";
import darkGithubData from "../animations/dark-github.json";
import linkedInData from "../animations/linkedIn.json";
import mailData from "../animations/mail.json";
import doc from "../animations/document.json";
import resumeDoc from "../asserts/resume.pdf"

function Header({ colorMode, toggleColorMode }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const linkedInOptions = {
    loop: true,
    autoplay: true,
    animationData: linkedInData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const lightGithubOptions = {
    loop: true,
    autoplay: true,
    animationData: lightGithubData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const darkGithubOptions = {
    loop: true,
    autoplay: true,
    animationData: darkGithubData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const mailOptions = {
    loop: true,
    autoplay: true,
    animationData: mailData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const docOptions = {
    loop: true,
    autoplay: true,
    animationData: doc,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Box bg={colorMode === "dark" ? "dark" : "#9DECF9"} height={{ base: "auto", md: "900px", lg: "630px" }}>
        <Box >
          <HStack marginTop="2%" justify="right" paddingRight="2%">
            {/* <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="solid"
              />
              <MenuList role="menu">
                <MenuItem role="menuitem">Skills </MenuItem>
                <MenuItem>Experience and Education</MenuItem>
                <MenuItem>Projects</MenuItem>
              </MenuList>
            </Menu> */}
            <IconButton
              icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
              isRound="true"
              size={{ base:"small", md:"lg", lg:"lg"}}
              onClick={toggleColorMode}
              
            />
          </HStack>
        </Box>

        <Wrap align="center" justify="center">
          <WrapItem>
            <Center marginTop={10}>
              <VStack spacing={8}>
                <IconButton
                  icon={<FaLaptopCode />}
                  fontSize={{ base: "30px", md: "50px", lg: "80px" }}
                  variant="unstyled"
                />
                <Text fontSize={{ base: "35px", md: "50px", lg: "70px" }}>
                  {HeaderSection.title}
                </Text>

                <Text
                  fontSize={{ base: "16px", md: "20px", lg: "25px" }}
                  p={2}
                  textAlign={["center", "center"]}
                >
                  {HeaderSection.description}
                  <Typical
                    steps={HeaderSection.skills}
                    loop={Infinity}
                    wrapper="p"
                  />
                </Text>
              </VStack>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center>
              <VStack paddingBottom="10px">
                <Lottie options={defaultOptions} width="80%" height="80%"/>
                <HStack>
                  <span
                    onClick={() => {
                      (window.location = "https://www.linkedin.com/in/jigarmehta-cse")
                    }}
                  >
                    <Lottie options={linkedInOptions} width={50} />
                  </span>
                  <Spacer />
                  <span
                    onClick={() =>
                      (window.location = "https://github.com/jigar3998")
                    }
                  >
                    <Lottie
                      options={
                        colorMode === "dark"
                          ? darkGithubOptions
                          : lightGithubOptions
                      }
                      width={50}
                    />
                  </span>
                  <span
                    onClick={() =>
                      (window.location = "mailto:jigarmehta3998@gmail.com")
                    }
                  >
                    <Lottie options={mailOptions} width={65} />
                  </span>
                  {/* <span
                    onClick={() =>
                      (window.location = "mailto:jigarmehta3998@gmail.com")
                    }
                  >
                    <Lottie options={docOptions} width={65} />
                  </span> */}
                  <a href={resumeDoc} target="_blank">
                    <Lottie options={docOptions} width={65} />
                  </a>
                </HStack>
              </VStack>
            </Center>
          </WrapItem>
        </Wrap>
      </Box>
    </>
  );
}

export default Header;
