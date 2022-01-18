import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Form from './pages/Form';
import Navbar from "./components/Navbar";
import Listing from "./pages/Listing";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;