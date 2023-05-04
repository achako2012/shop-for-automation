import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  chakra,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserI } from "types";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentiasl] = useState<UserI>({
    id: 0,
    username: "",
    password: "",
  });
  const [error, setError] = useState<boolean>(false);
  const [isExtended, setExtended] = useState<boolean>(false);
  const [usersList, setUsersList] = useState<UserI[]>([
    {
      id: 1,
      username: "alex",
      password: "123",
    },
    {
      id: 2,
      username: "test_user",
      password: "456",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/users");
      const data = await response.json();

      setUsersList([...data]);
    };

    fetchData();
  }, []);

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentiasl({
      ...credentials,
      username: event.target.value,
    });
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentiasl({
      ...credentials,
      password: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formElements = event.currentTarget
      .elements as typeof event.currentTarget.elements & {
      usernameInput: HTMLInputElement;
      passwordInput: HTMLInputElement;
    };

    const isUserExist = usersList.find(
      (el) =>
        el.username === formElements.usernameInput.value &&
        el.password === formElements.passwordInput.value
    );

    if (isUserExist) {
      localStorage.setItem("isAuthentificated", "true");

      if (formElements.usernameInput.value === "alex") {
        navigate("/products");
      }else{
        setExtended(true)
      }
    } else {
      localStorage.removeItem("isAuthentificated");
      setError(true);
      setCredentiasl({
        id: 0,
        username: "",
        password: "",
      });
    }
  };

  const handleExtendedSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    localStorage.setItem("isAuthentificated", "true");
    navigate("/products");
  };

  const loginForm = () => (
    <form onSubmit={handleSubmit}>
      <Stack
        spacing={4}
        p="1rem"
        backgroundColor="whiteAlpha.900"
        boxShadow="md"
      >
        <FormControl>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<CFaUserAlt color="gray.300" />}
            />
            <Input
              isInvalid={error}
              id="usernameInput"
              value={credentials.username}
              type="text"
              placeholder="username"
              onChange={handleUsernameChange}
            />
          </InputGroup>
        </FormControl>
        <FormControl>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              children={<CFaLock color="gray.300" />}
            />
            <Input
              isInvalid={error}
              id="passwordInput"
              value={credentials.password}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={handlePasswordChange}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                {showPassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button
          borderRadius={0}
          id="confirmLogin"
          type="submit"
          variant="solid"
          colorScheme="teal"
          width="full"
        >
          Login
        </Button>
      </Stack>
    </form>
  );

  const extendedLoginForm = () => (
    <form onSubmit={handleExtendedSubmit}>
      <Stack
        spacing={4}
        p="1rem"
        backgroundColor="whiteAlpha.900"
        boxShadow="md"
      >
        <FormControl>
          <InputGroup>
            <Input
              isInvalid={error}
              id="phonenumberInput"
              type="text"
              placeholder="set your phone number"
              onChange={handleUsernameChange}
            />
          </InputGroup>
        </FormControl>
        <FormControl>
          <InputGroup>
            <Input
              isInvalid={error}
              id="emailInput"
              type="text"
              placeholder="set your email"
              onChange={handleUsernameChange}
            />
          </InputGroup>
        </FormControl>
        <FormControl>
          <InputGroup>
            <Input
              isInvalid={error}
              id="confirmEmailInput"
              type="text"
              placeholder="confirm your email"
              onChange={handleUsernameChange}
            />
          </InputGroup>
        </FormControl>
        <Button
          borderRadius={0}
          id="confirmLogin"
          type="submit"
          variant="solid"
          colorScheme="teal"
          width="full"
        >
          Next
        </Button>
      </Stack>
    </form>
  );

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          {isExtended ? extendedLoginForm() : loginForm()}
        </Box>
      </Stack>
    </Flex>
  );
};
