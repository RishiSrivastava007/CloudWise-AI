function Navbar() {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-8">

      <input
        className="border rounded-lg px-4 py-2 w-80"
        placeholder="Search resources..."
      />

      <div className="font-semibold">
        Rishi
      </div>

    </header>
  );
}

export default Navbar;