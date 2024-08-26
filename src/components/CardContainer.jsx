import Container from 'react-bootstrap/Container';
import Search from './Search';
import { useState } from 'react';
import {data} from "../helper/data";
import PlayerCard from './PlayerCard';



const CardContainer = () => {

    const [search, setSearch] = useState("");

    const handleChange =(e)=>{
       setSearch(e.target.value);//artık search value yi almış oldu aramadan
    }
    
  return (
   <Container>
   {/* prop olarak fonksiyonda gönderilebilir */}
    <Search  handleChange={handleChange}/>
    <div className='d-flex flex-wrap justify-content-center gap-5 mt-5 mb-5 p-5' style={{boxShadow:"0px 0px 10px black"}}>
        {
            data.filter((item)=> item.name.toLowerCase().includes(search.toLowerCase().trim())).map((items)=>(
                <PlayerCard {...items}/>
            ))
        }
    </div>
   </Container>

  )
}

export default CardContainer;