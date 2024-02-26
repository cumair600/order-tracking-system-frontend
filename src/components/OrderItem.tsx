import { LinearProgress, Typography, Card, CardContent } from "@mui/material";

const OrderItem = ({ order }: { order: any }) => {
  const getStatusColor = () => {
    switch (order.orderStatus) {
        case "COMPLETED":
            return "green";
        case "CANCELED":
            return "red";
        case "NEW":
            return "blue";
        case "IN_PROGRESS":
            return "orange";
        default:
            return "black";
    }
};

  return (
    <Card style={{ marginBottom: "20px" }}>
      <CardContent style={{ textAlign: "center" }}>
        <Typography variant="h6">Order ID: {order.orderId}</Typography>
        <Typography>Order Type: {order.orderType}</Typography>
        <Typography>Order Content: {order.orderContent}</Typography>
        <Typography>Customer: {order.customerName}</Typography>
        <Typography>Driver: {order.driverName ? order.driverName : "N/A"}</Typography>
        <div
          style={{ display: "inline-flex", alignItems: "center", marginBottom: "5px" }}
        >
          <Typography style={{ width: "120px" }}>
            Order Status:
          </Typography>
          <div
            style={{
              display: "inline-flex",
              padding: "5px",
              borderRadius: "20px",
              backgroundColor: getStatusColor(),
              color: "white",
              fontWeight: "bold",
              marginRight: "10px",
            }}
          >
            {order.orderStatus}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "5px" }}>
          <Typography style={{ marginRight: "10px" }}>Order Progress:</Typography>
          <LinearProgress
            variant="determinate"
            value={order.orderProgress}
            style={{ width: "20%", marginRight: "10px" }}
          />
          <Typography>{order.orderProgress}%</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderItem;
