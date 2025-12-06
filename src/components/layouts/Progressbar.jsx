// components/ProgressWithPercentage.jsx
import { Progress } from "@/components/ui/progress"
 function Progressbar({ value = 0 }) {
  return (
    <div className="relative w-[605px] mx-auto py-6">
      <Progress
        value={value}
        className="h-2 bg-white rounded-full border [&>div]:bg-primary"
     
      />
      <div
        className="absolute top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-1000"
        style={{ left: `${value}%`, transform: "translateX(-50%) translateY(-50%)" }}
      >
        <div className="relative">
          <div className="w-10 h-10 bg-[rgb(0,192,255)] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-2xl border-4 border-white">
            {value}<span className="text-sm">%</span>
          </div>
          <div className="absolute inset-0 rounded-full bg-[rgb(0,192,255)] opacity-40 scale-150 animate-ping" />
        </div>
      </div>
    </div>
  )
}

export default Progressbar;