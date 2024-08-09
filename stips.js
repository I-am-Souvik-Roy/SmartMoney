// Replace 'YOUR_API_KEY' with your actual API key
const apiKey = 'bn26yGO1HJxH0rpOnPZBLnSdpuabAa65GPWORCGi';
const apiUrl = 'https://api.marketaux.com/v1/news/all HTTP/1.1' + apiKey;

// Fetch news data from the API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Handle the fetched news data
    console.log(data.articles);
    // Display news content on your website
    // Example: Update HTML elements with news headlines and articles
  })
  .catch(error => {
    console.error('Error fetching news:', error);
    // Handle error cases
  });
