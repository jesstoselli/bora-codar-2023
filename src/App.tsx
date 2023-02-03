import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles
import GlobalStyle from "./styles/global";

// Pages
import Main from "./pages/Main";
import MusicPlayer from "./pages/MusicPlayer";
import ProductCard from "./pages/ProductCard";
import { Calculator } from "./pages/Calculator";

// Components
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/music-player' element={<MusicPlayer />} />
        <Route path='/product-card' element={<ProductCard />} />
        <Route path='/calculator' element={<Calculator />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
