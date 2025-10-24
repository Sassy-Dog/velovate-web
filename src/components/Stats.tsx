export function Stats() {
  const stats = [
    { id: 1, name: 'Cyclists Connected', value: '10,000+' },
    { id: 2, name: 'Miles Tracked', value: '5M+' },
    { id: 3, name: 'Funds Raised', value: '$2M+' },
    { id: 4, name: 'Active Teams', value: '500+' },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Making an Impact Together
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Our community of cyclists is growing every day, tracking miles and raising funds for causes that matter.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-white p-8 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-coral-50 transition-all duration-300 shadow-sm hover:shadow-lg">
                <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight bg-gradient-to-r from-cyan-600 to-coral-600 bg-clip-text text-transparent">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
