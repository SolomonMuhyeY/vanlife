import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import "../src/styles/styles.css";
import VanDetail from "./pages/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostLayout from "./components/HostLayout";
import { HostVans } from "./pages/host/HostVans";
import HostVansDetail from "./pages/host/HostVansDetail";
import HostVanInfo from "./pages/host/HostVanInfo";
import HostVanPhotos from "./pages/host/HostVanPhotos";
import HostVanPrice from "./pages/host/HostVanPrice";
import NotFound from "./pages/404";
import Login from "./pages/Login";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='vans' element={<Vans />} />
            <Route path='login' element={<Login />} />
            <Route path='vans/:id' element={<VanDetail />} />
            <Route path='host' element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path='income' element={<Income />} />
              <Route path='reviews' element={<Reviews />} />
              <Route path='vans' element={<HostVans />} />
              <Route path='vans/:id' element={<HostVansDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path='pricing' element={<HostVanPrice />} />
                <Route path='photos' element={<HostVanPhotos />} />
              </Route>
            </Route>
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
