'use client'

import {
  toggleStatus,
  toggleCategory,
  setPricingModel,
  clearFilters,
} from '@/redux/slices/agentSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

const statuses = ['Active', 'Beta', 'Archived']
const categories = ['Customer Service', 'Marketing', 'Development', 'Operations', 'Data Analysis']
const pricingModels = ['Free Tier', 'Subscription', 'Per-Use']

export default function FilterBar() {
  const dispatch = useDispatch()
  const filters = useSelector((state: RootState) => state.agents.filters)

  return (
    <div className="space-y-2">
      <div>
        <label>Status:</label>
        <div className="flex gap-2 flex-wrap">
          {statuses.map((status) => (
            <button
              key={status}
              onClick={() => dispatch(toggleStatus(status))}
              className={`px-2 py-1 text-sm border rounded ${
                filters.status.includes(status) ? 'bg-blue-100' : ''
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label>Category:</label>
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => dispatch(toggleCategory(cat))}
              className={`px-2 py-1 text-sm border rounded ${
                filters.category.includes(cat) ? 'bg-green-100' : ''
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label>Pricing:</label>
        <select
          onChange={(e) => dispatch(setPricingModel(e.target.value))}
          value={filters.pricingModel}
          className="p-2 border rounded"
        >
          <option value="">All</option>
          {pricingModels.map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>
      </div>
      <button
        className="px-4 py-1 bg-red-100 border rounded text-sm"
        onClick={() => dispatch(clearFilters())}
      >
        Clear All Filters
      </button>
    </div>
  )
}
