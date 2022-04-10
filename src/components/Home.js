import styled from "./Home.module.css";

import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { SongContext } from "./contexts/SongContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  const { setSong } = useContext(SongContext);
  const navigate = useNavigate();

  const baseUrl = async () => {
    let res = await fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/studiod9c0baf.json"
    );
    return await res.json();
  };

  const getData = async () => {
    // let res = await fetch(
    //   "https://s3-ap-southeast-1.amazonaws.com/he-public-data/studiod9c0baf.json"
    // );
    // let result = await res.json();
    // console.log(result);
    let result = await baseUrl();
    setData(result);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleValue = async (e) => {
    let result = await baseUrl();
    console.log(result);

    let ipval = e.target.value;
    if (ipval === "all") {
      setData(result);
    } else {
      // console.log(ipval);
      let res = result.filter((e) => {
        let query = e.artists.split(","); //give all artists in array format

        if (Array.isArray(query)) {
          //checking query is array or not
          if (query[0]?.trim() === ipval || query[1]?.trim() === ipval) {
            return true;
          } else {
            return false;
          }
        } else {
          if (query === e.artists) {
            return true;
          } else {
            return false;
          }
        }
      });
      // console.log(res);
      setData(res);
    }
  };

  //song play

  const gotoSong = (a) => {
    // console.log(a)
    setSong(a);
    navigate(`/song/${a.song}`);
  };

  return (
    // <div className={styled.di}>
    <>
      <Navbar />

      <div className={styled.songmaincont}>
        <div>
          <select onChange={handleValue} className={styled.slt} name="" id="">
            <option hidden>Select Artist</option>
            <option value="all">Get all</option>
            <option value="Rahat Fateh Ali Khan">Rahat Fateh Ali Khan</option>
            <option value="Momina Mustehsan">Momina Mustehsan</option>
            <option value="Saieen Zahoor">Saieen Zahoor</option>
            <option value="Noori">Noori</option>
            <option value="Atif Aslam">Atif Aslam</option>
            <option value="Amjad Sabri">Amjad Sabri</option>
            <option value="Ali Zafar">Ali Zafar</option>
            <option value="Sara Haider">Sara Haider</option>
            <option value="Gul Panrra">Gul Panrra</option>
            <option value="Nabeel Shaukat Ali">Nabeel Shaukat Ali</option>
            <option value="Harshadeep Kaur">Harshadeep Kaur</option>
            <option value="Asim Azhar">Asim Azhar</option>
            <option value="Rachel Viccaji">Rachel Viccaji</option>
            <option value="Kashif Ali">Kashif Ali</option>
          </select>
        </div>

        <div className={styled.songcont}>
          {data.map((e, i) => (
            <div key={i} onClick={() => gotoSong(e)}>
              <div className={styled.imgdiv}>
                <img src={e.cover_image} />
              </div>
              <div>
                <span className={styled.titlespan}>song : </span>
                <span className={styled.namespan}>{e.song}</span>
              </div>
              <div>
                <span className={styled.titlespan}>Artist : </span>
                <span className={styled.namespan}>{e.artists}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
