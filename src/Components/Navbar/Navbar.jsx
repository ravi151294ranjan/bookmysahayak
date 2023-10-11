import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Link as HomeLink } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Link,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Text,
  Select,
  Input,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import TopHeading from "../TopHeading/TopHeading";
import Login from "../Login/Login";
import logo from "../Cart/logo.png";
import sahayak from  "../Cart/Sahayak.png"
// const Links = [
//   "Blog",
//   "Register As A Professional",
//   "Help Center",
//   "Login/Sign Up",
// ];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("black.200", "black.700"),
    }}
    // href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const blogClick = () => {
    console.log("sahil");
    navigate("/blog");
  };

  return (
    <>
      <Box bg={useColorModeValue("black.100", "black.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box w="120px" h="120px">
              <HomeLink to="/topheading">
                <Image w={"500%"} h={"90%"} src={sahayak} />
              </HomeLink>
            </Box>
            {/* <Box gap={5}
                fontWeight={"bold"}
                pos={"absolute"}
                right="80"
                left="200"
                top={"0.5"}
            >
            <Text className="title" style={{ color: 'black' }}>Service - Simplified!</Text>
            </Box> */}
            <Box
                bg={"whiteAlpha.900"}
                borderRadius={"8"}
                w="200px"
                padding={"220"}
                color={"blackAlpha.900"}
                textAlign="left">
                  <Input
                    textAlign={"center"}
                    cursor={"pointer"}
                    placeholder="Enter Pincode"
                    width={"15em"}>
                    </Input>
            </Box>
            <Box
                bg={"whiteAlpha.900"}
                borderRadius={"20"}
                w="200px"
                padding={"50"}
                color={"blackAlpha.900"}
                textAlign="right">
                  <Input
                    textAlign={"center"}
                    cursor={"pointer"}
                    placeholder="Search For Services"
                    width={"20em"}>
                    </Input>
            </Box>
            {/* <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack> */}
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              {/* <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton> */}
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {/* {Links.map((link) => (
                                    <NavLink key={link}>{link}</NavLink>
                                ))} */}
                {/* <NavLink>
                  <button onClick={blogClick}>Blog</button>
                </NavLink>
                <NavLink>Register As Worker</NavLink>
                <NavLink>Help Center</NavLink> */}
                <NavLink>
                  <button>
                    <Login />
                  </button>
                </NavLink>
              </HStack>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {/* <button onClick={blogClick}>Blog</button>
              <button>Register As A Professional</button>
              <button>Help Center</button> */}
              <button>
                <Login />
              </button>
            </Stack>
          </Box>
        ) : null}
      </Box>
      {/* <TopHeading /> */}
    </>
  );
}
