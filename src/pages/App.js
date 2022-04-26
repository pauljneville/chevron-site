import React from "react";
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  useLocation,
} from 'react-router-dom';
// import Construction from "./Construction";
import StaffLogin from "./StaffLogin";
import StaffHome from "./StaffHome";
import Booking from "./Booking";
import Discovery from "./Discovery";
import PetSit from "./PetSit";
import NotFound from "./NotFound";
// import Test from "./Test";
import StaticSite from "./StaticSite";
import { siteLinks } from '../constants/url-constants';

import { useAuth, AuthProvider } from "../hooks/useAuth";
import { HelmetProvider } from "react-helmet-async";

import ScrollToTopOnLoad from "../components/ScrollToTopOnLoad";
import ScrollToTop from '../components/ScrollToTop';

function App() {
  function RequireAuth({ children }) {
    const auth = useAuth();
    const location = useLocation();

    if (!auth.user) {
      return <Navigate to={siteLinks.staffLogin.url} state={{ from: location }} />;
    }

    return children;
  }

  return (
    <BrowserRouter>
      <HelmetProvider>
        <AuthProvider>
          <ScrollToTopOnLoad>
            <Routes>
              <Route exact path='/' element={<StaticSite />} />
              <Route path={siteLinks.booking.url} element={<Booking />} />
              <Route path={siteLinks.training.url} element={<Booking />} />
              <Route path={siteLinks.walking.url} element={<Booking />} />
              <Route path={siteLinks.petsit.url} element={<PetSit />} />
              <Route path={siteLinks.discovery.url} element={<Discovery />} />
              <Route path={siteLinks.staffLogin.url} element={<StaffLogin />} />
              {/* <Route path={siteLinks.test.url} element={<Test />} /> */}
              {/* <Route path={siteLinks.staticsite.url} element={<StaticSite />} /> */}
              {/* <Route path={siteLinks.booking.staff} element={<PrivateOutlet />}> */}
              <Route path={siteLinks.staffHome.url} element={<RequireAuth><StaffHome /></RequireAuth>} />
              {/* <Route path={siteLinks.discoveryCallForm.url} element={<RequireAuth><DiscoveryCallForm /></RequireAuth>} /> */}
              {/* </Route> */}
              <Route exact path="*" status={404} element={<NotFound />} />
            </Routes>
          </ScrollToTopOnLoad>
          <ScrollToTop />
        </AuthProvider>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
