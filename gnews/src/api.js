const apikey = "cf8cfbf105b1a18e51109471d5d95e3a";
const category = "general";
// url for api call
const url =
  "https://gnews.io/api/v4/top-headlines?category=" +
  category +
  "&lang=en&country=us&max=10&apikey=" +
  apikey;

// function to get headlines(exported to app.js)
export const getHeadlines = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

// function to search for news(exported to app.js)
export const searchNews = async (searchTerm) => {
  const response = await fetch(
    `https://gnews.io/api/v4/search?q=${searchTerm}&max=10&lang=en&token=${apikey}`
  );
  const data = await response.json();
  return data;
};
