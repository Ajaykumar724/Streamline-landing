export default function Testimonials() {
  return (
    <section id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">What Our Users Say</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto text-balance">
          Join thousands of teams already using Streamline to manage their projects
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Testimonial 1 */}
        <div className="bg-slate-900 rounded-xl p-8 border border-slate-800">
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400">★</span>
            ))}
          </div>
          <p className="text-slate-300 mb-6 text-balance">
            "Streamline has transformed the way our team manages projects. It's intuitive, powerful, and has saved us countless hours every week."
          </p>
          <div>
            <p className="font-semibold">Sarah Johnson</p>
            <p className="text-slate-400 text-sm">Product Manager, TechCorp</p>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-slate-900 rounded-xl p-8 border border-slate-800">
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400">★</span>
            ))}
          </div>
          <p className="text-slate-300 mb-6 text-balance">
            "The collaboration features are outstanding. Our distributed team feels more connected and productive than ever before."
          </p>
          <div>
            <p className="font-semibold">Michael Chen</p>
            <p className="text-slate-400 text-sm">CEO, Creative Studios</p>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-slate-900 rounded-xl p-8 border border-slate-800">
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400">★</span>
            ))}
          </div>
          <p className="text-slate-300 mb-6 text-balance">
            "The analytics dashboard gives us visibility we never had before. We can now make data-driven decisions about resource allocation."
          </p>
          <div>
            <p className="font-semibold">Emily Rodriguez</p>
            <p className="text-slate-400 text-sm">Operations Director, Innovate Inc</p>
          </div>
        </div>
      </div>
    </section>
  )
}