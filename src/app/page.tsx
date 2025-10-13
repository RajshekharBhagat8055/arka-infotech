import Image from "next/image";
import Services from "@/components/services";

export default function Home() {
  return (
    <div>
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">Hello World</h1>
      </div>
      <Services />
    </div>
  );
}
