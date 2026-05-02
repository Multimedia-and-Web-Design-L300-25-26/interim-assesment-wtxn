import { Link } from "wouter";
import learnCardsImg from "@assets/image_1777731696625.png";

export function LearnSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <img
          src={learnCardsImg}
          alt="Explore crypto and learn the basics"
          className="w-full h-auto rounded-2xl"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-0 -mt-2">
          <Link href="/explore">
            <div className="invisible h-0" />
          </Link>
        </div>
      </div>
    </section>
  );
}
