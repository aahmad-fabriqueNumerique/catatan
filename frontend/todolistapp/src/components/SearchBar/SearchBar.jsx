import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";


const SearchBar = ({ value, onChange, handleSearch, onSearchClear }) => {



    return (
        <div className='w-80 flex items-center px-4 bg-slate-100 rounded-md'>
            <input
                type="text"
                placeholder='Rechercher catatans'
                className='w-full text-xs bg-transparent py-[12px] outline-none'
                value={value}
                onChange={onChange}
            />


            {value && (
                <IoCloseCircleOutline
                    onClick={onSearchClear}
                    className='text-xl text-slate-300 cursor-pointer hover:text-slate-500'
                />
            )}
            <FaMagnifyingGlass
                onClick={handleSearch}
                className='text-slate-300 cursor-pointer hover:text-slate-500'
            />
        </div>


    )
}

export default SearchBar