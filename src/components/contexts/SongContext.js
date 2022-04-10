import { createContext, useState } from "react";

export const SongContext = createContext();

export const SongContextProvider = ({ children }) => {
  const [songs, setSong] = useState({
    song: "Afreen Afreen",
    url: "http://hck.re/Rh8KTk",
    artists: "Rahat Fateh Ali Khan, Momina Mustehsan",
    cover_image: "http://hck.re/kWWxUI",
  });

  return (
    <SongContext.Provider value={{ songs, setSong }}>
      {children}
    </SongContext.Provider>
  );
};
