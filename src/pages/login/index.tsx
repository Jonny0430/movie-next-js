import LoginS from "@/src/libs/components/homepage/Login";
import withLayoutBasic from "@/src/libs/layout/LayoutBesic";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";
const Login: NextPage = () => {
  return (
    <Stack>
        <Stack>
            <LoginS />
        </Stack>
    </Stack>
  );
};


export default withLayoutBasic(Login);