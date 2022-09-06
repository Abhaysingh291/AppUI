import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
function BookTicket() {
  const location = useLocation();
  let navigate = useNavigate();
  function submitform() {
    alert("your Ticket is booked");
    navigate("/");
  }
  return (
    <div className='' style={{ backgroundColor: "yellow", height: "100vh", display: "flex", alignItems: "center", flexDirection: 'column', justifyContent: "center" }}>

      <h1>Book a ticket for "{location.state.name}"</h1>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control required type="tel" placeholder="Phone number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Age</Form.Label>
          <Form.Control required type="number" placeholder="Age" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={submitform} >
          Submit
        </Button>
      </Form>

    </div>
  );
}

export default BookTicket;