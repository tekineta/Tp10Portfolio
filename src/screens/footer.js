import { Col, Row } from "react-bootstrap";
import "./footer.css"
import { useNavigate } from "react-router";

function Footer() {
    const nav = useNavigate();
    
    return (
        <div className="containerFooter2">
            <footer>
                <div className="containerFooter">
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
                </div>
            </footer>
        </div>
    )
}

export default Footer;