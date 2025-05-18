import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// components
import Header from './components/Header';
import SlideShow from './components/SlideShow';
import FairyTaleList from './components/FairyTaleList';
import Footer from './components/Footer';
import MakingOf from './components/MakingOf';
import AboutUs from './components/AboutUs';
import JackStory from './jack-components/JackStory';
import slides from './api/slides.json';

// wrapper to conditionally render header/footer
function LayoutWrapper({ children, onSearch, onGenreSelect }) {
  const location = useLocation();
  const isFairyTalePage = location.pathname === "/sprookje";

  return (
    <>
      {!isFairyTalePage && <Header onSearch={onSearch} onGenreSelect={onGenreSelect} />}
      {children}
      {!isFairyTalePage && <Footer />}
    </>
  );
}

function App() {
  const [searchItem, setSearchItem] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const allItems = slides.flat();
  const filteredItems = allItems.filter((item) =>
    item.fairyTaleTitle.toLowerCase().includes(searchItem.toLowerCase()) &&
    (selectedGenre === "" || item.genre === selectedGenre)
  );

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <Router>
      <LayoutWrapper onSearch={setSearchItem} onGenreSelect={handleGenreSelect}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SlideShow slides={slides} />
                <FairyTaleList slides={filteredItems} />
              </>
            }
          />
          <Route path="/sprookje" element={<JackStory />} />
          <Route path="/makingof" element={<MakingOf />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
