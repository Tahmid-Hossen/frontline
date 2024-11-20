import {useState} from 'react';
import {useNavigate} from 'react-router-dom'; // Use react-router-dom for navigation
import {Search} from 'lucide-react';
import {Button} from "@/components/ui/button"; // Adjust this import if necessary

const searchData = [
  'Services',
  'Software Design',
  'Hardware Design',
  'Over The Top (OTT)',
  'Vehicle Tracking System',
  'Fleet Management System',
  'GSM Attendance',
  'Internet of Things (IoT)',
  'Set Top Box',
  'Vehicle Tracking System App',
  'Inventory System',
  'OTT Platform',
  'Telehealth App',
];

const AutoSuggestSearch = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate(); // Use useNavigate from react-router-dom

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const filteredSuggestions = searchData.filter(item =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    navigate(`/search?query=${suggestion.replace(/\s+/g, '-')}`); // React Router navigation for redirection
  };

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?query=${query.replace(/\s+/g, '-')}`);
    }
  };

  return (
    <>
      <div className="relative ml-auto flex-1 md:grow">
        <Search size={16} strokeWidth={2} className="absolute left-2.5 top-2.5 text-muted-foreground"/>
        <input
          type="search"
          placeholder="Search..."
          className="InputField pl-8 border border-gray-300 rounded-md rounded-r-none p-2"
          value={query}
          onChange={handleInputChange}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />

        {showSuggestions && suggestions.length > 0 && (
          <ul
            className="absolute left-0 top-12 w-full bg-white border border-gray-300 rounded-md max-h-48 overflow-y-auto">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onMouseDown={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
      <Button className={"!h-[37px] rounded-l-none bg-gradient-default mr-2"} onClick={handleSearch}>
        Search
      </Button>
    </>
  );
};

export default AutoSuggestSearch;
