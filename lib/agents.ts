import { RootState } from '@/redux/store'

export const filterAgents = (state: RootState) => {
  const { agents, filters } = state.agents

  return agents.filter((agent) => {
    const matchesSearch =
      agent.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      agent.description.toLowerCase().includes(filters.search.toLowerCase())

    const matchesStatus =
      filters.status.length === 0 || filters.status.includes(agent.status)

    const matchesCategory =
      filters.category.length === 0 || filters.category.includes(agent.category)

    const matchesPricing =
      filters.pricingModel === '' || agent.pricingModel === filters.pricingModel

    return matchesSearch && matchesStatus && matchesCategory && matchesPricing
  })
}
