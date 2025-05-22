import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import SlideShow from './components/SlideShow';
import FairyTaleList from './components/FairyTaleList';
import Footer from './components/Footer';
import MakingOf from './components/MakingOf';
import AboutUs from './components/AboutUs';
import JackStory from './jack-components/JackStory';
import { fetchFairyTales } from './api/fetchFairyTales';

// layout wrapper for conditional header/footer rendering
function LayoutWrapper({ children, onSearch, onGenreSelect }) {
  const location = useLocation();
  const isFairyTalePage = location.pathname === "/cp-frontend-IgorLopesOliveira/sprookje";

  return (
    <>
      <Header onSearch={onSearch} onGenreSelect={onGenreSelect} />
      {children}
      {!isFairyTalePage && <Footer />}
    </>
  );
}

function App() {
  const [searchItem, setSearchItem] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchFairyTales();

        // group items into chunks of 4 for the slideshow
        const chunked = [];
        for (let i = 0; i < data.length; i += 4) {
          const chunk = data.slice(i, i + 4).map(item => ({
            image: item.imgThumbnail,
            studentName: item.nameStudent,
            fairyTaleTitle: item.fairytale,
            genre: item.genre,
            link: `/cp-frontend-IgorLopesOliveira/${item.id}`, // customize routing if needed
            internal: false
          }));
          chunked.push(chunk);
        }

        setSlides(chunked);
      } catch (err) {
        console.error('Failed to load fairy tales:', err);
      }
    }

    loadData();
  }, []);

  // flatten for filtering in FairyTaleList
  const allItems = slides.flat();
  const filteredItems = allItems.filter((item) =>
    item.fairyTaleTitle.toLowerCase().includes(searchItem.toLowerCase()) &&
    (selectedGenre === '' || item.genre.toLowerCase() === selectedGenre.toLowerCase())
  );

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <Router basename="/cp-frontend-IgorLopesOliveira">
      <LayoutWrapper onSearch={setSearchItem} onGenreSelect={handleGenreSelect}>
        <Routes>
          {/* homepage: slideshow and filtered grid */}
          <Route
            path="/"
            element={
              <>
                <SlideShow slides={slides} />
                <FairyTaleList slides={filteredItems} />
              </>
            }
          />

          {/* your custom Jack story */}
          <Route path="/sprookje" element={<JackStory />} />

          {/* other static pages */}
          <Route path="/makingof" element={<MakingOf />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
