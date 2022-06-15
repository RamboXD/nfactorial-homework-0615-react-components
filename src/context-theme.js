import { dark } from "@mui/material/styles/createPalette";
import React from "react";
export const themes = {
  dark: {
    // backgroundImage:
    //   "url(https://abrakadabra.fun/uploads/posts/2021-12/1640384409_1-abrakadabra-fun-p-banner-profilya-anime-1.png)",
    // backgroundPosition: "center",
    // backgroundSize: "cover",
    backgroundColor: dark,
  },
  light: {
    backgroundImage:
      "url(https://img.freepik.com/free-vector/star-sky-space-stars-background-glitter-particles_160081-317.jpg?w=1380)",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
};

const ThemeContext = React.createContext(themes.dark);

export default ThemeContext;
