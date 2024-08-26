import Card from 'react-bootstrap/Card';
import {useState} from "react";

const PlayerCard = ({name, img, statistics}) => {

    const [show, setShow] = useState(true);
    const handleClick = ()=> setShow(!show)// burada false kullansam bi taha click olayıyla basa dönmez
  return (
    <Card  style={{ width: '18rem', boxShadow:"5px 5px 15px black" }} role='button' onClick={handleClick}>
    {
        show? (
            <Card.Img style={{height: "300px"}} variant="top" src={img} />
        ):(
            <ul style={{height:"300px", paddingTop:"3rem"}}>
                {
                    statistics.map((item)=> (
                        <li>🏀{item}</li>
                    ))
                }
            </ul>
        )
    }
    
    <Card.Body>
      <Card.Title>{name}</Card.Title>
     
    </Card.Body>
  </Card>
  )
}

export default PlayerCard;