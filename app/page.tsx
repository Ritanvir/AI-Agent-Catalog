import fs from 'fs'
import path from 'path'
import AgentCard from '@/components/AgentCard'
import FilterBar from '@/components/FilterBar'
import SearchBar from '@/components/SearchBar'
import { setAgents } from '@/redux/slices/agentSlice'
import { filterAgents } from '@/lib/agents'
import { store } from '@/redux/store'

export default async function HomePage() {
  const filePath = path.join(process.cwd(), 'public', 'mock-agents.json')
  const data = fs.readFileSync(filePath, 'utf8')
  const agents = JSON.parse(data)

  store.dispatch(setAgents(agents))
  const filteredAgents = filterAgents(store.getState())

  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">ArkLab AI Agent Catalog</h1>
      <div className="mb-4">
        <SearchBar />
      </div>
      <div className="mb-6">
        <FilterBar />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredAgents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </main>
  )
}
