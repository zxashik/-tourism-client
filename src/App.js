import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Home/Shared/Footer/Footer';
import Header from './Pages/Home/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder/PlaceOrder';
import AddService from './Pages/AddService/AddService';
import MyOrders from './Pages/MyOrders/MyOrders';
import ManageServices from './Pages/ManageServices/ManageServices';

function App() {
  return (
    <div className="">

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageServices">
              <ManageServices></ManageServices>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/placeOrder/:serviceId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;