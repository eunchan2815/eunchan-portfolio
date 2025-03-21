import { useRef } from "react";
import B1ND from "./components/B1ND";
import Finder from "./components/Finder";
import Footer from "./components/Footer";
import Introduce from "./components/Introduce";
import Iphone from "./components/Iphone";
import MEMOA from "./components/MEMOA";
import Skool from "./components/Skool";

function App() {
  const introduceRef = useRef<HTMLDivElement>(null);
  const b1ndRef = useRef<HTMLDivElement>(null);
  const memoaRef = useRef<HTMLDivElement>(null);
  const finderRef = useRef<HTMLDivElement>(null);
  const skoolRef = useRef<HTMLDivElement>(null);

  const handleTopIconClick = (name: string) => {
    if (name === "도담도담") {
      b1ndRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (name === "MEMOA") {
      memoaRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (name === "Finder") {
      finderRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (name === "Skool") {
      skoolRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-between p-35">
      <div>
        <div ref={introduceRef}><Introduce /></div>
        <div ref={b1ndRef}><B1ND /></div>
        <div ref={memoaRef}><MEMOA /></div>
        <div ref={finderRef}><Finder /></div>
        <div ref={skoolRef}><Skool /></div>
        <Footer />
      </div>
      <Iphone onTopIconClick={handleTopIconClick} />
    </div>
  );
}

export default App;

