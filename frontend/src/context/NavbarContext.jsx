import { createContext } from "react";

const NavbarContext = createContext({
  nav: false,
  setNav: () => {},
  setLocalNav: () => {}
});
export default NavbarContext;