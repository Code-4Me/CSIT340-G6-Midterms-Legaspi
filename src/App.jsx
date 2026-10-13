import { useState } from "react";
import PlanPicker from "./components/PlanPicker";

function App() {
  const [seats, setSeats] = useState(1);
  const [months, setMonths] = useState(1);

  function handleAddSeat() {
    setSeats(seats + 1);
  }

  function handleAddMonth() {
    setMonths(months + 1);
  }

  function handleReset() {
    setSeats(1);
    setMonths(1);
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#DDDDDD] text-[#000000]">
      <nav className="flex items-center justify-between border-b border-[#CB2957] bg-[#000000] px-20 py-6 text-[#EEEEEE]">
        <h1 className="text-3xl font-bold">Cloudline</h1>
        <ul className="flex gap-10 text-xl">
          <li>Product</li>
          <li>Pricing</li>
          <li>Support</li>
        </ul>
      </nav>

      <PlanPicker
        seats={seats}
        months={months}
        onAddSeat={handleAddSeat}
        onAddMonth={handleAddMonth}
        onReset={handleReset}
      />
      
    </div>
  );
}

export default App;