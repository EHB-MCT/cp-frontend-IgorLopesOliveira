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
import MakingOfJack from './components/MakingOfJack';

import { fetchFairyTales } from './api/fetchFairyTales';

function LayoutWrapper({ children, onSearch, onGenreSelect }) {
  const location = useLocation();
  const noFooterPages = ["/sprookje"];
  const shouldShowFooter = !noFooterPages.includes(location.pathname);

  return (
    <>
      <Header onSearch={onSearch} onGenreSelect={onGenreSelect} />
      {children}
      {shouldShowFooter && <Footer />}
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
        const chunked = [];

        for (let i = 0; i < data.length; i += 2) {
          const chunk = data.slice(i, i + 2).map((item) => ({
            id: item.id,
            image: item.imgThumbnail,
            studentName: item.nameStudent,
            fairyTaleTitle: item.fairytale,
            genre: item.genre,
            link: `/makingof/${item.id}`,
            internal: true,
          }));

          chunked.push(chunk);
        }

        setSlides(chunked);
      } catch (err) {
        console.error('failed to load fairy tales:', err);
      }
    }

    loadData();
  }, []);

  const allItems = slides.flat();

  const filteredItems = allItems.filter((item) =>
    item.fairyTaleTitle.toLowerCase().includes(searchItem.toLowerCase()) &&
    (selectedGenre === '' || item.genre.toLowerCase() === selectedGenre.toLowerCase())
  );

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <Router basename="/cp-frontend-IgorLopesOliveira/">
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
          <Route path="/makingof/:id" element={<MakingOf />} />
          <Route path="/makingof-jack" element={<MakingOfJack />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
