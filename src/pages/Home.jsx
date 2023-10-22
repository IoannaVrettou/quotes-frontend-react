import React, { useEffect } from "react";
import {
  getAllQuotes,
  updateQuote,
  getQuoteById,
  createQuote,
  deleteQuote,
} from "../apis";
import QuoteList from "../components/QuoteList";
import Modal from "../components/Modal";
import QuoteForm from "../components/QuoteForm";
import { AiOutlinePlus } from "react-icons/ai";

const Home = () => {
  
  const [quotes, setQuotes] = React.useState([]);
  const [selectedQuote, setSelectedQuote] = React.useState({
    author: "",
    text: "",
  });
  const [isEdit, setIsEdit] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);

  const fetchQuotes = async () => {
    const response = await getAllQuotes();
    setQuotes(response.data);
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const resetState = () => {
    setModalOpen(false);
    setIsEdit(false);
    setSelectedQuote({
      author: "",
      text: "",
    });
  };

  const handleEditQuote = async (quote) => {
    try {
      await updateQuote({ ...quote, id: selectedQuote.id });
      await fetchQuotes();
      resetState();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateQuote = async (quote) => {
    try {
      await createQuote({ ...quote, id: selectedQuote.id });
      await fetchQuotes();
      resetState();
    } catch (error) {
      console.log(error);
    }
  };

  const showEditModal = async (id) => {
    const response = await getQuoteById(id);
    setSelectedQuote(response.data);
    setModalOpen(true);
    setIsEdit(true);
  };

  const closeModal = () => {
    resetState();
  };

  const onDeleteHanlder = async (id) => {
    try {
      await deleteQuote(id);
      await fetchQuotes();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal isOpen={modalOpen} closeModal={closeModal} isEdit={isEdit}>
        <QuoteForm
          isEdit={isEdit}
          selectedQuote={selectedQuote}
          onEditQuote={handleEditQuote}
          onCreateQuote={handleCreateQuote}
          closeModal={closeModal}
        />
      </Modal>
      <div className="container mx-auto mt-10 mb-10">
        <button
          onClick={() => setModalOpen(true)}
          type="button"
          className="py-2.5 px-5 mr-2 mb-4 text-sm font-medium text-indigo-50 focus:outline-none bg-slate-900 rounded-lg border border-slate-800 hover:bg-slate-800 hover:text-indigo-50 focus:z-10 focus:ring-4 focus:ring-gray-200 flex flex-row"
        >
          Create a new quote
          <AiOutlinePlus className="ml-2" size={18} />
        </button>
        <QuoteList
          items={quotes}
          showEditModal={showEditModal}
          handleDelete={onDeleteHanlder}
        />
      </div>
    </>
  );
};

export default Home;
