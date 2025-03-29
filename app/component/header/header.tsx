export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center px-5 shadow">
        <h1 className="text-3xl font-bold">BISHOPI</h1>
        <nav className="p-5">
          <ul className="flex gap-6.5">
            <li>Feature + </li>
            <li>Domains</li>
            <li>Pricing</li>
            <li>Contact</li>
            <li>Resources +</li>
          </ul>
        </nav>

        <div className="text-sm font-medium flex gap-1.5">
          <button className="bg-gray-400/30 py-2 px-5 rounded">login</button>
          <button className="bg-amber-400/50 py-2 px-5 rounded">Get Started</button>
        </div>
      </header>
    </>
  );
}
