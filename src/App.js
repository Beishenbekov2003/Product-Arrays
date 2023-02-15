import "./App.css";
import KidsContent from "./components/categories/KidsContent";
import MaleContent from "./components/categories/ManContent";
import FameleContent from "./components/categories/FamaleContent";
import KappaContent from "./components/Kappa";
import TheNorthFaceContent from "./components/TheNorthFace";
import PumaContent from "./components/Puma";
import ReebokContent from "./components/Reebok";
import LiningContent from "./components/Lining";
import AdidasContent from "./components/Adidas";
import NikeContent from "./components/Nike";

function App() {
  return (
    <div>
      <NikeContent />
      <LiningContent />
      <ReebokContent />
      <PumaContent />
      <TheNorthFaceContent />
      <KappaContent />
      <FameleContent />
      <MaleContent />
      <KidsContent />
      <AdidasContent />
    </div>
  );
}

export default App;
