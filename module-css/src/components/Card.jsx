const Card = ({language,img}) => {

    return(
        <>
            <div>
                <h2>{language}</h2>
            </div>
            <img src={img} alt="" />
        </>
    )
}

export default Card;