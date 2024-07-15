import { Route, Routes, useLocation } from "react-router-dom";
import { routes } from "./Routes/routes";
import Layout from "./Page/Layout";
import { Fragment, useLayoutEffect } from "react";
import { changeTitleHead } from "./Components/Converter/ChangeTitleHead";

function App() {
  const location = useLocation();
  useLayoutEffect(() => {
    const currentRoute = routes.find(
      (route) => route.path === location.pathname
    );
    if (currentRoute) {
      changeTitleHead(currentRoute.name);
    }
  }, [location]);

  return (
    <>
      <Routes>
        {routes.map((route, i) => {
          const Page = route.page;
          const DefaultPage = route.layout ? Layout : Fragment;
          return (
            <Route
              key={i}
              path={route.path}
              element={
                <DefaultPage>
                  <Page />
                </DefaultPage>
              }
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
