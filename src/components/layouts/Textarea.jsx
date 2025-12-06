import React from "react";

const Textarea = () => {
  return (
    <div>
      <textarea
        placeholder="Write your message here"
        className="w-full max-w-2xl h-64 mt-4 
             bg-[#0f0f1a]/50 backdrop-blur-sm
             border-2 border-[#00C0FF]/30 
             focus:border-[#00C0FF] focus:outline-none
             rounded-2xl 
             px-6 py-8 
             text-lg text-[#E0E0E0] 
             placeholder:font-semibold placeholder:text-2xl placeholder:text-[#B4AFC6]/70
             resize-none 
             transition-all duration-300 ease-in-out
             shadow-lg shadow-[#00C0FF]/10
             focus:shadow-[#00C0FF]/30
             font-medium
             tracking-wide
             scrollbar-thin scrollbar-thumb-[#00C0FF]/50 scrollbar-track-transparent
             hover:border-[#00C0FF]/60"
      />
    </div>
  );
};

export default Textarea;
