import React from 'react'
import { getInitials } from '../../utils/helper'

const ProfileInfo = ({onLogout}) => {
  return (
    <div className='flex items-center gap-3'>
        <div className='w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-500'>
            {getInitials("Alaa AAMAD")}
        </div>
        <div>
            <p className='text-sm font-medium'> Clementine </p>
            <button className='text-sm text-slate-400 underline' onClick={onLogout}>
                Déconnexion
            </button>
        </div>
    </div>
  )
}

export default ProfileInfo