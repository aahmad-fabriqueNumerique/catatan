import React from "react";
import { MdOutlinePushPin } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit3 } from "react-icons/fi";

const NoteCard = ({
    title,
    date,
    description,
    tags,
    isPinned,
    onEdit,
    onDelete,
    onPinNote,
}) => {
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow ease-in-out duration-300">
            <div className="w-full flex justify-between">
                <div>
                    <a href="#">
                        <h5 className=" text-xl font-bold tracking-tight text-slate-600 dark:text-white">
                            {title}
                        </h5>
                    </a>
                    <span className="text-xs text-slate-500">{date} </span>
                </div>
                <div>
                    <MdOutlinePushPin
                        className={`icon-btn ${isPinned} ? 'text-primary' :  'text-slate-400'`}
                        onClick={onPinNote}
                    />
                </div>
            </div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {description}
            </p>

            <div className="w-full flex justify-start mb-2">

                <span className="bg-slate-100 text-slate-800 text-xs font-medium  px-2 py-1 rounded ">
                    {tags}
                </span>

            </div>

            <div className="w-full flex justify-around items-center ">
                <div className="w-full flex justify-start">
                    <a
                        href="#"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Lire plus
                    </a>
                </div>

                <div className="w-full flex justify-end gap-1 ">
                    <div className="flex items-center bg-gray-100 text-gray-800 text-md  px-3 py-2 rounded cursor-pointer hover:bg-green-500">
                        <FiEdit3 onClick={onEdit} />
                    </div>
                    <div className="flex items-center  bg-gray-100 text-gray-800 text-md px-3 py-2 rounded cursor-pointer hover:bg-red-500">
                        <AiOutlineDelete onClick={onDelete} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NoteCard;
