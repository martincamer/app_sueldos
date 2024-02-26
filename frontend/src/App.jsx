//import {}
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";
import { Home } from "./routes/pages/protected/Home";
import { SideBar } from "./components/ui/SideBar";
import { Empleados } from "./routes/pages/protected/Empleados";
import { Login } from "./routes/pages/Login";
// import { Register } from "./routes/pages/Register";
//import normales
import RutaProtegida from "./layouts/RutaProtejida";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  const { isAuth } = useAuth();

  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route
            element={<RutaProtegida isAllowed={!isAuth} redirectTo={"/home"} />}
          >
            <Route index path="/" element={<Login />} />
            {/* <Route path="/register" element={<Register />} /> */}
          </Route>
          <Route
            element={<RutaProtegida isAllowed={isAuth} redirectTo={"/"} />}
          >
            <Route
              element={
                <main className="flex gap-2 h-full bg-gray-100">
                  <SideBar />
                  <Outlet />
                </main>
              }
            >
              <Route index path="/home" element={<Home />} />
              <Route index path="/empleados" element={<Empleados />} />
            </Route>
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
