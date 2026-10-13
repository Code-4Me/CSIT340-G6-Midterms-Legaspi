function Feature({ title, description, icon }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-xl border-2 border-[#000000] bg-[#EEEEEE] p-6">
      <div className="text-4xl">{icon}</div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
    
  );
}

export default Feature;