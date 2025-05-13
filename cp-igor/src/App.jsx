import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// import components
import Header from './components/Header';
import SlideShow from './components/SlideShow';
import FairyTaleList from './components/FairyTaleList';
import Footer from './components/Footer';
import MakingOf from './components/MakingOf';
import AboutUs from './components/AboutUs';
import JackStory from './jack-components/JackStory';
import slides from './api/slides.json';

// wrapper component to conditionally show header and footer
function LayoutWrapper({ children }) {
  const location = useLocation();

  // hide header and footer only on the fairy tale story page
  const isFairyTalePage = location.pathname === "/sprookje";

  return (
    <>
      {!isFairyTalePage && <Header />}
      {children}
      {!isFairyTalePage && <Footer />}
    </>
  );
}

function App() {
  // search state from input
  const [searchItem, setSearchItem] = useState("");
  // genre filter selection
  const [selectedGenre, setSelectedGenre] = useState("");

  // flatten all slides into one array
  const allItems = slides.flat();

  // filter stories by search and selected genre
  const filteredItems = allItems.filter((item) =>
    item.fairyTaleTitle.toLowerCase().includes(searchItem.toLowerCase()) &&
    (selectedGenre === "" || item.genre === selectedGenre)
  );

  // updates genre selection when user clicks dropdown
  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <Router>
      {/* wraps app with optional header/footer */}
      <LayoutWrapper>
        <Routes>
          {/* home page with slideshow and list */}
          <Route
            path="/"
            element={
              <>
                <SlideShow slides={slides} />
                <FairyTaleList slides={filteredItems} />
              </>
            }
          />
          {/* student’s fairy tale project page */}
          <Route path="/sprookje" element={<JackStory />} />

          {/* extra pages */}
          <Route path="/makingof" element={<MakingOf />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
