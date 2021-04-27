import { Navbar, Container, Row, Col} from 'react-bootstrap'

const MyFooter = () => (
<Navbar bg="dark" variant="dark" fixed="bottom">
  <Navbar.Brand href="#footer">React Footer</Navbar.Brand>
<Container className='justify-content-center'> 
  <Row className='text-white'>
  <Col md={3}>
    Lorem ipsum
  </Col>
  <Col md={3}>
    Lorem ipsum
  </Col>
  <Col md={3}>
    Lorem ipsum
  </Col>
  <Col md={3}>
    Lorem ipsum
  </Col>
  </Row>
  </Container>
</Navbar>
)

export default MyFooter