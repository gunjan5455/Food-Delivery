import { useRef, createContext } from "react";

export const ScrollContext = createContext(null);

const ScrollContextProvider = ({ children }) => {
  const menuRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const topRef = useRef(null);
  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <ScrollContext.Provider
      value={{ menuRef, aboutRef, contactRef, topRef, scrollTo }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
export default ScrollContextProvider;
