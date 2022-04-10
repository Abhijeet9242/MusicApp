import styled from "./HomeDisplay.module.css";
import { useNavigate } from "react-router-dom";

const HomeDisplay = () => {
  const navigate = useNavigate();
  const goTo = () => {
    navigate("/home");
  };

  return (
    <div className={styled.display}>
      <div className={styled.displaybtn} onClick={goTo}>
        <b>Play the music</b>
        <b>♪♩♫♬</b>
      </div>
    </div>
  );
};
export default HomeDisplay;
