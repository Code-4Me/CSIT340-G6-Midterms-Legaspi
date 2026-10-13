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
          
            Product
          
        
        </li>
        <li>
          
            Pricing
   
        </li>
        <li>
         
            Support

        </li>
      </ul>
    </nav>
  );
}

export default Navbar;