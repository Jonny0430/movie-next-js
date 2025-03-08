import { Stack } from "@mui/material";
import { NextPage } from "next";
import withLayoutMain from "../libs/layout/LayoutHome";
import PopularProperties from "../libs/components/homepage/PopularProperties";
import TrendingCollections from "../libs/components/homepage/TrendingCollaction";

const Home: NextPage = () => {
  return (
        <Stack className={"home-page"}>
            <Stack>
              <PopularProperties />
              <TrendingCollections />
            </Stack>
        </Stack>
  );
};
export default withLayoutMain(Home);
