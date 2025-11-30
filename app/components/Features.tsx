import { Users, TrendingUp, Zap } from "lucide-react"

export default function Features() {
  return (
    <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Powerful Features</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto text-balance">
          Everything you need to manage projects efficiently and keep your team aligned
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 hover:border-blue-500/50 transition hover:shadow-lg hover:shadow-blue-500/10">
          <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
            <Users size={28} className="text-blue-400" />
          </div>
          <h3 className="text-xl font-bold mb-3">Real-time Collaboration</h3>
          <p className="text-slate-400">
            Work together seamlessly with instant updates, live cursors, and real-time communication. Keep your team in sync no matter where they are.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 hover:border-blue-500/50 transition hover:shadow-lg hover:shadow-blue-500/10">
          <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
            <TrendingUp size={28} className="text-blue-400" />
          </div>
          <h3 className="text-xl font-bold mb-3">Advanced Analytics</h3>
          <p className="text-slate-400">
            Get deep insights into project progress, team productivity, and resource allocation with comprehensive analytics and reporting tools.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 hover:border-blue-500/50 transition hover:shadow-lg hover:shadow-blue-500/10">
          <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
            <Zap size={28} className="text-blue-400" />
          </div>
          <h3 className="text-xl font-bold mb-3">Automated Workflows</h3>
          <p className="text-slate-400">
            Automate repetitive tasks, streamline processes, and reduce manual work. Focus on what matters most while automation handles the rest.
          </p>
        </div>
      </div>
    </section>
  )
}