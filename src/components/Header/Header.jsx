import React from "react";
import { styled, alpha } from "@mui/material/styles";
import { Menu } from "@mui/icons-material";
import {
  MenuItem,
  Select,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";

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

const Header = ({ selectData, setSelectData, floor, setFloor, onMove }) => {
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
            <Menu />
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
              onChange={(e) => {
                if (e.target.value === "Dataset 1") {
                  onMove({
                    longitude: -87.61694,
                    latitude: 41.86625,
                    zoom: 17,
                    pitch: 40,
                    bearing: 20,
                    antialias: true,
                  });
                } else if (e.target.value === "Dataset 2") {
                  onMove({
                    longitude: 77.336293,
                    latitude: 28.6115171,
                    zoom: 17,
                    pitch: 40,
                    bearing: 20,
                    antialias: true,
                  });
                }
                setSelectData(e.target.value);
              }}
            >
              <MenuItem value="Dataset 1">Dataset 1</MenuItem>
              <MenuItem value="Dataset 2">Dataset 2</MenuItem>
            </Select>
            <Select
              style={{ width: 300 }}
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
            >
              <MenuItem value="Heat Map">Heat Map</MenuItem>
              <MenuItem value="3D Indoor">3D Indoor</MenuItem>
            </Select>
          </RightContainer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
