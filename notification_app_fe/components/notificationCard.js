import { Card, CardContent, Typography } from "@mui/material";

export default function NotificationCard({ n }) {
  return (
    <Card style={{ margin: "10px" }}>
      <CardContent>
        <Typography variant="h6">{n.Type}</Typography>
        <Typography>{n.Message}</Typography>
        <Typography variant="caption">{n.Timestamp}</Typography>
      </CardContent>
    </Card>
  );
}
