import { Stack } from "@mui/material";
import { NextPage } from "next";
import withLayoutMain from "../libs/layout/LayoutHome";
import PopularProperties from "../libs/components/homepage/PopularProperties";

const Home: NextPage = () => {
  return (
        <Stack className={"home-page"}>
            <Stack>
              <PopularProperties />
            </Stack>
        </Stack>
  );
};
export default withLayoutMain(Home);