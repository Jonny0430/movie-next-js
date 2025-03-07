/* eslint-disable react/display-name */
import { Stack } from "@mui/material";
import Head from "next/head";
import Footer from "../Footer";
import Top from "../Top";
const withLayoutMain = (Component: any) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>Mohi</title>
        </Head>
        <Stack id="pc-wrap">
        <Stack id={"top"}>
                <Top />
            </Stack>
          <Stack className={"header-main"}>
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
export default withLayoutMain;