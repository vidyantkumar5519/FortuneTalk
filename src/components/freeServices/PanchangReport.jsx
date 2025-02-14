import React, { 
  useState, 
  useEffect, 
  useMemo, 
  useCallback, 
  useRef, 
  lazy, 
  Suspense 
} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';
import MainLayout from '../layout/MainLayout';

// Icons
import { 
  FaSun, 
  FaMoon, 
  FaCalendarAlt, 
  FaClock, 
  FaAsterisk,
  FaChevronRight,
  FaHome,
  FaMapMarkerAlt,
  FaInfo,
  FaExclamationTriangle,
  FaSync,
  FaCity,
  FaTimes
} from 'react-icons/fa';

// Footer
import SecureFooter from "../footer/SecureFooter";
import Panchang from "../Panchang/Panchang";
import Footer from "../footer/Footer";
import Faq from "../Faq/Faq";
import Zodiac from "../zodiac/Zodiac";
import PanchangDescriptions from "../Panchang/PanchangDescriptions";
import Banner from "../Banner/Banner";

// Utility for geolocation
const INDIAN_CITIES = [
  { name: 'Mumbai', lat: 19.076, lon: 72.877 },
  { name: 'Delhi', lat: 28.644, lon: 77.216 },
  { name: 'Bangalore', lat: 12.972, lon: 77.594 },
  { name: 'Kolkata', lat: 22.569, lon: 88.363 },
  { name: 'Chennai', lat: 13.067, lon: 80.237 }
];

// Utility function for API authentication
const getAuthHeader = () => {
  const USER_ID = "636470";
  const API_KEY = "f18878ae6d3e7627238b03d4d53999548576e4c1";
  const authString = `${USER_ID}:${API_KEY}`;
  return `Basic ${btoa(authString)}`;
};

// Dynamic Import for Panchang Report Sections
const panchangSections = {
  PanchangReportHome: lazy(() => import('./panchangReportSection/PanchangReportHome')),
  Choghadiya: lazy(() => import('./panchangReportSection/Choghadiya')),
  Yoga: lazy(() => import('./panchangReportSection/Yoga')),
  SubhHora: lazy(() => import('./panchangReportSection/SubhHora')),
  SubhMuhurat: lazy(() => import('./panchangReportSection/SubhMuhurat')),
  Karna: lazy(() => import('./panchangReportSection/Karna')),
  Tithi: lazy(() => import('./panchangReportSection/Tithi')),
  Nakshatra: lazy(() => import('./panchangReportSection/Nakshatra')),
  RahuKaal: lazy(() => import('./panchangReportSection/RahuKaal'))
};

// Configuration for section buttons
const SECTION_BUTTONS = [
  { 
    label: 'Choghadiya', 
    component: panchangSections.Choghadiya, 
    key: 'choghadiya',
    icon: FaClock,
    description: 'Auspicious time periods for daily activities'
  },
  { 
    label: 'Yoga', 
    component: panchangSections.Yoga, 
    key: 'yoga',
    icon: FaAsterisk,
    description: 'Cosmic energy and alignment periods'
  },
  { 
    label: 'Subh Hora', 
    component: panchangSections.SubhHora, 
    key: 'subh-hora',
    icon: FaSun,
    description: 'Favorable hours for important tasks'
  },
  { 
    label: 'Subh Muhurat', 
    component: panchangSections.SubhMuhurat, 
    key: 'subh-muhurat',
    icon: FaMoon,
    description: 'Auspicious moments for significant events'
  },
  { 
    label: 'Karna', 
    component: panchangSections.Karna, 
    key: 'karna',
    icon: FaCalendarAlt,
    description: 'Lunar day segments and their significance'
  },
  { 
    label: 'Tithi', 
    component: panchangSections.Tithi, 
    key: 'tithi',
    icon: FaAsterisk,
    description: 'Lunar phases and their spiritual importance'
  },
  { 
    label: 'Nakshatra', 
    component: panchangSections.Nakshatra, 
    key: 'nakshatra',
    icon: FaSun,
    description: 'Celestial star positions and influences'
  },
  { 
    label: 'Rahu Kaal', 
    component: panchangSections.RahuKaal, 
    key: 'rahu-kaal',
    icon: FaClock,
    description: 'Inauspicious time period to avoid'
  },
];

