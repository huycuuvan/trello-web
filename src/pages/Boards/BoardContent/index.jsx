import { Box } from "@mui/material";
import React from "react";

const BoardContent = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        with: "100%",
        height: (theme) =>
          `calc(100vh - ${theme.trelloCustom.appBarHeight} - ${theme.trelloCustom.boardBarHeight})`,
        display: "flex",
        alignItems: "center",
      }}
    >
      Board Content
    </Box>
  );
};

export default BoardContent;
