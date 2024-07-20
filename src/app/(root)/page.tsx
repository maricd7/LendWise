import { Recommended } from "../components";
import Hero from "../components/Hero/Hero";

export default async function Home() {
  return (
    <div>
      <Hero />
      <Recommended />
    </div>
  );
}
