/* eslint-disable react/display-name */
import Head from "next/head"
import { Stack } from "@mui/material";


const withLayoutBasic = (Component: any) => {
    return (props: any) => {
        return (<>
        <Head>
            <title>Mohi</title>
        </Head>
        <Stack id="pc-wrap">
    <Stack sx={{ background: "#81c784" }}>Header Besit</Stack>
        <Stack id={"main"}>
            <Component {...props} />
        </Stack>
    <Stack sx={{ background: "#a1887f" }}>Footer</Stack>
        </Stack>
        </>
        );
    };
};

export default withLayoutBasic;