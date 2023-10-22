import React from "react";

const QuoteForm = ({
  isEdit,
  selectedQuote,
  onEditQuote,
  onCreateQuote,
  closeModal,
}) => {
  const [formData, setFormData] = React.useState({
    author: selectedQuote.author,
    text: selectedQuote.text,
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="mt-2">
        <div className="mb-6 mt-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Author
          </label>
          <input
            name="author"
            value={formData.author}
            onChange={handleChanges}
            type="text"
            id="default-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Quote
          </label>
          <input
            name="text"
            type="text"
            value={formData.text}
            onChange={handleChanges}
            id="large-input"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
      <div className="mt-4">
        <button
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={
            isEdit ? () => onEditQuote(formData) : () => onCreateQuote(formData)
          }
        >
          {isEdit ? "Edit" : "Create"}
        </button>
        <button
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ml-4"
          onClick={closeModal}
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default QuoteForm;
