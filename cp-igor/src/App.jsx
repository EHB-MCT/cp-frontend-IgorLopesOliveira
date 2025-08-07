// React hooks and React Router components
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Global styles
import './App.css';

// Project components
import Header from './components/Header';
import SlideShow from './components/SlideShow';
import FairyTaleList from './components/FairyTaleList';
import Footer from './components/Footer';
import MakingOf from './components/MakingOf';
import AboutUs from './components/AboutUs';
import JackStory from './jack-components/JackStory';
import MakingOfJack from './components/MakingOfJack';

// API call to fetch fairytales
import { fetchFairyTales } from './api/fetchFairyTales';
// ⬆️ This imports the fetch function that talks to an API and returns a list of fairy tales.
// It's likely calling `fetch('https://...')` inside that file.

/**
 * This wrapper allows us to reuse the layout (Header + Footer) across all pages.
 * It uses `useLocation()` to check the current route and conditionally show or hide the Footer.
 */
function LayoutWrapper({ children, onSearch, onGenreSelect }) {
  const location = useLocation(); // Hook to get current URL path
  const noFooterPages = ["/sprookje"]; // Pages where footer should be hidden
  const shouldShowFooter = !noFooterPages.includes(location.pathname); // Show footer unless path matches

  return (
    <>
      {/* Always render the Header, pass down search and genre handlers */}
      <Header onSearch={onSearch} onGenreSelect={onGenreSelect} />

      {/* Render whatever component is passed as children (usually a Route) */}
      {children}

      {/* Conditionally render the footer */}
      {shouldShowFooter && <Footer />}
    </>
  );
}

/**
 * Main application component.
 * Contains all the route definitions and data loading logic.
 */
function App() {
  // States for search input, genre filter, and slides from API
  const [searchItem, setSearchItem] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [slides, setSlides] = useState([]);

  /**
   * useEffect to fetch fairy tale data on initial load.
   * It calls the `fetchFairyTales()` API and transforms the response into pairs (chunks of 2)
   * for display in the slideshow and list.
   */
  useEffect(() => {
    // ⬇️ useEffect runs once, when the component mounts (empty dependency array)
    async function loadData() {
      try {
        const data = await fetchFairyTales(); 
        // ⬅️ Calls the API. The data returned is an array of fairy tales from the backend.

        const chunked = [];

        // ⬇️ This loop groups the fairy tales into arrays of 2
        // Example: [[item1, item2], [item3, item4], ...]
        // This is likely for a slideshow or grid layout
        for (let i = 0; i < data.length; i += 2) {
          const chunk = data.slice(i, i + 2).map((item) => ({
            id: item.id,
            image: item.imgThumbnail,
            studentName: item.nameStudent,
            fairyTaleTitle: item.fairytale,
            genre: item.genre,
            link: `/makingof/${item.id}`, // ⬅️ Used to build the link to individual pages
            internal: true,               // ⬅️ Marks whether this is an internal project
          }));

          chunked.push(chunk); // Add the pair of items to the chunks array
        }

        setSlides(chunked); 
        // ⬅️ Saves the grouped data into state
        // This state is passed to the SlideShow and FairyTaleList components

      } catch (err) {
        console.error('failed to load fairy tales:', err);
        // ⬅️ Logs an error if the fetch fails (e.g., no internet, API offline)
      }
    }

    loadData(); // ⬅️ Call the async function inside useEffect

  }, []);

  // Flatten the slides array to make it easier to filter by search and genre
  const allItems = slides.flat();

  // Filter based on search input and selected genre
  const filteredItems = allItems.filter((item) =>
    item.fairyTaleTitle.toLowerCase().includes(searchItem.toLowerCase()) &&
    (selectedGenre === '' || item.genre.toLowerCase() === selectedGenre.toLowerCase())
  );

  // Handler to update selected genre
  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    // Router with base path configured for GitHub Pages deployment
    <Router basename="/cp-frontend-IgorLopesOliveira/">
      {/* Shared layout (Header + Footer) wrapper */}
      <LayoutWrapper onSearch={setSearchItem} onGenreSelect={handleGenreSelect}>
        <Routes>
          {/* Home page: contains slideshow + filtered list */}
          <Route
            path="/"
            element={
              <>
                <SlideShow slides={slides} />
                <FairyTaleList slides={filteredItems} />
              </>
            }
          />

          {/* Jack's custom interactive story page */}
          <Route path="/sprookje" element={<JackStory />} />

          {/* Dynamic route: loads MakingOf based on fairytale ID */}
          <Route path="/makingof/:id" element={<MakingOf />} />

          {/* Static making-of page for Jack's story */}
          <Route path="/makingof-jack" element={<MakingOfJack />} />

          {/* Static About Us page */}
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
