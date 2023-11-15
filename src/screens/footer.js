import { Col, Row } from "react-bootstrap";
import "./footer.css"
import { useNavigate } from "react-router";

function Footer() {
    const nav = useNavigate();
    
    return (
        <footer>
            <div className="containerFooter">
                <Row>
                    <Col onClick={() => nav("/")}>
                        Home
                    </Col>
                    <Col onClick={() => nav("/yo")}>
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
    )
}

export default Footer;