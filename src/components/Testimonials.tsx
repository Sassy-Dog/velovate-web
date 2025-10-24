const testimonials = [
  {
    body: 'Velovate has completely transformed how our cycling team organizes rides and fundraisers. The platform is intuitive and our fundraising has increased by 200%.',
    author: {
      name: 'Sarah Johnson',
      handle: '@sarahrides',
      role: 'Team Captain, Bay Area Cyclists',
    },
  },
  {
    body: 'As a solo rider, I love being able to track my progress and connect with local teams. The GPS tracking and safety features give me peace of mind on every ride.',
    author: {
      name: 'Michael Chen',
      handle: '@mikerides',
      role: 'Recreational Cyclist',
    },
  },
  {
    body: 'Our charity raised over $50,000 using Velovate\'s fundraising tools. The silent auction feature was a game-changer for our annual event.',
    author: {
      name: 'Emily Rodriguez',
      handle: '@emilynonprofit',
      role: 'Director, Pedal for Hope',
    },
  },
];

export function Testimonials() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight bg-gradient-to-r from-cyan-500 to-coral-500 bg-clip-text text-transparent uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Loved by cyclists everywhere
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-3">
          {testimonials.map((testimonial, testimonialIdx) => (
            <figure
              key={testimonialIdx}
              className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100 hover:ring-cyan-200 hover:shadow-xl transition-all duration-300"
            >
              <blockquote className="text-gray-900">
                <p>{`"${testimonial.body}"`}</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 text-white font-semibold shadow-md">
                  {testimonial.author.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author.name}</div>
                  <div className="text-gray-600">{testimonial.author.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
