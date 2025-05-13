import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import SearchFilter from './SearchFilter';

// header component receives two props: one to handle search input, one to filter genres
function Header({ onSearch, onGenreSelect }) {
  // state to toggle visibility of the search input
  const [showSearch, setShowSearch] = useState(false);
  // state to toggle the genre dropdown menu
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // toggles the search bar visibility
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  // toggles the genre dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header">
      {/* logo section on the left, links to the home page */}
      <div className="header-left">
        <Link to="/">
          <img src="/images/logo.png" alt="My Logo" className="logo" />
        </Link>
      </div>

      {/* right side of the header */}
      <div className="header-right">
        {/* if search is toggled, show input; otherwise show navigation menu */}
        {showSearch ? (
          <SearchFilter onSearch={onSearch} />
        ) : (
          <nav>
            <ul className="nav-links">
              {/* dropdown menu for genre selection */}
              <li className="dropdown" onClick={toggleDropdown}>
                <Link to="/">SPROOKJES</Link>
                {/* genre filter menu appears when dropdownOpen is true */}
                {dropdownOpen && (
                  <ul className="dropdown-menu">
                    <li><a onClick={() => onGenreSelect('')}>All</a></li> 
                    <li><a onClick={() => onGenreSelect('Fantasy')}>Fantasy</a></li>
                    <li><a onClick={() => onGenreSelect('Adventure')}>Adventure</a></li>
                    <li><a onClick={() => onGenreSelect('Horror')}>Horror</a></li>
                    <li><a onClick={() => onGenreSelect('Romance')}>Romance</a></li>
                  </ul>
                )}
              </li>

              {/* navigation links to making of and about us pages */}
              <li><Link to="/makingof">MAKING OF</Link></li>
              <li><Link to="/aboutus">ABOUT US</Link></li>
            </ul>
          </nav>
        )}

        {/* button to toggle the search bar */}
        <button className="search-icon" onClick={toggleSearch}>🔍</button>
      </div>
    </header>
  );
}

export default Header;
