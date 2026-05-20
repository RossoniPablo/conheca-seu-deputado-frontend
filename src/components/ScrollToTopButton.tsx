import { ArrowUpCircle } from "lucide-react";
import { useEffect, useState } from "react";

export const ScrollTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 bg-white/90 hover:bg-white text-black p-3 rounded-full shadow-lg transition-all cursor-pointer"
    >
      <ArrowUpCircle />
    </button>
  );
};