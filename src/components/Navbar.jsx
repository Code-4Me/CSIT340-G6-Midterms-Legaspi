function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      className="flex items-center justify-between border-b border-[#CB2957] bg-[#000000] px-20 py-6 text-[#EEEEEE]"
    >
      <a href="#top" className="text-3xl font-bold">
        Cloudline
      </a>
      <ul className="flex gap-10 text-xl">
        <li>
          <a href="#plans" className="hover:text-[#CB2957]">
            Product
          </a>
        </li>
        <li>
          <a href="#plans" className="hover:text-[#CB2957]">
            Pricing
          </a>
        </li>
        <li>
          <a href="#support" className="hover:text-[#CB2957]">
            Support
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;