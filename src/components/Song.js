import React from "react";
import Navbar from "./Navbar";
import { useContext } from "react";
import { SongContext } from "./contexts/SongContext";
import { Navigate } from "react-router-dom";
import styled from "./Song.module.css";

const Song = () => {
  const { songs } = useContext(SongContext);
  // console.log(song, setSong);

  console.log(songs.url);

  if (Object.keys(songs).length === 0) {
    return <Navigate to="/home" />;
  }

  return (
    <>
      <Navbar />
      <div className={styled.playsongcont}>
        <div>.</div>
        <div className={styled.songcont}>
          <div className={styled.imgdiv}>
            <img src={songs.cover_image} />
          </div>
          <div className={styled.titlediv}>
            <span className={styled.titlespan}>Song : </span>
            <span className={styled.namespan}>{songs.song}</span>
          </div>
          <div>
            <span className={styled.titlespan}>Artist : </span>
            <span className={styled.namespan}>{songs.artists}</span>
          </div>
        </div>

        <audio controls>
          <source src={songs.url} type="audio/mpeg" />
        </audio>
      </div>
    </>
  );
};

export default Song;
