import { HStack, Text } from "@chakra-ui/react";
import { Outlet, Link } from "react-router-dom";
import Switch from "./SwitchColorMode";

function Navbar() {
  return (
    <HStack
      justifyContent="space-between"
      height={20}
      bgColor="#000"
      paddingX={10}
    >
      <Link to="/">
        <Text>LOGO</Text>
      </Link>
      <Link to="/">
        <Text>Home</Text>
      </Link>
      <Link to="/register">
        <Text>Register</Text>
      </Link>
      <Switch />
      <Outlet />
    </HStack>
  );
}

export default Navbar;
