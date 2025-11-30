import { Check } from "lucide-react"

export default function Pricing() {
  return (
    <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto text-balance">
          Choose the plan that fits your team's needs
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Starter Plan */}
        <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 flex flex-col">
          <h3 className="text-2xl font-bold mb-2">Starter</h3>
          <p className="text-slate-400 mb-6">Perfect for small teams</p>
          <div className="mb-6">
            <span className="text-4xl font-bold">$29</span>
            <span className="text-slate-400">/month</span>
          </div>
          <button className="w-full px-6 py-3 rounded-lg bg-slate-800 text-white font-semibold hover:bg-slate-700 transition mb-8">
            Get Started
          </button>
          <div className="space-y-4 flex-1">
            {["Up to 5 projects", "Basic collaboration", "Email support", "Core features"].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pro Plan */}
        <div className="bg-gradient-to-br from-blue-500/20 to-slate-900 rounded-xl p-8 border-2 border-blue-500 flex flex-col relative">
          <div className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </div>
          <h3 className="text-2xl font-bold mb-2">Pro</h3>
          <p className="text-slate-400 mb-6">Best for growing teams</p>
          <div className="mb-6">
            <span className="text-4xl font-bold">$79</span>
            <span className="text-slate-400">/month</span>
          </div>
          <button className="w-full px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition mb-8">
            Start Free Trial
          </button>
          <div className="space-y-4 flex-1">
            {["Unlimited projects", "Advanced collaboration", "Priority support", "Advanced analytics", "Custom integrations"].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 flex flex-col">
          <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
          <p className="text-slate-400 mb-6">For large organizations</p>
          <div className="mb-6">
            <span className="text-4xl font-bold">Custom</span>
          </div>
          <button className="w-full px-6 py-3 rounded-lg bg-slate-800 text-white font-semibold hover:bg-slate-700 transition mb-8">
            Contact Sales
          </button>
          <div className="space-y-4 flex-1">
            {["Everything in Pro", "Dedicated support", "SSO & security", "Custom SLA", "API access"].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}