const TestimonialCard = ({ item } : any) => (
  <div className="w-[350px] p-8 rounded-3xl border-2 border-dashed border-gray-100 bg-white hover:border-gcxprimary transition-colors">
    <img src={item.logo} alt="logo" className="h-8 mb-6 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
    <h4 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h4>
    <p className="text-gray-500 text-sm leading-relaxed italic">"{item.description}"</p>
  </div>
);