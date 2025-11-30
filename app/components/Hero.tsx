import { TrendingUp } from "lucide-react"

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
      <div className="space-y-6 mb-12">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-balance leading-tight">
          Manage Projects with <span className="text-blue-400">Ease</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto text-balance">
          Streamline your workflow, collaborate seamlessly, and deliver projects on time with our intelligent project management platform.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <button className="px-8 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition">
          Get Started
        </button>
        <button className="px-8 py-3 rounded-lg bg-slate-800 text-white font-semibold hover:bg-slate-700 transition flex items-center gap-2">
          <span>View Demo</span>
        </button>
      </div>

      {/* Dashboard Placeholder */}
      <div className="bg-gradient-to-b from-blue-500/10 to-transparent rounded-xl border border-slate-800 p-8 sm:p-12 md:p-16">
        <div className="bg-slate-900 rounded-lg h-64 sm:h-80 md:h-96 flex items-center justify-center border border-slate-800">
          <div className="text-center">
            <div className="w-24 h-24 bg-slate-800 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <TrendingUp size={48} className="text-slate-600" />
            </div>
            <p className="text-slate-500 font-medium">Dashboard Mockup</p>
          </div>
        </div>
      </div>
    </section>
  )
}