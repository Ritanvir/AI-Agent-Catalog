'use client'

import { motion } from 'framer-motion'

interface Agent {
  id: string
  name: string
  description: string
  status: string
  category: string
  pricingModel: string
}

export default function AgentCard({ agent }: { agent: Agent }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-2xl shadow p-4 border hover:border-primary transition"
    >
      <div className="text-xl font-semibold">{agent.name}</div>
      <p className="text-gray-500 text-sm mb-2">{agent.description}</p>
      <div className="text-xs mb-1">
        <span className="font-bold">Status:</span> {agent.status}
      </div>
      <div className="text-xs mb-1">
        <span className="font-bold">Category:</span> {agent.category}
      </div>
      <div className="text-xs">
        <span className="font-bold">Pricing:</span> {agent.pricingModel}
      </div>
    </motion.div>
  )
}
