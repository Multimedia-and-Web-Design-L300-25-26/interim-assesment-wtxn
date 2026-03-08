import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLocation } from "wouter";

export default function Placeholder() {
  const [location] = useLocation();
  const pageName = location.replace('/', '') || 'Page';
  const capitalizedTitle = pageName.charAt(0).toUpperCase() + pageName.slice(1);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 flex items-center justify-center pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white p-12 rounded-3xl shadow-soft border border-border">
            <h1 className="text-4xl font-extrabold text-foreground mb-4">{capitalizedTitle}</h1>
            <p className="text-lg text-muted-foreground mb-8">
              This is a beautiful placeholder page for the {capitalizedTitle} route. 
              In a real application, this would contain fully functional components and actual data.
            </p>
            <div className="h-48 w-full bg-blue-50/50 rounded-xl flex items-center justify-center border-2 border-dashed border-primary/20">
              <span className="text-primary font-semibold">Development Area</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
