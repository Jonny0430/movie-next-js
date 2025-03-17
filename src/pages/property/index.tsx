import HeroSection from "@/src/libs/components/property/propertyHome";
import DataTable from "@/src/libs/components/property/Table";
import UserProfile from "@/src/libs/components/property/UserProfile";
import withLayoutBasic from "@/src/libs/layout/LayoutBesic";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";
const PropertyList: NextPage = () => {
  return (
    <Stack>
      <Stack>
        <HeroSection />
        <UserProfile />
        <DataTable />
      </Stack>
    </Stack>
  )
};


export default withLayoutBasic(PropertyList);