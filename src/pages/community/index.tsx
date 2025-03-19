import ConnectHome from "@/src/libs/components/comunitiy/ConnectHome";
import Orbitians from "@/src/libs/components/comunitiy/TheOrbitians";
import withLayoutBasic from "@/src/libs/layout/LayoutBesic";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const Rankings: NextPage = () => {
    return (
         <Stack>
            <Stack>
                <ConnectHome />
                <Orbitians />
            </Stack>
         </Stack>
)
};

export default withLayoutBasic(Rankings);