// import react hooks and router components
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// import component files
import Header from './components/Header';
import SlideShow from './components/SlideShow';
import FairyTaleList from './components/FairyTaleList';
import Footer from './components/Footer';
import MakingOf from './components/MakingOf';
import AboutUs from './components/AboutUs';
import JackStory from './jack-components/JackStory';
import MakingOfJack from './components/MakingOfJack';

import { fetchFairyTales } from './api/fetchFairyTales';

// layout wrapper to show or hide footer depending on the current route
function LayoutWrapper({ children, onSearch, onGenreSelect }) {
  const location = useLocation();
  const noFooterPages = ["/sprookje"]; // list of pages without footer

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
  // search bar input
  const [searchItem, setSearchItem] = useState('');

  // selected genre from dropdown
  const [selectedGenre, setSelectedGenre] = useState('');

  // array of slides for slideshow
  const [slides, setSlides] = useState([]);

  // fetch data when component loads
  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchFairyTales();

        // split items into chunks of 2 for slideshow
        const chunked = [];

        for (let i = 0; i < data.length; i += 2) {
          const chunk = data.slice(i, i + 2).map((item) => ({
            id: item.id,
            image: item.imgThumbnail,
            studentName: item.nameStudent,
            fairyTaleTitle: item.fairytale,
            genre: item.genre,
            link: `/makingof/${item.id}`, // link to individual making of page
            internal: true,
          }));

          chunked.push(chunk);
        }

        setSlides(chunked);
      } catch (err) {
        console.error('failed to load fairy tales:', err);
      }
    }

    loadData(); // run data fetch
  }, []);

  // flatten the array of chunks into one array for filtering
  const allItems = slides.flat();

  // filter based on search input and selected genre
  const filteredItems = allItems.filter((item) =>
    item.fairyTaleTitle.toLowerCase().includes(searchItem.toLowerCase()) &&
    (selectedGenre === '' || item.genre.toLowerCase() === selectedGenre.toLowerCase())
  );

  // callback for when a genre is selected
  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    // wrap app in router with a base path for github pages
    <Router basename="/cp-frontend-IgorLopesOliveira/">
      <LayoutWrapper onSearch={setSearchItem} onGenreSelect={handleGenreSelect}>
        <Routes>
          {/* homepage shows slideshow and fairy tale list */}
          <Route
            path="/"
            element={
              <>
                <SlideShow slides={slides} />
                <FairyTaleList slides={filteredItems} />
              </>
            }
          />

          {/* custom jack story page */}
          <Route path="/sprookje" element={<JackStory />} />

          {/* dynamic making of page for each student */}
          <Route path="/makingof/:id" element={<MakingOf />} />

          {/* static making of page for jack */}
          <Route path="/makingof-jack" element={<MakingOfJack />} />

          {/* about us page */}
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
