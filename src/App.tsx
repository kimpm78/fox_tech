import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import SignIn from './components/SignIn/signIn';
import SignUp from './components/SignUp/signUp';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import ScrollTopButton from './components/ScrollTopButton/ScrollTopButton';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="main_container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ScrollTopButton />
    </div>
  );
}

export default App;