const PanchangReport = () => {
  // State Management
  const [activeButton, setActiveButton] = useState('choghadiya');
  const [panchangData, setPanchangData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState({
    city: 'Mumbai',
    latitude: 19.076,
    longitude: 72.877
  });
  const [locationModalOpen, setLocationModalOpen] = useState(false);
  const [locationSearchTerm, setLocationSearchTerm] = useState('');

  // Refs
  const locationInputRef = useRef(null);

  // Memoized current date
  const currentDate = useMemo(() => new Date(), []);

  // Fetch Panchang Data with advanced error handling
  const fetchPanchangData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = {
        day: currentDate.getDate(),
        month: currentDate.getMonth() + 1,
        year: currentDate.getFullYear(),
        hour: currentDate.getHours(),
        min: currentDate.getMinutes(),
        lat: selectedLocation.latitude,
        lon: selectedLocation.longitude,
        tzone: 5.5,
      };

      const response = await axios.post(
        'https://json.astrologyapi.com/v1/advanced_panchang', 
        data,
        {
          headers: {
            'Authorization': getAuthHeader(),
            'Content-Type': 'application/json',
            'Accept-Language': 'en'
          },
          timeout: 15000
        }
      );

      if (response.data) {
        setPanchangData(response.data);
      } else {
        throw new Error('No data received from API');
      }
    } catch (err) {
      console.error("Panchang API Error:", err);
      
      const errorMessages = {
        401: "Authentication failed. Please verify your API credentials.",
        403: "Access forbidden. Check your subscription status.",
        404: "API endpoint not found. Please contact support.",
        network: "Network error. Check your internet connection.",
        default: "An unexpected error occurred. Please try again later."
      };

      setError({
        message: errorMessages[err.response?.status] || errorMessages.default,
        details: err.message,
        icon: <FaExclamationTriangle className="text-4xl text-red-500" />
      });
    } finally {
      setIsLoading(false);
    }
  }, [selectedLocation]);

  // Lifecycle and Data Fetching
  useEffect(() => {
    fetchPanchangData();
  }, [fetchPanchangData]);

  // Location Selection Handlers
  const handleLocationChange = (city) => {
    const selectedCity = INDIAN_CITIES.find(c => c.name === city);
    if (selectedCity) {
      setSelectedLocation({
        city: selectedCity.name,
        latitude: selectedCity.lat,
        longitude: selectedCity.lon
      });
      setLocationModalOpen(false);
    }
  };

  // Filtered city list for search
  const filteredCities = useMemo(() => 
    INDIAN_CITIES.filter(city => 
      city.name.toLowerCase().includes(locationSearchTerm.toLowerCase())
    ), 
    [locationSearchTerm]
  );

  // Render Location Selection Modal
  const renderLocationModal = () => (
    <div 
      className={`
        fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4
        ${locationModalOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        transition-all duration-300 ease-in-out
      `}
    >
      <div 
        className={`
          bg-white rounded-2xl w-full max-w-md shadow-2xl transform
          ${locationModalOpen ? 'scale-100' : 'scale-90'}
          transition-all duration-300 ease-in-out
        `}
      >
        <div className="p-6 border-b flex items-center justify-between">
          <h2 className="text-2xl font-bold flex items-center">
            <FaCity className="mr-3 text-orange-500" /> 
            Select Location
          </h2>
          <button 
            onClick={() => setLocationModalOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaTimes />
          </button>
        </div>
        
        <div className="p-4">
          <input 
            ref={locationInputRef}
            type="text"
            placeholder="Search cities..."
            value={locationSearchTerm}
            onChange={(e) => setLocationSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          
          <div className="mt-4 max-h-64 overflow-y-auto">
            {filteredCities.map(city => (
              <button
                key={city.name}
                onClick={() => handleLocationChange(city.name)}
                className="w-full text-left px-4 py-3 hover:bg-orange-50 rounded-lg transition flex items-center justify-between"
              >
                <span>{city.name}</span>
                <FaMapMarkerAlt className="text-orange-500" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Render error state
  const renderErrorState = () => (
    <div className="bg-red-50 border border-red-200 text-red-700 p-6 rounded-2xl shadow-md flex items-center space-x-4">
      {error.icon}
      <div>
        <h3 className="text-xl font-bold mb-2">Oops! Something went wrong</h3>
        <p className="mb-2">{error.message}</p>
        <button 
          onClick={fetchPanchangData}
          className="flex items-center bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
        >
          <FaSync className="mr-2" /> Retry
        </button>
      </div>
    </div>
  );

  // Render Panchang details
  const renderPanchangDetails = () => {
    if (isLoading) return (
      <div className="text-center py-8 text-gray-500 animate-pulse">
        Loading Panchang details...
      </div>
    );

    if (!panchangData) return null;

    return (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8F3F] p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                {format(currentDate, 'dd MMMM yyyy')}
              </h2>
              <p className="text-white/80 flex items-center">
                <FaMapMarkerAlt className="mr-2" /> {selectedLocation.city}
              </p>
            </div>
            <FaCalendarAlt className="text-4xl text-white/70" />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 p-6">
          <div>
            <h4 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">
              <FaSun className="inline-block mr-2 text-yellow-500" />
              Time Details
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Sunrise</span>
                <span className="font-semibold">{panchangData.sunrise}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sunset</span>
                <span className="font-semibold">{panchangData.sunset}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">
              <FaAsterisk className="inline-block mr-2 text-green-500" />
              Celestial Details
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Tithi</span>
                <span className="font-semibold">{panchangData.tithi?.details?.tithi_name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Nakshatra</span>
                <span className="font-semibold">{panchangData.nakshatra?.details?.nak_name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Yoga</span>
                <span className="font-semibold">{panchangData.yog?.details?.yog_name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <MainLayout>
      {/* Location Selection Modal */}
      {locationModalOpen && renderLocationModal()}
     <Panchang/>
      <div className=" mx-auto space-y-5 px-9 mt-10">
        {/* Header with Navigation */}
  

        {/* Error Handling */}
        {error && renderErrorState()}

        {/* Panchang Details */}
        {!error && renderPanchangDetails()}

        <div className="mt-8 grid md:grid-cols-[300px_1fr] gap-6">
          {/* Sidebar Navigation */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8F3F] p-4 text-white">
              <h3 className="text-xl font-bold text-center">
                Panchang Sections
              </h3>
            </div>
            <div className="divide-y">
              {SECTION_BUTTONS.map(section => (
                <button
                  key={section.key}
                  className={`
                    w-full flex items-center justify-between p-4 
                    transition-all duration-300 group
                    ${activeButton === section.key 
                      ? 'bg-[#FF6B35] text-white' 
                      : 'hover:bg-gray-100 text-gray-700'}
                  `}
                  onClick={() => setActiveButton(section.key)}
                >
                  <div className="flex items-center">
                    <section.icon className="mr-3" />
                    <div>
                      <span className="font-semibold">{section.label}</span>
                      <p className="text-xs text-left opacity-70 group-hover:opacity-100">
                        {section.description}
                      </p>
                    </div>
                  </div>
                  <FaChevronRight />
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Content Area */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <Suspense fallback={
              <div className="text-center py-8 text-gray-500 animate-pulse">
                Loading {activeButton} section...
              </div>
            }>
              {SECTION_BUTTONS.find(btn => btn.key === activeButton)?.component && 
                React.createElement(
                  SECTION_BUTTONS.find(btn => btn.key === activeButton).component, 
                  { 
                    panchangData, 
                    selectedLocation, 
                    currentDate 
                  }
                )
              }
            </Suspense>
          </div>
        </div>
      </div>
      
      <Banner/>
      <PanchangDescriptions/>
      <Zodiac/>
      <Faq/>
      <Footer/>
      {/* <SecureFooter /> */}
    </MainLayout>
  );
};

export default PanchangReport;
