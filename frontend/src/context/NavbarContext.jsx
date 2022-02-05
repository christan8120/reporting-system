import { createContext } from "react";

const NavbarContext = createContext({
  nav: false,
  setNav: () => {},
});
export default NavbarContext;