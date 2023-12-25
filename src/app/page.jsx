import About from "@/components/about/About";
import CardList from "@/components/cardList/CardList";
import Featured from "@/components/featured/Featured";
import Shipping from "@/components/shipping/Shipping";

export default function Home() {
  return (
    <div>
      <Featured />
      <About />
      <CardList title="Popular Shoes" />
      <Shipping />
      <CardList title="new collection 2023" />
    </div>
  );
}
