import React, { useState } from 'react'
import ProfileInfo from '../Cards/ProfileInfo'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'

const Navbar = () => {
  const [searchQuery, setSearchQuery ] = useState("")


  const navigate = useNavigate

  const onLogout = () => {
    navigate("/login")
  }

  const handleSearch = () => {

  }

  const onSearchClear = () => {
    setSearchQuery("")
  }

  return (

    <div className="bg-white flex items-center justify-between px-6 py-4 drop-shadow-sm">
      <h2 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CATATAN</h2>

      <SearchBar 
        value={searchQuery}
        onChange={({target}) => {
          setSearchQuery(target.value)
        }}
        handleSearch={handleSearch}
        onSearchClear={onSearchClear}
      />
      <ProfileInfo onLogout={onLogout} />
    </div>


  )
}

export default Navbar