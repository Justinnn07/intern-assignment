import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuItem, Select } from "@mui/material";

const RightContainer = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  "& > *": {
    margin: 10,
  },
}));

const Header = ({ selectData, setSelectData, floor, setFloor }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" elevation={1} color="transparent">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Assignment
          </Typography>
          <RightContainer>
            <Select
              style={{ width: 300 }}
              value={selectData}
              onChange={(e) => setSelectData(e.target.value)}
            >
              <MenuItem value="Select Data" disabled>
                Select Data
              </MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <Select
              style={{ width: 300 }}
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
            >
              <MenuItem value="Select Floor" disabled>
                Select Floor
              </MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </RightContainer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
