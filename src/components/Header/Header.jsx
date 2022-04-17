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
import {
  getFirstDataSetCordinates,
  secondDataSetCordinates,
} from "../../actions/actions";

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

const Header = ({
  selectData,
  setSelectData,
  floor,
  setFloor,
  onMove,
  setCordinates,
}) => {
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
                  setFloor("Heat Map");
                  getFirstDataSetCordinates(setCordinates);
                  onMove({
                    longitude: -87.61694,
                    latitude: 41.86625,
                    zoom: 17,
                    bearing: 20,
                    pitch: 40,
                    antialias: true,
                  });
                } else if (e.target.value === "Dataset 2") {
                  setFloor("Heat Map");
                  secondDataSetCordinates(setCordinates);
                  onMove({
                    longitude: -120,
                    latitude: 50,
                    zoom: 0,
                    pitch: 0,
                    bearing: 0,
                    antialias: true,
                  });
                }
                setSelectData(e.target.value);
              }}
            >
              <MenuItem value="Dataset 1">Dataset 1 - Building</MenuItem>
              <MenuItem value="Dataset 2">Dataset 2 - Earthquake</MenuItem>
            </Select>
            <Select
              style={{ width: 300 }}
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
            >
              <MenuItem value="Heat Map">Heat Map</MenuItem>
              {selectData === "Dataset 2" && (
                <MenuItem value="3D Indoor" disabled>
                  3D Indoor
                </MenuItem>
              )}
              {selectData === "Dataset 1" && (
                <MenuItem value="3D Indoor">3D Indoor</MenuItem>
              )}
              {selectData === "Dataset 2" && (
                <MenuItem value="Both- Heat Map and 3D Indoor" disabled>
                  Both- Heat Map and 3D Indoor
                </MenuItem>
              )}
              {selectData === "Dataset 1" && (
                <MenuItem value="Both- Heat Map and 3D Indoor">
                  Both- Heat Map and 3D Indoor
                </MenuItem>
              )}
            </Select>
          </RightContainer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
