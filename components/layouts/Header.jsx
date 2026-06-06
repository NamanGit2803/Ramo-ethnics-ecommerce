import OfferBanner from "./OfferBanner";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      <OfferBanner />
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
    </>
  );
}