import axios from "axios";

const baseUrl = "http://127.0.0.1:3001";

export const getAllQuotes = async () => {
  return await axios.get(`${baseUrl}/api/quotes`);
};

export const getQuoteById = async (id) => {
  return await axios.get(`${baseUrl}/api/quotes/${id}`);
};

export const getRandomQuote = async () => {
  return await axios.get(`${baseUrl}/api/quotes/random`);
};

export const createQuote = async (quote) => {
  return await axios.post(`${baseUrl}/api/quotes`, quote);
};

export const updateQuote = async (quote) => {
  return await axios.put(`${baseUrl}/api/quotes/${quote.id}`, quote);
};

export const deleteQuote = async (id) => {
  return await axios.delete(`${baseUrl}/api/quotes/${id}`);
};
