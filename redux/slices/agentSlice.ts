import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Agent = {
  id: string
  name: string
  description: string
  status: string
  category: string
  pricingModel: string
}

type FilterState = {
  search: string
  status: string[]
  category: string[]
  pricingModel: string
}

interface AgentState {
  agents: Agent[]
  filters: FilterState
}

const initialState: AgentState = {
  agents: [],
  filters: {
    search: '',
    status: [],
    category: [],
    pricingModel: '',
  },
}

const agentSlice = createSlice({
  name: 'agents',
  initialState,
  reducers: {
    setAgents: (state, action: PayloadAction<Agent[]>) => {
      state.agents = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.filters.search = action.payload
    },
    toggleStatus: (state, action: PayloadAction<string>) => {
      const index = state.filters.status.indexOf(action.payload)
      if (index > -1) {
        state.filters.status.splice(index, 1)
      } else {
        state.filters.status.push(action.payload)
      }
    },
    toggleCategory: (state, action: PayloadAction<string>) => {
      const index = state.filters.category.indexOf(action.payload)
      if (index > -1) {
        state.filters.category.splice(index, 1)
      } else {
        state.filters.category.push(action.payload)
      }
    },
    setPricingModel: (state, action: PayloadAction<string>) => {
      state.filters.pricingModel = action.payload
    },
    clearFilters: (state) => {
      state.filters = {
        search: '',
        status: [],
        category: [],
        pricingModel: '',
      }
    },
  },
})

export const {
  setAgents,
  setSearch,
  toggleStatus,
  toggleCategory,
  setPricingModel,
  clearFilters,
} = agentSlice.actions

export default agentSlice.reducer
