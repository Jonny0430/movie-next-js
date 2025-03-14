import { Stack } from "@mui/material";
import { NextPage } from "next";
import withLayoutMain from "../libs/layout/LayoutHome";
import PopularProperties from "../libs/components/homepage/PopularProperties";
import TrendingCollections from "../libs/components/homepage/TrendingCollaction";
import TopCreators from "../libs/components/homepage/TopCreators";
import BrowseCategories from "../libs/components/homepage/BrowseCategories";
import DiscoverNFTS from "../libs/components/homepage/Discover";
import NFTCard from "../libs/components/homepage/Magic";
import HowItWorks from "../libs/components/homepage/HowItWorks";

const Home: NextPage = () => {
  return (
        <Stack className={"home-page"}>
            <Stack>
              <PopularProperties />
              <TrendingCollections />
              <TopCreators />
              <BrowseCategories />
              < DiscoverNFTS />
              <NFTCard />
              <HowItWorks />
            </Stack>
        </Stack>
  );
};
export default withLayoutMain(Home);
