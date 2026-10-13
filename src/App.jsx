import { useState } from "react";
import Navbar from "./components/Navbar";
import PlanPicker from "./components/PlanPicker";
import Waitlist from "./components/Waitlist";


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
    <div id="top" className="flex min-h-screen flex-col bg-[#DDDDDD] text-[#000000]">
      <Navbar />

      <PlanPicker
        seats={seats}
        months={months}
        onAddSeat={handleAddSeat}
        onAddMonth={handleAddMonth}
        onReset={handleReset}
      />

      <Waitlist />
    </div>
  );
}

export default App;