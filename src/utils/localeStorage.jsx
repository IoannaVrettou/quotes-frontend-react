export const getDailyQuote = () => {
  const storedQuote = localStorage.getItem("dailyQuote");
  return storedQuote ? JSON.parse(storedQuote) : null;
};

export const setDailyQuote = (quote) => {
  localStorage.setItem("dailyQuote", JSON.stringify(quote));
};
