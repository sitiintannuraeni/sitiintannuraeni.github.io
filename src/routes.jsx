import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";
import UserPage from "./pages/users/Index.jsx";
import UserCreate from "./pages/users/Create.jsx";
import LoginPage from "./pages/auth/Login.jsx";
import ErrorPage from "./error-page.jsx";
import App from "./App.jsx";
import RombelPage from "./pages/rombels/Index.jsx";
import EditUser from "./pages/users/Edit.jsx";
import HomePage from "./pages/home/Index.jsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
  <>
    {/*<Route element={<AuthOutlet fallbackPath='/login'/>} errorElement={<ErrorPage/>}>*/}
    {/*  <Route path={`/`} element={<App/>}>*/}
    {/*    <Route path={`/users`} element={<UserPage/>}></Route>*/}
    {/*    <Route path={`/users/create`} element={<UserCreate/>}></Route>*/}
    {/*    <Route path={`/users/:id`} element={<EditUser/>}></Route>*/}
    {/*    <Route path={`/rombels`} element={<RombelPage/>}></Route>*/}
    {/*  </Route>*/}
    {/*</Route>*/}
    <Route path={`/`} element={<HomePage/>}></Route>
  </>
  )
)
