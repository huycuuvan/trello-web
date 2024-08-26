import React from "react";
import ModeSelect from "~/components/ModeSelect";
import { Box } from "@mui/material";

const AppBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.light",
        with: "100%",
        height: (theme) => theme.trelloCustom.appBarHeight,
        display: "flex",
        alignItems: "center",
      }}
    >
      <ModeSelect />
    </Box>
  );
};

export default AppBar;
