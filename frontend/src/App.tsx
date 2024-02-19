import { Route, Routes } from "react-router-dom";
import { PagePath } from "./constants/paths/PagePath.ts";
import HomeView from "./views/HomeView.tsx";
import LibraryView from "./views/LibraryView.tsx";
import SandboxView from "./views/SandboxView.tsx";

export default function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path={PagePath.HOME} element={<HomeView />} />
        <Route path={PagePath.LIBRARY} element={<LibraryView />} />
        <Route path={PagePath.SANDBOX} element={<SandboxView />} >
          <Route path={PagePath.SANDBOX_ID} element={<SandboxView />} />
        </Route>
      </Routes>
    </>
  )
}
