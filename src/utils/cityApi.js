const indianCities = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Jaipur",
  "Surat", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam", "Patna",
  "Vadodara", "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Varanasi",
  "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Allahabad", "Ranchi", "Howrah", "Coimbatore",
  "Jabalpur", "Gwalior", "Vijayawada", "Jodhpur", "Madurai", "Raipur", "Kota", "Chandigarh",
  "Guwahati", "Solapur", "Hubli", "Dharwad", "Bareilly", "Moradabad", "Mysore", "Gurgaon", "Aligarh",
  "Jalandhar", "Tiruchirappalli", "Bhubaneswar", "Salem", "Mira-Bhayandar", "Thiruvananthapuram",
  "Bhiwandi", "Saharanpur", "Gorakhpur", "Guntur", "Bikaner", "Amravati", "Noida", "Jamshedpur",
  "Bhilai", "Warangal", "Cuttack", "Firozabad", "Kochi", "Bhavnagar", "Dehradun", "Durgapur",
  "Asansol", "Nanded", "Kolhapur", "Ajmer", "Gulbarga", "Jamnagar", "Ujjain", "Loni", "Siliguri",
  "Jhansi", "Ulhasnagar", "Nellore", "Jammu", "Sangli-Miraj", "Kupwad", "Belgaum", "Mangalore",
  "Ambattur", "Tirunelveli", "Malegaon", "Gaya", "Jalgaon", "Udaipur", "Maheshtala"
];

export const searchCities = (query) => {
  if (!query) return [];
  
  const searchTerm = query.toLowerCase();
  return indianCities
    .filter(city => city.toLowerCase().includes(searchTerm))
    .slice(0, 10); // Limit to 10 results
};
