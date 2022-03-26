import { Box } from "@mui/system";

export default function Layout({ children }) {
  return (
    <Box>
      <div>{children}</div>
    </Box>
  );
}
