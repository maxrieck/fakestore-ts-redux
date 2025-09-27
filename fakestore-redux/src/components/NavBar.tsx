import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/navbar.css'
import { FaShoppingCart } from 'react-icons/fa';
import { AiFillShopping } from 'react-icons/ai';
import { FaCartShopping } from 'react-icons/fa6';


const NavBar:React.FC = () => {

  return (

    <>
     <Navbar expand="lg" fixed='top' className='custom-navbar'>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Brand className='text-white px-3' href="/">FS</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link className='text-white' href="/">Home</Nav.Link> */}
            <Nav.Link className='' href="/productlist"><AiFillShopping size={24}/></Nav.Link>
            {/* <Nav.Link className='text-white' href="/addUser">Users</Nav.Link> */}
            {/* <NavDropdown className='text-white' title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
            <Nav.Link className='' href='/shoppingcart'><FaShoppingCart size={22}/></Nav.Link>
      </Container>
    </Navbar>
    
    </>
    
  )
}

export default NavBar