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
import { useEffect, useState } from "react";
import CONSTANTS from "../Constants/constants";
import OrderItem from "./OrderItem";

export default function OrdersList() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchOrders();

    const intervalId = setInterval(fetchOrders, 65000);

    return () => clearInterval(intervalId);
  }, []);

  const fetchOrders = () => {
    setLoading(true);
    fetch("http://localhost:8080/order/get-all", {
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setOrders(data);
        setLoading(false);
        console.log("Fetched orders:", data);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching orders:", error);
      });
  };

  return (
    <Container style={{ marginTop: "20px" }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Orders List
          </Typography>
          {!loading &&
            orders
              .sort((a: any, b: any) => b.orderId - a.orderId)
              .map((order, index) => <OrderItem key={index} order={order} />)}
        </CardContent>
      </Card>
    </Container>
  );
}
