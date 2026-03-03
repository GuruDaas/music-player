import './Sidebar.css';
import { FaMusic, FaGuitar, FaGlobe } from 'react-icons/fa';

const Sidebar = ({ selectedCategory, onCategoryChange }) => {
  const categories = [
    { id: 'punjabi', name: 'Punjabi', icon: <FaMusic /> },
    { id: 'hindi', name: 'Hindi', icon: <FaGuitar /> },
    { id: 'english', name: 'English', icon: <FaGlobe /> }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>🎵 Music Player</h2>
      </div>
      
      <div className="sidebar-menu">
        <h3>Playlists</h3>
        {categories.map((category) => (
          <div
            key={category.id}
            className={`menu-item ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => onCategoryChange(category.id)}
          >
            <span className="menu-icon">{category.icon}</span>
            <span className="menu-name">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;