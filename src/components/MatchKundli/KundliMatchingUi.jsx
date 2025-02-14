import React, { useEffect, useRef, useState } from "react";
import babaTillu from "../../assets/image/babaTillu.png";
import Banner from "../../assets/image/Banner3.png";
import { fetchBirthDetails, prepareBirthData } from "../../utils/astrologyApi";
import FreeKundliDetails from "../freeServices/freeKundliNames/FreeKundliDetails";

/**
 * KundliMatchingUi Component: Handles user input for generating Kundli and displays saved Kundlis.
 */
const KundliMatchingUi = () => {
  // ==================== State Management ====================
  // Controls which tab is active (generate new kundli or view saved ones)
  const [activeTab, setActiveTab] = useState("generate"); // 'generate' or 'saved'
  // Controls whether to show detailed view of a selected kundli
  const [showDetails, setShowDetails] = useState(false);
  // Stores list of recently generated kundlis
  const [recentKundlis, setRecentKundlis] = useState([]);
  // Currently selected kundli for viewing details
  const [selectedKundli, setSelectedKundli] = useState(null);
  // Loading state for API calls
  const [loading, setLoading] = useState(false);
  // Error state for form validation and API errors
  const [error, setError] = useState(null);
  // New state for search and sorting
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("newest"); // 'newest' or 'oldest'
  // Form data for kundli generation
  const [formData, setFormData] = useState({
    firstName: "",
    userGender: "",
    birthDate: "",
    birthTime: "",
    birthPlace: "",
    location: null,
    partnerName: "",
    partnerBirthDate: "",
    partnerBirthTime: "",
    partnerBirthPlace: "",
    partnerLocation: null,
    partnerGender: "",
  });

  const [userGender, setUserGender] = useState('');
  const [partnerGender, setPartnerGender] = useState('');

  const handleUserGenderChange = (event) => {
    setUserGender(event.target.value);
    setPartnerGender(''); // Deselect partner gender when user selects
    setFormData((prev) => ({ ...prev, userGender: event.target.value }));
  };

  const handlePartnerGenderChange = (event) => {
    setPartnerGender(event.target.value);
    setUserGender(''); // Deselect user gender when partner selects
    setFormData((prev) => ({ ...prev, partnerGender: event.target.value }));
  };

  // Location search state
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoadingLocations, setIsLoadingLocations] = useState(false);
  const autocompleteRef = useRef(null);

  const [partnerLocationSuggestions, setPartnerLocationSuggestions] = useState(
    []
  );
  const [showPartnerSuggestions, setShowPartnerSuggestions] = useState(false);
  const [isPartnerLoadingLocations, setIsPartnerLoadingLocations] =
    useState(false);
  const partnerAutocompleteRef = useRef(null);

  // Indian cities data with coordinates
  const indianCities = [
    // Major Metropolitan Cities
    { id: 1, name: "Mumbai", state: "Maharashtra", lat: 19.076, lon: 72.8777 },
    { id: 2, name: "Delhi", state: "Delhi", lat: 28.6139, lon: 77.209 },
    {
      id: 3,
      name: "Bangalore",
      state: "Karnataka",
      lat: 12.9716,
      lon: 77.5946,
    },
    { id: 4, name: "Hyderabad", state: "Telangana", lat: 17.385, lon: 78.4867 },
    { id: 5, name: "Chennai", state: "Tamil Nadu", lat: 13.0827, lon: 80.2707 },
    {
      id: 6,
      name: "Kolkata",
      state: "West Bengal",
      lat: 22.5726,
      lon: 88.3639,
    },

    // Maharashtra
    { id: 7, name: "Pune", state: "Maharashtra", lat: 18.5204, lon: 73.8567 },
    { id: 8, name: "Nagpur", state: "Maharashtra", lat: 21.1458, lon: 79.0882 },
    { id: 9, name: "Nashik", state: "Maharashtra", lat: 19.9975, lon: 73.7898 },
    {
      id: 10,
      name: "Aurangabad",
      state: "Maharashtra",
      lat: 19.8762,
      lon: 75.3433,
    },

    // Gujarat
    { id: 11, name: "Ahmedabad", state: "Gujarat", lat: 23.0225, lon: 72.5714 },
    { id: 12, name: "Surat", state: "Gujarat", lat: 21.1702, lon: 72.8311 },
    { id: 13, name: "Vadodara", state: "Gujarat", lat: 22.3072, lon: 73.1812 },
    { id: 14, name: "Rajkot", state: "Gujarat", lat: 22.3039, lon: 70.8022 },

    // Rajasthan
    { id: 15, name: "Jaipur", state: "Rajasthan", lat: 26.9124, lon: 75.7873 },
    { id: 16, name: "Jodhpur", state: "Rajasthan", lat: 26.2389, lon: 73.0243 },
    { id: 17, name: "Udaipur", state: "Rajasthan", lat: 24.5854, lon: 73.7125 },
    { id: 18, name: "Kota", state: "Rajasthan", lat: 25.2138, lon: 75.8648 },

    // Uttar Pradesh
    {
      id: 19,
      name: "Lucknow",
      state: "Uttar Pradesh",
      lat: 26.8467,
      lon: 80.9462,
    },
    {
      id: 20,
      name: "Kanpur",
      state: "Uttar Pradesh",
      lat: 26.4499,
      lon: 80.3319,
    },
    {
      id: 21,
      name: "Agra",
      state: "Uttar Pradesh",
      lat: 27.1767,
      lon: 78.0081,
    },
    {
      id: 22,
      name: "Varanasi",
      state: "Uttar Pradesh",
      lat: 25.3176,
      lon: 82.9739,
    },

    // Madhya Pradesh
    {
      id: 23,
      name: "Bhopal",
      state: "Madhya Pradesh",
      lat: 23.2599,
      lon: 77.4126,
    },
    {
      id: 24,
      name: "Indore",
      state: "Madhya Pradesh",
      lat: 22.7196,
      lon: 75.8577,
    },
    {
      id: 25,
      name: "Gwalior",
      state: "Madhya Pradesh",
      lat: 26.2183,
      lon: 78.1828,
    },
    {
      id: 26,
      name: "Jabalpur",
      state: "Madhya Pradesh",
      lat: 23.1815,
      lon: 79.9864,
    },

    // Bihar
    { id: 27, name: "Patna", state: "Bihar", lat: 25.5941, lon: 85.1376 },
    { id: 28, name: "Gaya", state: "Bihar", lat: 24.7914, lon: 85.0002 },
    { id: 29, name: "Muzaffarpur", state: "Bihar", lat: 26.1209, lon: 85.3647 },
    { id: 30, name: "Bhagalpur", state: "Bihar", lat: 25.2425, lon: 87.0139 },

    // Punjab & Haryana
    {
      id: 31,
      name: "Chandigarh",
      state: "Chandigarh",
      lat: 30.7333,
      lon: 76.7794,
    },
    { id: 32, name: "Amritsar", state: "Punjab", lat: 31.634, lon: 74.8723 },
    { id: 33, name: "Ludhiana", state: "Punjab", lat: 30.901, lon: 75.8573 },
    { id: 34, name: "Gurgaon", state: "Haryana", lat: 28.4595, lon: 77.0266 },

    // South India
    {
      id: 35,
      name: "Coimbatore",
      state: "Tamil Nadu",
      lat: 11.0168,
      lon: 76.9558,
    },
    { id: 36, name: "Madurai", state: "Tamil Nadu", lat: 9.9252, lon: 78.1198 },
    {
      id: 37,
      name: "Thiruvananthapuram",
      state: "Kerala",
      lat: 8.5241,
      lon: 76.9366,
    },
    { id: 38, name: "Kochi", state: "Kerala", lat: 9.9312, lon: 76.2673 },
    {
      id: 39,
      name: "Visakhapatnam",
      state: "Andhra Pradesh",
      lat: 17.6868,
      lon: 83.2185,
    },
    {
      id: 40,
      name: "Vijayawada",
      state: "Andhra Pradesh",
      lat: 16.5062,
      lon: 80.648,
    },

    // East India
    {
      id: 41,
      name: "Bhubaneswar",
      state: "Odisha",
      lat: 20.2961,
      lon: 85.8245,
    },
    { id: 42, name: "Cuttack", state: "Odisha", lat: 20.4625, lon: 85.883 },
    { id: 43, name: "Guwahati", state: "Assam", lat: 26.1445, lon: 91.7362 },
    {
      id: 44,
      name: "Siliguri",
      state: "West Bengal",
      lat: 26.7271,
      lon: 88.3953,
    },
  ];

  // ==================== Google Places Integration ====================
  useEffect(() => {
    // Load Google Places API script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_API_KEY&libraries=places`;
    script.async = true;
    script.onload = initializePlacesAutocomplete;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const initializePlacesAutocomplete = () => {
    if (window.google && window.google.maps && window.google.maps.places) {
      autocompleteRef.current =
        new window.google.maps.places.AutocompleteService();
      partnerAutocompleteRef.current =
        new window.google.maps.places.AutocompleteService();
    }
  };

  // Handle location input change with hybrid approach
  const handleLocationInput = async (value) => {
    setFormData((prev) => ({ ...prev, birthPlace: value }));

    if (!value.trim()) {
      setLocationSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    setIsLoadingLocations(true);
    setShowSuggestions(true);

    try {
      // First, search local Indian cities
      const searchValue = value.toLowerCase();
      const localResults = indianCities
        .filter((city) => {
          const cityName = city.name.toLowerCase();
          const stateName = city.state.toLowerCase();
          return (
            cityName.startsWith(searchValue) ||
            cityName.includes(searchValue) ||
            stateName.includes(searchValue)
          );
        })
        .sort((a, b) => {
          const aStartsWith = a.name.toLowerCase().startsWith(searchValue);
          const bStartsWith = b.name.toLowerCase().startsWith(searchValue);
          if (aStartsWith && !bStartsWith) return -1;
          if (!aStartsWith && bStartsWith) return 1;
          return 0;
        })
        .slice(0, 4)
        .map((city) => ({
          id: `local_${city.id}`,
          description: `${city.name}, ${city.state}`,
          mainText: city.name,
          secondaryText: city.state,
          source: "local",
          coordinates: { lat: city.lat, lon: city.lon },
        }));

      // Then, if Google Places API is available, get international results
      let apiResults = [];
      if (autocompleteRef.current) {
        const request = {
          input: value,
          types: ["(cities)"],
          componentRestrictions: { country: "in" }, // Restrict to India
        };

        const predictions = await new Promise((resolve) => {
          autocompleteRef.current.getPlacePredictions(
            request,
            (predictions, status) => {
              if (
                status === window.google.maps.places.PlacesServiceStatus.OK &&
                predictions
              ) {
                resolve(predictions);
              } else {
                resolve([]);
              }
            }
          );
        });

        apiResults = predictions
          .map((place) => ({
            id: place.place_id,
            description: place.description,
            mainText: place.structured_formatting.main_text,
            secondaryText: place.structured_formatting.secondary_text,
            source: "google",
          }))
          .slice(0, 4);
      }

      // Combine and deduplicate results
      const combinedResults = [...localResults];
      apiResults.forEach((apiResult) => {
        // Only add API results that don't match any local results
        if (
          !localResults.some(
            (local) =>
              local.mainText.toLowerCase() === apiResult.mainText.toLowerCase()
          )
        ) {
          combinedResults.push(apiResult);
        }
      });

      setLocationSuggestions(combinedResults.slice(0, 8));
    } catch (error) {
      console.error("Error fetching location suggestions:", error);
      // Fallback to local results only
      const localResults = indianCities
        .filter(
          (city) =>
            city.name.toLowerCase().includes(value.toLowerCase()) ||
            city.state.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 8)
        .map((city) => ({
          id: `local_${city.id}`,
          description: `${city.name}, ${city.state}`,
          mainText: city.name,
          secondaryText: city.state,
          source: "local",
          coordinates: { lat: city.lat, lon: city.lon },
        }));
      setLocationSuggestions(localResults);
    } finally {
      setIsLoadingLocations(false);
    }
  };

  const handlePartnerLocationInput = async (value) => {
    setFormData((prev) => ({ ...prev, partnerBirthPlace: value }));

    if (!value.trim()) {
      setPartnerLocationSuggestions([]);
      setShowPartnerSuggestions(false);
      return;
    }

    setIsPartnerLoadingLocations(true);
    setShowPartnerSuggestions(true);

    try {
      // First, search local Indian cities
      const searchValue = value.toLowerCase();
      const localResults = indianCities
        .filter((city) => {
          const cityName = city.name.toLowerCase();
          const stateName = city.state.toLowerCase();
          return (
            cityName.startsWith(searchValue) ||
            cityName.includes(searchValue) ||
            stateName.includes(searchValue)
          );
        })
        .sort((a, b) => {
          const aStartsWith = a.name.toLowerCase().startsWith(searchValue);
          const bStartsWith = b.name.toLowerCase().startsWith(searchValue);
          if (aStartsWith && !bStartsWith) return -1;
          if (!aStartsWith && bStartsWith) return 1;
          return 0;
        })
        .slice(0, 4)
        .map((city) => ({
          id: `local_${city.id}`,
          description: `${city.name}, ${city.state}`,
          mainText: city.name,
          secondaryText: city.state,
          source: "local",
          coordinates: { lat: city.lat, lon: city.lon },
        }));

      // Then, if Google Places API is available, get international results
      let apiResults = [];
      if (partnerAutocompleteRef.current) {
        const request = {
          input: value,
          types: ["(cities)"],
          componentRestrictions: { country: "in" }, // Restrict to India
        };

        const predictions = await new Promise((resolve) => {
          partnerAutocompleteRef.current.getPlacePredictions(
            request,
            (predictions, status) => {
              if (
                status === window.google.maps.places.PlacesServiceStatus.OK &&
                predictions
              ) {
                resolve(predictions);
              } else {
                resolve([]);
              }
            }
          );
        });

        apiResults = predictions
          .map((place) => ({
            id: place.place_id,
            description: place.description,
            mainText: place.structured_formatting.main_text,
            secondaryText: place.structured_formatting.secondary_text,
            source: "google",
          }))
          .slice(0, 4);
      }

      // Combine and deduplicate results
      const combinedResults = [...localResults];
      apiResults.forEach((apiResult) => {
        // Only add API results that don't match any local results
        if (
          !localResults.some(
            (local) =>
              local.mainText.toLowerCase() === apiResult.mainText.toLowerCase()
          )
        ) {
          combinedResults.push(apiResult);
        }
      });

      setPartnerLocationSuggestions(combinedResults.slice(0, 8));
    } catch (error) {
      console.error("Error fetching location suggestions:", error);
      // Fallback to local results only
      const localResults = indianCities
        .filter(
          (city) =>
            city.name.toLowerCase().includes(value.toLowerCase()) ||
            city.state.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 8)
        .map((city) => ({
          id: `local_${city.id}`,
          description: `${city.name}, ${city.state}`,
          mainText: city.name,
          secondaryText: city.state,
          source: "local",
          coordinates: { lat: city.lat, lon: city.lon },
        }));
      setPartnerLocationSuggestions(localResults);
    } finally {
      setIsPartnerLoadingLocations(false);
    }
  };

  // Handle location selection with coordinates lookup
  const handleLocationSelect = async (suggestion) => {
    if (suggestion.source === "local") {
      // Use pre-defined coordinates for local cities
      setFormData((prev) => ({
        ...prev,
        birthPlace: suggestion.description,
        location: suggestion.coordinates,
      }));
      setShowSuggestions(false);
    } else {
      // For Google Places results, get coordinates using Places Details
      try {
        setIsLoadingLocations(true);
        const placesService = new window.google.maps.places.PlacesService(
          document.createElement("div")
        );

        const placeDetails = await new Promise((resolve, reject) => {
          placesService.getDetails(
            {
              placeId: suggestion.id,
              fields: ["geometry"],
            },
            (place, status) => {
              if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                resolve(place);
              } else {
                reject(new Error("Failed to get place details"));
              }
            }
          );
        });

        setFormData((prev) => ({
          ...prev,
          birthPlace: suggestion.description,
          location: {
            lat: placeDetails.geometry.location.lat(),
            lon: placeDetails.geometry.location.lng(),
          },
        }));
      } catch (error) {
        console.error("Error getting place details:", error);
        setError("Failed to get location coordinates. Please try again.");
      } finally {
        setIsLoadingLocations(false);
        setShowSuggestions(false);
      }
    }
  };

  const handlePartnerLocationSelect = async (suggestion) => {
    if (suggestion.source === "local") {
      // Use pre-defined coordinates for local cities
      setFormData((prev) => ({
        ...prev,
        partnerBirthPlace: suggestion.description,
        partnerLocation: suggestion.coordinates,
      }));
      setShowPartnerSuggestions(false);
    } else {
      // For Google Places results, get coordinates using Places Details
      try {
        setIsPartnerLoadingLocations(true);
        const placesService = new window.google.maps.places.PlacesService(
          document.createElement("div")
        );

        const placeDetails = await new Promise((resolve, reject) => {
          placesService.getDetails(
            {
              placeId: suggestion.id,
              fields: ["geometry"],
            },
            (place, status) => {
              if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                resolve(place);
              } else {
                reject(new Error("Failed to get place details"));
              }
            }
          );
        });

        setFormData((prev) => ({
          ...prev,
          partnerBirthPlace: suggestion.description,
          partnerLocation: {
            lat: placeDetails.geometry.location.lat(),
            lon: placeDetails.geometry.location.lng(),
          },
        }));
      } catch (error) {
        console.error("Error getting place details:", error);
        setError("Failed to get location coordinates. Please try again.");
      } finally {
        setIsPartnerLoadingLocations(false);
        setShowPartnerSuggestions(false);
      }
    }
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".location-dropdown")) {
        setShowSuggestions(false);
        setShowPartnerSuggestions(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // ==================== Local Storage Management ====================
  // Load saved kundlis from localStorage on component mount
  useEffect(() => {
    try {
      const savedKundlis = localStorage.getItem("recentKundlis");
      if (savedKundlis) {
        setRecentKundlis(JSON.parse(savedKundlis));
      }
    } catch (error) {
      console.error("Error loading saved kundlis:", error);
      setRecentKundlis([]);
    }
  }, []);

  // ==================== Form Handling ====================
  // Handle changes in form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (error) setError(null);
  };

  // Validate form data before submission
  const validateForm = () => {
    if (!formData.firstName.trim()) {
      throw new Error("Please enter your name");
    }
    if (!formData.userGender) {
      throw new Error("Please select your gender");
    }
    if (!formData.birthDate) {
      throw new Error("Please enter your birth date");
    }
    if (!formData.birthTime) {
      throw new Error("Please enter your birth time");
    }
    if (!formData.birthPlace) {
      throw new Error("Please enter your birth place");
    }
    if (!formData.partnerName.trim()) {
      throw new Error("Please enter your partner's name");
    }
    if (!formData.partnerBirthDate) {
      throw new Error("Please enter your partner's birth date");
    }
    if (!formData.partnerBirthTime) {
      throw new Error("Please enter your partner's birth time");
    }
    if (!formData.partnerBirthPlace) {
      throw new Error("Please enter your partner's birth place");
    }
    if (!formData.partnerGender) {
      throw new Error("Please select your partner's gender");
    }
  };

  // ==================== API Integration ====================
  // Handle kundli generation and API calls
  const handleGenerateKundli = async () => {
    try {
      setError(null);
      setLoading(true);

      // Validate form before API call
      validateForm();

      // Prepare and send data to API
      const birthData = prepareBirthData(formData);
      const birthDetails = await fetchBirthDetails(birthData);

      // Create new kundli object with API response
      const newKundli = {
        ...formData,
        id: Date.now(),
        createdAt: new Date().toISOString(),
        birthDetails,
      };

      // Update recent kundlis list (keep only last 3)
      const updatedKundlis = [newKundli, ...recentKundlis].slice(0, 3);
      setRecentKundlis(updatedKundlis);

      // Save to localStorage
      try {
        localStorage.setItem("recentKundlis", JSON.stringify(updatedKundlis));
      } catch (storageError) {
        console.error("Error saving to localStorage:", storageError);
      }

      // Update UI state
      setSelectedKundli(newKundli);
      setShowDetails(true);
      setActiveTab("saved");

      // Reset form
      setFormData({
        firstName: "",
        userGender: "",
        birthDate: "",
        birthTime: "",
        birthPlace: "",
        location: null,
        partnerName: "",
        partnerBirthDate: "",
        partnerBirthTime: "",
        partnerBirthPlace: "",
        partnerLocation: null,
        partnerGender: "",
      });
    } catch (error) {
      setError(error.message);
      if (error.technical) {
        console.error("Technical Error Details:", error.technical);
      }
    } finally {
      setLoading(false);
    }
  };

  // ==================== Kundli Management ====================
  // Filter and sort Kundlis based on search query and sort order
  const getFilteredKundlis = () => {
    let filtered = [...recentKundlis];

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (kundli) =>
          kundli.firstName.toLowerCase().includes(query) ||
          kundli.birthPlace.toLowerCase().includes(query) ||
          new Date(kundli.birthDate).toLocaleDateString().includes(query)
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    return filtered;
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Toggle sort order
  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === "newest" ? "oldest" : "newest"));
  };

  // Handle selection of saved kundli for viewing
  const handleKundliSelect = (kundli) => {
    setSelectedKundli(kundli);
    setShowDetails(true);
    if (error) setError(null);
  };

  // Handle deletion of saved kundli
  const handleKundliDelete = (kundliId) => {
    try {
      const updatedKundlis = recentKundlis.filter((k) => k.id !== kundliId);
      setRecentKundlis(updatedKundlis);
      localStorage.setItem("recentKundlis", JSON.stringify(updatedKundlis));

      if (selectedKundli && selectedKundli.id === kundliId) {
        setSelectedKundli(null);
        setShowDetails(false);
      }
    } catch (error) {
      console.error("Error deleting kundli:", error);
      setError("Failed to delete kundli. Please try again.");
    }
  };

  // ==================== Component Render ====================
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between bg-[#FFF9E7] px-20 py-14 ">
        {/* Left Section - Form and Content */}
        <div className="space-y-5">
          <img src={Banner} alt="banner" className="relative bottom-8" />
          <p className="ml-10 relative bottom-8">
            {activeTab === "generate"
              ? "For kundali matching, enter the birth details of the boy and girl in the tool below. The result is on the ashta Kuta system, calculating compatibility out of 36 points."
              : "View and manage your saved Kundlis below."}
          </p>
          <div className="bg-white p-8 shadow-xl rounded-3xl relative bottom-2">
            {/* Tab Navigation */}

            {/* Conditional Rendering based on Active Tab */}
            {activeTab === "generate" ? (
              // Generate Kundli Form
              <div className="space-y-4">
                {/* Error Display */}
                {error && (
                  <div className="text-red-500 text-sm mb-4">{error}</div>
                )}

                <div className="grid grid-cols-2 gap-8">
                  {/* Your Details Section */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-[#F17806]">
                      Your Detail
                    </h3>
                    <div className="space-y-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-600">
                          First Name*
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Enter your name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#F17806] focus:border-[#F17806]"
                          disabled={loading}
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-600">
                          Date of Birth*
                        </label>
                        <input
                          type="date"
                          name="birthDate"
                          value={formData.birthDate}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#F17806] focus:border-[#F17806]"
                          disabled={loading}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-600">
                          Select Gender*
                        </label>
                        <div className="flex gap-4">
                          <label>
                            <input
                              type="radio"
                              value="male"
                              checked={userGender === "male"}
                              onChange={handleUserGenderChange}
                            />
                            Male
                          </label>
                          <label>
                            <input
                              type="radio"
                              value="female"
                              checked={userGender === "female"}
                              onChange={handleUserGenderChange}
                            />
                            Female
                          </label>
                          <label>
                            <input
                              type="radio"
                              value="other"
                              checked={userGender === "other"}
                              onChange={handleUserGenderChange}
                            />
                            Other
                          </label>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-600">
                          Time of Birth*
                        </label>
                        <input
                          type="time"
                          name="birthTime"
                          value={formData.birthTime}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#F17806] focus:border-[#F17806]"
                          disabled={loading}
                        />
                      </div>

                      <div className="relative flex flex-col gap-2">
                        <label className="text-sm text-gray-600">
                          Place of Birth*
                        </label>
                        <input
                          type="text"
                          name="birthPlace"
                          value={formData.birthPlace}
                          onChange={(e) => handleLocationInput(e.target.value)}
                          onFocus={() => setShowSuggestions(true)}
                          placeholder="Enter birth place"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#F17806] focus:border-[#F17806]"
                          disabled={loading}
                        />

                        {showSuggestions && (
                          <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-1">
                            {isLoadingLocations ? (
                              <div className="p-4 text-center text-gray-500">
                                Loading locations...
                              </div>
                            ) : locationSuggestions.length > 0 ? (
                              <ul className="max-h-60 overflow-auto">
                                {locationSuggestions.map((suggestion) => (
                                  <li
                                    key={suggestion.id}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() =>
                                      handleLocationSelect(suggestion)
                                    }
                                  >
                                    <div className="font-medium text-gray-900">
                                      {suggestion.mainText}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                      {suggestion.secondaryText}
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <div className="p-2 text-center text-gray-500">
                                No locations found
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Partner Details Section */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-[#F17806]">
                      Partner Detail
                    </h3>
                    <div className="space-y-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-600">
                          First Name*
                        </label>
                        <input
                          type="text"
                          name="partnerName"
                          value={formData.partnerName || ""}
                          onChange={handleInputChange}
                          placeholder="Enter partner's name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#F17806] focus:border-[#F17806]"
                          disabled={loading}
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-600">
                          Date of Birth*
                        </label>
                        <input
                          type="date"
                          name="partnerBirthDate"
                          value={formData.partnerBirthDate || ""}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#F17806] focus:border-[#F17806]"
                          disabled={loading}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-600">
                          Select Gender*
                        </label>
                        <div className="flex gap-4">
                          <label>
                            <input
                              type="radio"
                              value="male"
                              checked={partnerGender === "male"}
                              onChange={handlePartnerGenderChange}
                            />
                            Male
                          </label>
                          <label>
                            <input
                              type="radio"
                              value="female"
                              checked={partnerGender === "female"}
                              onChange={handlePartnerGenderChange}
                            />
                            Female
                          </label>
                          <label>
                            <input
                              type="radio"
                              value="other"
                              checked={partnerGender === "other"}
                              onChange={handlePartnerGenderChange}
                            />
                            Other
                          </label>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-600">
                          Time of Birth*
                        </label>
                        <input
                          type="time"
                          name="partnerBirthTime"
                          value={formData.partnerBirthTime || ""}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#F17806] focus:border-[#F17806]"
                          disabled={loading}
                        />
                      </div>

                      <div className="relative flex flex-col gap-2">
                        <label className="text-sm text-gray-600">
                          Place of Birth*
                        </label>
                        <input
                          type="text"
                          name="partnerBirthPlace"
                          value={formData.partnerBirthPlace || ""}
                          onChange={(e) =>
                            handlePartnerLocationInput(e.target.value)
                          }
                          onFocus={() => setShowPartnerSuggestions(true)}
                          placeholder="Enter birth place"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#F17806] focus:border-[#F17806]"
                          disabled={loading}
                        />

                        {showPartnerSuggestions && (
                          <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-1">
                            {isPartnerLoadingLocations ? (
                              <div className="p-4 text-center text-gray-500">
                                Loading locations...
                              </div>
                            ) : partnerLocationSuggestions.length > 0 ? (
                              <ul className="max-h-60 overflow-auto">
                                {partnerLocationSuggestions.map(
                                  (suggestion) => (
                                    <li
                                      key={suggestion.id}
                                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                      onClick={() =>
                                        handlePartnerLocationSelect(suggestion)
                                      }
                                    >
                                      <div className="font-medium text-gray-900">
                                        {suggestion.mainText}
                                      </div>
                                      <div className="text-sm text-gray-500">
                                        {suggestion.secondaryText}
                                      </div>
                                    </li>
                                  )
                                )}
                              </ul>
                            ) : (
                              <div className="p-2 text-center text-gray-500">
                                No locations found
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Match Horoscope Button */}
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={handleGenerateKundli}
                    disabled={loading}
                    className="w-full md:w-72 bg-[#F17806] text-white py-3 px-6 rounded-full hover:bg-[#E15602] transition-colors duration-200 font-medium disabled:opacity-50"
                  >
                    {loading ? "Matching..." : "MATCH HOROSCOPE"}
                  </button>
                </div>
              </div>
            ) : (
              // Saved Kundlis View with Enhanced UI
              <div>
                {/* Kundli List */}
                {showDetails && selectedKundli ? (
                  <div>
                    <button
                      onClick={() => setShowDetails(false)}
                      className="mb-4 flex items-center text-[#F17806] hover:text-[#E15602]"
                    >
                      <svg
                        className="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                      Back to Saved Kundlis
                    </button>
                    <FreeKundliDetails
                      kundli={selectedKundli}
                      onBack={() => setShowDetails(false)}
                    />
                  </div>
                ) : (
                  <div className="space-y-4">
                    {getFilteredKundlis().length > 0 ? (
                      getFilteredKundlis().map((kundli) => (
                        <div
                          key={kundli.id}
                          className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-medium text-gray-900">
                                {kundli.firstName}
                              </h3>
                              <p className="text-sm text-gray-500">
                                {new Date(
                                  kundli.birthDate
                                ).toLocaleDateString()}{" "}
                                at {kundli.birthTime}
                              </p>
                              <p className="text-sm text-gray-500">
                                {kundli.birthPlace}
                              </p>
                            </div>
                            <div className="flex space-x-2">
                              <button
                                onClick={() => handleKundliSelect(kundli)}
                                className="text-[#F17806] hover:text-[#E15602] p-2 rounded-full hover:bg-orange-50"
                              >
                                <svg
                                  className="h-5 w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                  />
                                </svg>
                              </button>
                              <button
                                onClick={() => handleKundliDelete(kundli.id)}
                                className="text-red-500 hover:text-red-600 p-2 rounded-full hover:bg-red-50"
                              >
                                <svg
                                  className="h-5 w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div className="mt-2">
                            <p className="text-xs text-gray-400">
                              Created{" "}
                              {new Date(kundli.createdAt).toLocaleDateString()}{" "}
                              at{" "}
                              {new Date(kundli.createdAt).toLocaleTimeString()}
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                          />
                        </svg>
                        <h3 className="mt-2 text-sm font-medium text-gray-900">
                          No Kundlis found
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {searchQuery
                            ? "No kundlis match your search."
                            : "Get started by generating your first kundli."}
                        </p>
                        {searchQuery && (
                          <button
                            onClick={() => setSearchQuery("")}
                            className="mt-4 text-sm text-[#F17806] hover:text-[#E15602]"
                          >
                            Clear search
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        {/* Right Section - Baba Image */}
        <div>
          <img src={babaTillu} alt="babaTillu" className="lg:ml-10" />
        </div>
      </div>
    </>
  );
};

export default KundliMatchingUi;
