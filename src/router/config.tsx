import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import CustomizePage from "../pages/customize/page";
import ForSheltersPage from "../pages/shelters/page";
import AccountPage from "../pages/account/page";
import ShopPage from "../pages/shop/page";
import CollaboratePage from "../pages/collaborate/page";
import EducationPage from "../pages/education/page";
import RealityPage from "../pages/reality/page";
import SharePage from "../pages/share/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },
  {
    path: "/customize",
    element: <CustomizePage />,
  },
  {
    path: "/for-shelters",
    element: <ForSheltersPage />,
  },
  {
    path: "/collaborate",
    element: <CollaboratePage />,
  },
  {
    path: "/account",
    element: <AccountPage />,
  },
  {
    path: "/education",
    element: <EducationPage />,
  },
  {
    path: "/reality",
    element: <RealityPage />,
  },
  {
    path: "/share",
    element: <SharePage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
