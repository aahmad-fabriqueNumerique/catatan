import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/Cards/NoteCard";
import { IoMdAdd } from "react-icons/io";
import AddEditNote from "./AddEditNote";
import Modal from 'react-modal';

const Home = () => {

const [openAddEditModal, setopenAddEditModal] = useState({
  isShown: false,
  type: "add",
  data: null,
})




  return (
    <>
      <Navbar />
      <div className="w-full justify-start items-center">
        <h1> Mes Catatans</h1>
      </div>
      <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4 mt-8"> 
        <NoteCard
          title="first note"
          description="first note to test on this application"
          date="05-12-2024"
          tags="#test"
          isPinned={false}
          onDelete={() => {}}
          onEdit={() => {}}
          onPinNote={() => {}}

        />
      </div>
      </div>

      <button className="w-16 h-16 flex items-center justify-center rounded-xl bg-slate-500 hover:bg-slate-900 transition-colors ease-in-out absolute right-10 bottom-10"
        onClick={() => {
          setopenAddEditModal({isShown: true, type: "add", data: null})
        }}
      >
        <IoMdAdd className="text-[32px] text-white"/>
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {

        }}
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2"
          }
        }}
        contentLabel=""
        className="w-[50%] max-h-3/4 bg-slate-50 rounded-md mx-auto mt-14 p-5 "
      >

          <AddEditNote  
            type={openAddEditModal.type}
            data={openAddEditModal.data}
            onClose={() => {
              setopenAddEditModal({isShown: false, type: "add", data: null})
            }}
          />
      </Modal>
    </>
  );
};

export default Home;
