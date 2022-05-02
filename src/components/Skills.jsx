import { IconButton } from "@chakra-ui/button";
import { HStack } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/layout";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import React from "react";
import { skillsSection } from "../portfolio";
import { AiFillHtml5} from "react-icons/ai";
import {
  DiCss3,
  DiSass,
  DiJavascript1,
  DiNodejsSmall,
  DiNpm,
  DiBootstrap,
  DiGit,
  DiPython,
  DiPostgresql,
  DiReact,
  DiGoogleCloudPlatform,
} from "react-icons/di";
import {
  SiMysql,
  SiMongodb,
  SiJsonwebtokens,
  SiEthereum,  
  SiExpress,
} from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { Text } from "@chakra-ui/layout";
import Lottie from "react-lottie";
import animationData from "../animations/coding.json";
import { Wrap } from "@chakra-ui/layout";
import { WrapItem } from "@chakra-ui/layout";
import { Spacer } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import { Center } from "@chakra-ui/layout";
function Skills() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Wrap justify="center" height={{ base: "1100px", md: "1100px", lg: "660px" }}>
      <Text fontSize="4xl" textAlign="center" >{skillsSection?.title}</Text>
      <Wrap justify="center">
      <WrapItem w={{ base: 380, md: 450, lg: 550 }}>
        <Lottie options={defaultOptions} />
      </WrapItem>
      <WrapItem paddingTop={19}  w={{ base: 380, md: 450}} >
        <VStack spacing={5}>
          <HStack spacing={10}>
            <Tippy content="Html5">
              <IconButton icon={<AiFillHtml5 />} fontSize={60} variant="unstyled" />
            </Tippy>
            <Tippy content="css3">
              <IconButton icon={<DiCss3 />} fontSize={60} variant="unstyled" />
            </Tippy>
            <Tippy content="sass">
              <IconButton icon={<DiSass />} fontSize={60} variant="unstyled" />
            </Tippy>
          </HStack>
          <HStack spacing={10}>
            <Tippy content="JavaScript">
              <IconButton
                icon={<DiJavascript1 />}
                fontSize={60}
                variant="unstyled"
              />
            </Tippy>
            <Tippy content="Reactjs">
              <IconButton
                icon={<GrReactjs />}
                fontSize={60}
                variant="unstyled"
              />
            </Tippy>
            <Tippy content="nodejs">
              <IconButton
                icon={<DiNodejsSmall />}
                fontSize={60}
                variant="unstyled"
              />
            </Tippy>
          </HStack>
          <HStack spacing={10}>            
            <Tippy content="npm">
              <IconButton icon={<DiNpm />} fontSize={60} variant="unstyled" />
            </Tippy>
            <Tippy content="React Native">
              <IconButton
                icon={<DiReact />}
                fontSize={60}
                variant="unstyled"
              />
            </Tippy>
            <Tippy content="Bootstrap">
              <IconButton
                icon={<DiBootstrap />}
                fontSize={60}
                variant="unstyled"
              />
            </Tippy>
          </HStack>
          <HStack spacing={10}>
            <Tippy content="sql-database">
              <IconButton icon={<SiMysql />} fontSize={60} variant="unstyled" />
            </Tippy>

            <Tippy content="mongoDB">
              <IconButton
                icon={<SiMongodb />}
                fontSize={60}
                variant="unstyled"
              />
            </Tippy>
            <Tippy content="PostgreSQL">
              <IconButton
                icon={<DiPostgresql />}
                fontSize={60}
                variant="unstyled"
              />
            </Tippy>
          </HStack>
          <HStack spacing={10}>
            <Tippy content="Git">
              <IconButton
                icon={<DiGit />}
                fontSize={60}
                variant="unstyled"
              />
            </Tippy>
            <Tippy content="Python">
              <IconButton icon={<DiPython />} fontSize={60} variant="unstyled" />
            </Tippy>
            <Tippy content="JWT">
              <IconButton
                icon={<SiJsonwebtokens />}
                fontSize={60}
                variant="unstyled"
              />
            </Tippy>{" "}
          </HStack>
          <HStack spacing={10}>
            <Tippy content="Express">
              <IconButton
                icon={<SiExpress />}
                fontSize={60}
                variant="unstyled"
              />
            </Tippy>

            <Tippy content="Ethereum">
              <IconButton
                icon={<SiEthereum />}
                fontSize={60}
                variant="unstyled"
              />
            </Tippy>

            <Tippy content="Google Cloud Platform">
              <IconButton
                icon={<DiGoogleCloudPlatform />}
                fontSize={60}
                variant="unstyled"
              />
            </Tippy>
          </HStack>
          <Spacer />
          <Spacer />
          
          {skillsSection.skills.map((skill) => {
            return (
              <Text textAlign={["center", "center"]} key={skill} padding="5px">
                {skill}
              </Text>
            );
          })}
        </VStack>
      </WrapItem>
      {/* {skillsSection.softwareSkills.map((skill) => {
        return (
          <GridItem colSpan={1}>
            <Tippy placement="bottom-start" content={skill.skillName}>
              <IconButton
                className="iconify"
                data-icon={skill.fontAwesomeClassname}
                data-inline="false"
              />
            </Tippy>
          </GridItem>
        );
      })} */}
      </Wrap>
    </Wrap>
  );
}

export default Skills;
