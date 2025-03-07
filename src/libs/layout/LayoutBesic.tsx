/* eslint-disable react/display-name */
import Head from "next/head"
import { Stack } from "@mui/material";
import Footer from "../Footer";
import Top from "../Top";


const withLayoutBasic = (Component: any) => {
    return (props: any) => {
        return (<>
        <Head>
            <title>Mohi</title>
        </Head>
        <Stack id="pc-wrap">
        <Stack id={"top"}>
                <Top />
            </Stack>

            <Stack 
            className={`header-basic`}
            style={{
                backgroundImage: `url(/img/banner/properties.png)`,
                backgroundSize: "cover",
                boxShadow:"inset 10px 40px 150px 40px rgb(24 22 36)",
            }}
            >
            </Stack>

            <Stack id={"main"}>
                <Component {...props} />
            </Stack>

            <Stack id={"footer"}>
                <Footer />
            </Stack>
        </Stack>
        </>
        );
    };
};

export default withLayoutBasic;