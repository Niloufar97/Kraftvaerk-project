import React from "react";
import "./App.css";

import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";
import SST from "./Pages/SST/SST";
import ExecuteSst from "./Components/ExecuteSST/ExecuteSst";
import UploadSST from "./Pages/UploadSST/UploadSST";
import LoginPage from "./Components/Login/LoginPage";
import ResultsSST from "./Components/ResultsSST/ResultsSST";
import PrivateRoutes from "./auth/PrivateRoutes";
import MainPage from "./Pages/MainPage";
import ResultsDetailsSST from "./Components/ResultsDetailsSST/ResultsDetailsSST";
import SITPage from "./Pages/SITPage";
import IRTPage from "./Pages/IRTPage";
import CRONPage from "./Pages/CRONPage";
import ErrorTrackingPage from "./Pages/ErrorTrackingPage";
import ServerMeasurementsPage from "./Pages/ServerMeasurementsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<LoginPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<MainPage />}>
            <Route path="/" element={<Home />} />
            <Route path="/SST" element={<SST />}>
              <Route path="/SST" element={<ResultsSST />} />
              <Route path="report" element={<ResultsSST />} />
              <Route path="execute" element={<ExecuteSst />} />
              <Route path="upload" element={<UploadSST />} />
              <Route path="details" element={<ResultsDetailsSST />} />
            </Route>
            <Route path="/SIT" element={<SITPage />}/>
            <Route path="/IRT" element={<IRTPage />}/>
            <Route path="/CRON" element={<CRONPage />}/>
            <Route path="/Error-tracking" element={<ErrorTrackingPage />}/>
            <Route path="/server-measurements" element={<ServerMeasurementsPage />}/>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
