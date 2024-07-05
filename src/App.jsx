import { Route, Routes } from "react-router-dom";
import { routes } from "./Routes/routes";
import Layout from "./Page/Layout";
import { Fragment } from "react";

function App() {
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
