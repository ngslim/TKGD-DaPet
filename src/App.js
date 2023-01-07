import "./App.css";
import { Route, Routes } from "react-router-dom";
import Order from "./pages/Order/Order";
import Book from "./pages/Book/Book";
import Pet from "./pages/Pet/Pet";
import AddPet from "./pages/Pet/AddPet/AddPet";
import Location from "./pages/Book/Location/Location";
import Summary from "./pages/Book/Summary/Summary";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import { useState } from "react";
import { AuthProvider } from "./context/authentication";
// import SearchTemp from "./pages/Search/SearchTemp";

function App() {
  const [formInformation, setFormInformation] = useState(null);
  return (
    <AuthProvider>
      <Routes>
        <Route path="/order" element={<Order />} />
        <Route path="/order/:id" element={<Order />} />
        <Route
          path="/book"
          element={<Book onSubmitForm={(value) => setFormInformation(value)} />}
        />
        <Route
          path="/book/location"
          element={
            <Location
              formInformation={formInformation}
              onSubmitForm={(value) => setFormInformation(value)}
            />
          }
        />
        <Route
          path="/book/summary"
          element={<Summary formInformation={formInformation} />}
        />
        <Route path="/pet" element={<Pet />} />
        <Route path="/pet/add" element={<AddPet />} />
        {/* <Route path="/book/search" element={<SearchTemp />} /> */}
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
