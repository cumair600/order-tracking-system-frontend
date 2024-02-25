import {
  Button,
  Card,
  CardContent,
  Container,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import CONSTANTS from "../Constants/constants";

export default function CreateOrder() {
  const [customerId, setCustomerId] = useState("");
  const [orderType, setOrderType] = useState("");
  const [orderContent, setOrderContent] = useState("");

  const handleOrderTypeChange = (e: any) => {
    setOrderType(e.target.value);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const order = {customerId: parseInt(customerId), orderType, orderContent, orderStatus: "NEW", orderProgress: 0};
    fetch("http://localhost:8080/order/add", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(order)
    }).then(() => {
        console.log("New Order Created!")
    })
  }

  return (
    <Container style={{ marginTop: "20px" }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Create New Order
          </Typography>
          <form noValidate autoComplete="off">
            <div style={{ marginBottom: "20px" }}>
              <TextField
                id="outlined-basic"
                label="Customer Id"
                variant="outlined"
                fullWidth
                margin="normal"
                value={customerId}
                onChange={(e) => setCustomerId(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Select
                id="order-type-select"
                value={orderType}
                onChange={(e) => handleOrderTypeChange(e)}
                fullWidth
                variant="outlined"
                displayEmpty
              >
                <MenuItem value="" disabled>
                  Order Type
                </MenuItem>
                {CONSTANTS.orderTypes.map((type, index) => (
                  <MenuItem key={index} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <textarea
                rows={5}
                placeholder="Order Contents"
                style={{
                  width: "100%",
                  resize: "vertical",
                  padding: "10px",
                  border: "1px solid #ccc",
                }}
                value={orderContent}
                onChange={(e) => setOrderContent(e.target.value)}
              />
            </div>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}
