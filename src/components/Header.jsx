import Container from 'react-bootstrap/Container';
import logo from "../assets/nba-logo.png"


const Header = () => {
  return (
    <Container className='d-flex flex-column align-items-center' style={{backgroundColor:"red"}} >
        <img src={logo} alt="" />
        <h1 style={{fontSize:"4rem"}}>NBA Legends</h1>
    </Container>
  )
}

export default Header;