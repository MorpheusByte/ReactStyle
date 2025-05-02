import Button from "../button/Button";
// import "./Card.css";
import CardStyle from "./Card.module.css"


const Card = ({ language, img }) => {
  //   const  { language, img } = props
  return (
    <>
      <div className={CardStyle.wrapper}>
        <h2>{language} </h2>
      </div>
      <img className={CardStyle.images} src={img} alt="" />
      <Button/>
    </>
  );
};
export default Card;