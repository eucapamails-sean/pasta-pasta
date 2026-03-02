import Link from 'next/link'

const MenuItem = ({name, price, desc}: {name: string; price: string; desc?: string}) => (
  <li className="py-4 border-b last:border-b-0">
    <div className="flex justify-between items-baseline">
      <h4 className="text-lg font-semibold">{name}</h4>
      <span className="text-sm text-gray-600">{price}</span>
    </div>
    {desc && <p className="text-sm text-gray-700 mt-1">{desc}</p>}
  </li>
)

export default function Home(){
  return (
    <main className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <h1 className="text-2xl font-bold text-tomato">Pasta Pasta</h1>
          <nav aria-label="Main navigation">
            <ul className="flex gap-4">
              <li><a className="text-sm text-gray-700 hover:text-tomato" href="#menu">Menu</a></li>
              <li><a className="text-sm text-gray-700 hover:text-tomato" href="#about">About</a></li>
              <li><a className="text-sm text-gray-700 hover:text-tomato" href="#visit">Visit</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="container mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-sm uppercase tracking-wide text-gray-600">Handmade pasta • Family friendly</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">Pasta Pasta — A little taste of Italy in Disney World Orlando</h2>
          <p className="mt-4 text-gray-700 max-w-prose">Join us for seasonal, locally-sourced pasta dishes, craft cocktails, and a magical view just steps from Cinderella Castle. Reservations recommended.</p>
          <div className="mt-6 flex gap-3">
            <a href="#visit" className="inline-block bg-tomato text-white px-5 py-3 rounded-md shadow hover:opacity-95">Reserve a Table</a>
            <a href="#menu" className="inline-block border border-gray-300 px-5 py-3 rounded-md text-gray-800">See Menu</a>
          </div>
        </div>
        <div className="image-placeholder rounded-xl h-64 md:h-80 flex items-center justify-center" role="img" aria-label="Bowl of pasta with tomato sauce and basil">
          <svg width="160" height="160" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M12 2v20" stroke="#E63946" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="6" stroke="#2A9D8F" strokeWidth="1.5" />
          </svg>
        </div>
      </section>

      <section id="menu" className="container mt-16">
        <h3 className="text-2xl font-bold">Menu Highlights</h3>
        <p className="text-gray-700 mt-2">Simple, seasonal pasta made fresh daily.</p>
        <ul className="mt-6 bg-white rounded-xl shadow divide-y">
          <MenuItem name="Spaghetti Pomodoro" price="$16" desc="San Marzano tomatoes, basil, pecorino" />
          <MenuItem name="Fettuccine Alfredo" price="$18" desc="Housemade cream, butter, parmesan" />
          <MenuItem name="Gnocchi Sorrentina" price="$19" desc="Potato gnocchi, tomato fondue, mozzarella" />
          <MenuItem name="Kids Mac & Cheese" price="$8" desc="Kid-friendly portion" />
        </ul>
      </section>

      <section id="about" className="container mt-16 bg-white rounded-xl p-6 shadow">
        <div className="md:flex md:gap-8">
          <div className="md:flex-1">
            <h4 className="text-xl font-bold">About Us</h4>
            <p className="mt-2 text-gray-700">Pasta Pasta brings authentic, handmade pasta to the heart of Disney World. Open for lunch and dinner, with options for guests of all ages and dietary needs.</p>
            <ul className="mt-4 text-sm text-gray-700 space-y-2">
              <li>Locally sourced ingredients</li>
              <li>Vegetarian & gluten-friendly options</li>
              <li>Outdoor seating with castle views</li>
            </ul>
          </div>
          <div className="mt-6 md:mt-0 md:w-64 image-placeholder rounded-lg p-6 flex items-center justify-center">
            <p className="text-center text-gray-700">Family dining area</p>
          </div>
        </div>
      </section>

      <section id="visit" className="container mt-16 mb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white rounded-xl p-6 shadow">
          <h4 className="text-xl font-bold">Visit Us</h4>
          <address className="not-italic mt-2 text-gray-700">
            Pasta Pasta<br />
            Main Street, Disney World Orlando<br />
            <br />
            Open: Daily 11:00 AM – 10:00 PM
          </address>
          <p className="mt-4 text-sm text-gray-600">Phone: (407) 555-0123</p>
          <p className="mt-4">Parking and park admission required. Wheelchair accessible seating available.</p>
        </div>
        <aside className="bg-white rounded-xl p-6 shadow">
          <h5 className="font-semibold">Quick info</h5>
          <ul className="text-sm text-gray-700 mt-3 space-y-2">
            <li>Family-friendly</li>
            <li>Reservations recommended</li>
            <li>Nearby restrooms</li>
          </ul>
          <p className="mt-4 text-sm text-gray-500">We welcome guests of all abilities.</p>
        </aside>
      </section>

      <footer className="bg-white border-t py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Pasta Pasta — Disney World Orlando</p>
          <nav aria-label="Footer">
            <ul className="flex gap-4 mt-3 md:mt-0">
              <li><a href="#" className="text-sm text-gray-600">Privacy</a></li>
              <li><a href="#" className="text-sm text-gray-600">Accessibility</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </main>
  )
}
