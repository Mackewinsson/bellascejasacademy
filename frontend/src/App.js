import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Row>
            <Col>
              <h1 className="mt-5">Bienvenido a Bellas Cejas Academy</h1>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
