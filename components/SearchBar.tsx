'use client'

import { useDispatch } from 'react-redux'
import { setSearch } from '@/redux/slices/agentSlice'

export default function SearchBar() {
  const dispatch = useDispatch()

  return (
    <input
      type="text"
      placeholder="Search agents..."
      onChange={(e) => dispatch(setSearch(e.target.value))}
      className="w-full p-2 border rounded-lg shadow-sm"
    />
  )
}
