import { Link, Outlet } from "react-router-dom";
import { HStack, Text } from "@chakra-ui/react";
import SwitchColorMode from "../../components/SwitchColorMode";
import SearchInput from "../../components/SearchInput";

const Navigation = () => {
  return (
    <div>
      <HStack
        justifyContent="space-between"
        height={20}
        spacing={4}
        paddingX="1.5em"
      >
        <Link to="/">
          <Text>LOGO</Text>
        </Link>
        <SearchInput />
        <HStack>
          <Link to="/register">
            <Text>Register</Text>
          </Link>
          <SwitchColorMode />
        </HStack>
      </HStack>
      <Outlet />
    </div>
  );
};

export default Navigation;
