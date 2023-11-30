import { Col, Row } from "react-bootstrap";
import "./navbar.css"
import { useNavigate } from "react-router";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function Navbar() {
    const nav = useNavigate();


return (
 <nav className="containerFooter"> 
    
        <Row>
            <Col onClick={() => nav("/")}>
                Home
            </Col>
            <Col onClick={() => nav("/sobremi")}>
                Sobre mi
            </Col>
            <Col onClick={() => nav("/miscreaciones")}>
                Mis creaciones
            </Col>
            <Col onClick={() => nav("/favoritos")}>
                Favoritos
            </Col>
        </Row>

        
</nav>
)
}   

export default Navbar;