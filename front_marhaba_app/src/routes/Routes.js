import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "../components/Authentication/login/Login";
import Register from "../components/Authentication/register/Register";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import AdminDashboard from "../pages/admin/AdminDashboard";
import ClientsList from "../components/admin/panels/client/client-list/ClientsList";
import MealList from "../components/admin/panels/meal/meal-list/MealList";
import OrdersList from "../components/admin/panels/order-panel/order-list/OrdersList";
import DgList from "../components/admin/panels/deliveryguy/dg-list/DgList";
import CategoryList from "../components/admin/panels/category/category-list/CategoryList";
import AddCategory from "../components/admin/crud/category-crud/AddCategory";
import AddMeal from "../components/admin/crud/meal-crud/AddMeal";
import EditMeal from "../components/admin/crud/meal-crud/EditMeal";
import DgDashboard from "../pages/deliveryGuy/DgDashboard";
import NewOrers from "../components/deliveryguy/order/NewOrers";
import MyOrders from "../components/deliveryguy/order/MyOrders";
import WorkingOn from "../components/deliveryguy/order/WorkingOn";
import ClientHome from "../pages/client/ClientHome";
import Order from "../components/shared-elemenets/Order";
import Basket from "../pages/client/Basket";
import History from "../pages/client/History";

function AllRoutes() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.role);

  return (
    <>
      <React.Fragment>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="auth">
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            {/* Admin routes */}
            <Route
              path="/admin-dashboard"
              element={
                isLoggedIn && role === "admin" ? (
                  <AdminDashboard />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/clients"
              element={
                isLoggedIn && role === "admin" ? (
                  <ClientsList />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/meals"
              element={
                isLoggedIn && role === "admin" ? (
                  <MealList />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/orders"
              element={
                isLoggedIn && role === "admin" ? (
                  <OrdersList />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/acceptedDg"
              element={
                isLoggedIn && role === "admin" ? (
                  <DgList type="accepted" />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/pendingDg"
              element={
                isLoggedIn && role === "admin" ? (
                  <DgList type="pending" />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/refusedDg"
              element={
                isLoggedIn && role === "admin" ? (
                  <DgList type="refused" />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/category"
              element={
                isLoggedIn && role === "admin" ? (
                  <CategoryList />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/addCategory"
              element={
                isLoggedIn && role === "admin" ? (
                  <AddCategory />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/addMeal"
              element={
                isLoggedIn && role === "admin" ? (
                  <AddMeal />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/meals/editMeal/:id"
              element={
                isLoggedIn && role === "admin" ? (
                  <EditMeal />
                ) : (
                  <Navigate to="/" />
                )
              }
            />

            {/* Delivery guy routes */}
            <Route
              path="/deliveryguy-dashboard"
              element={
                isLoggedIn && role === "deliveryguy" ? (
                  <DgDashboard />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/newOrders"
              element={
                isLoggedIn && role === "deliveryguy" ? (
                  <NewOrers />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/myOrders"
              element={
                isLoggedIn && role === "deliveryguy" ? (
                  <MyOrders />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/workingOn"
              element={
                isLoggedIn && role === "deliveryguy" ? (
                  <WorkingOn />
                ) : (
                  <Navigate to="/" />
                )
              }
            />

            {/* Client routes */}
            <Route
              path="/clientDashboard"
              element={
                isLoggedIn && role === "client" ? (
                  <ClientHome />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/order/:id"
              element={
                isLoggedIn && role === "client" ? (
                  <Order />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/basket"
              element={
                isLoggedIn && role === "client" ? (
                  <Basket />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/history"
              element={
                isLoggedIn && role === "client" ? (
                  <History />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
          </Routes>
        </Router>
      </React.Fragment>
    </>
  );
}

export default AllRoutes;
