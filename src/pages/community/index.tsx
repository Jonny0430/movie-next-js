import withLayoutBasic from "@/src/libs/layout/LayoutBesic";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const Rankings: NextPage = () => {
    return (
        <div style={{ margin: "20px 0" }}>
         <Stack className="container">Rankings</Stack>
        </div>
)
};

export default withLayoutBasic(Rankings);