import { Activity, ArrowUpRight } from 'lucide-react'

interface UsageCardPorps {    
    title: string;
    desc: string;
}

export default function UsageCard({ title, desc }: UsageCardPorps) {
    return (
        <div className="group p-6 bg-white rounded-xl border border-slate-200 hover:shadow-md hover:shadow-gcxPrimary duration-200 h-full flex flex-col justify-between">
            <div>
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3 text-gray-700 group-hover:text-gcxprimary">
                        <Activity size={20} className="" />
                        <span className="font-bold text-lg">{title}</span>
                    </div>
                </div>
                <div className=" text-gray-600">
                    {desc}
                </div>
            </div>
        </div>
    )
}
