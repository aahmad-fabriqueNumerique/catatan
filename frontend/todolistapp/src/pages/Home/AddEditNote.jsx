import React, { useState } from "react";
import TagInput from "../../components/Input/TagInput";
import { MdClose } from "react-icons/md";

const AddEditNote = ({onClose}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);

  const [error, setError] = useState(null)

  // Add New Note
  const addNewNote = async () => {

  }
// Edit Note
  const editNote = async () => {
    
  }

  const handleAddNote = () => {
    if(!title) {
        setError('Ajouter un titre à votre note');
        return
    }
    if(!description) {
        setError('Ajouter une description à votre note');
        return
    }
    setError("")

    if(type === 'edit') {
        editNote()
    } else {
        addNewNote()
    }
 
  }

  return (
    <div className="relative pt-3">


    <button className="w-10 h-10 rounded-full flex items-center justify-center -top-3 -right-3 absolute " onClick={onClose}>
        <MdClose className="text-xl text-slate-300 hover:text-slate-600"/>
    </button>


      <div className="flex flex-col gap-2">
        <label className="input-label">Title</label>
        <input
          type="text"
          className="text-md text-slate-900 border p-1 border-slate-200 bg-slate-50"
          placeholder="Faire une pizza"
          value={title}
          onChange={({target}) => setTitle(target.value)}
        />
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <label className="input-label">Description</label>
        <textarea
          type="text"
          className="text-sm text-slate-600 border border-slate-200 bg-slate-50 p-2 rounded"
          placeholder="Décrire ce que tu veux faire"
          rows={6}
          value={description}
          onChange={({target}) => setDescription(target.value)}
        />
      </div>

      <div>
        <label className="input-label">Tags</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>

      {error && <p className="text-red-500 text-xs my-3">{error}</p> }

      <button className="btn-primary font-medium mt-5 p-3" onClick={handleAddNote}>
        Ajouter
      </button>
    </div>
  );
};

export default AddEditNote;
