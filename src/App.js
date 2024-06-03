import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Index from "./pages/Index";
import "./utils/i18n";
import InnerPage from "./pages/InnerPage";
import SchemeRegister from "./pages/SchemeRegister.js"
import SchemeList from "./pages/SchemeList.js";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Test from "./components/Test";
import Institute from "./components/Institute";
import Welfareadw from "./components/Welfareadw";
import Education from "./components/Education";
import Login from './pages/Login.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard/Dashboard';
import Main from './components/Main/Main';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Admin from './components/Admin/Admin';
import InstituteDeptApproveReject from './components/InstituteDeptPages/InstituteDeptApproveReject';

import "./assets/js/main";
import Sample from "./pages/Sample.js";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Header />  */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/inner-page" element={<InnerPage />} />
          <Route path="/scheme-register" element={<SchemeRegister />} />
          <Route path="/scheme-list" element={<SchemeList />} />
          <Route path="/login" exact element={<Login />}></Route>
          <Route path="/Contact" exact element={<Contact />}></Route>
          <Route path="/Test" exact element={<Test />}></Route>
          <Route path="/institute" exact element={<InstituteDeptApproveReject />}></Route>
          <Route path="/department" exact element={<InstituteDeptApproveReject />}></Route>
          <Route path="/Welfareadw" exact element={<Welfareadw />}></Route>
          <Route path="/Education" exact element={<Education />}></Route>
          <Route path="/StudentProfile" exact element={<Home />}></Route>
          <Route path="/dashboard" exact element={<Dashboard />}></Route>
          <Route path="/admin" exact element={<Admin />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
