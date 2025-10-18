import { motion } from 'framer-motion'

export default function Donate() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold">Donate</h2>
      <p className="mt-4 text-gray-700">Your contribution supports treatment, awareness, and families.</p>

      <form className="mt-8 grid gap-4">
        <div>
          <label className="block text-sm font-medium">Amount (USD)</label>
          <input className="mt-1 w-full border rounded-xl px-3 py-2" type="number" placeholder="50" />
        </div>
        <div>
          <label className="block text-sm font-medium">Message (optional)</label>
          <textarea className="mt-1 w-full border rounded-xl px-3 py-2" rows={4} placeholder="With love and support" />
        </div>
        <div className="flex gap-3">
          <motion.button whileHover={{scale:1.04}} type="button" className="bg-brand text-white px-5 py-2 rounded-full">Stripe (placeholder)</motion.button>
          <motion.button whileHover={{scale:1.04}} type="button" className="border border-brand text-brand px-5 py-2 rounded-full">PayPal (placeholder)</motion.button>
        </div>
      </form>
    </div>
  )
}



