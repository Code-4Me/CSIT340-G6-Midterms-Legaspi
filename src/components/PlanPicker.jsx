import Summary from "./Summary";
import PlanCard from "./PlanCard";

function PlanPicker({ seats, months, onAddSeat, onAddMonth, onReset }) {
	const plans = [
		{ name: "Starter", price: 199, storage: "10 GB", support: "Email support" },
		{ name: "Team", price: 499, storage: "100 GB", support: "Chat support" },
		{ name: "Business", price: 999, storage: "1000 GB", support: "Phone support" },
	];

	return (
		<>
			<div className="flex items-end justify-between bg-[#000000] px-20 py-12 text-[#EEEEEE]">
				<Summary seats={seats} months={months} />






                

				<div className="flex gap-4">
					<button
						className="cursor-pointer rounded-lg bg-[#CB2957] px-8 py-3 text-xl font-bold text-[#EEEEEE]"
						onClick={onAddSeat}
					>
						Add seat
					</button>
					<button
						className="cursor-pointer rounded-lg bg-[#EEEEEE] px-8 py-3 text-xl font-bold text-[#000000]"
						onClick={onAddMonth}
					>
						Add month
					</button>
					<button
						className="cursor-pointer rounded-lg border-2 border-[#EEEEEE] px-8 py-3 text-xl font-bold"
						onClick={onReset}
					>
						Reset
					</button>
				</div>
			</div>

			<main id="plans" className="grid grid-cols-3 gap-8 px-20 pt-10">
				{plans.map((plan) => (
					<PlanCard key={plan.name} {...plan} seats={seats} months={months} />
				))}
			</main>
		</>
	);
}

export default PlanPicker;
