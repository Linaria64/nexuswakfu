
import { Book, Users, Map, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const FeaturedCard = ({ title, description, icon: Icon, link }: { 
  title: string;
  description: string;
  icon: React.ElementType;
  link: string;
}) => (
  <div className="guide-card p-6">
    <div className="flex items-center mb-4">
      <Icon className="w-6 h-6 text-wakfu-blue mr-3" />
      <h3 className="text-xl font-semibold text-wakfu-dark">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link to={link}>
      <Button variant="outline" className="w-full text-wakfu-blue hover:bg-wakfu-blue hover:text-white">
        Learn More
      </Button>
    </Link>
  </div>
);

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-float">
            Welcome to The Wakfu Scholar
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-pulse-gentle">
            Your ultimate guide to mastering the World of Twelve
          </p>
          <Link to="/classes">
            <Button className="bg-wakfu-gold hover:bg-wakfu-teal text-wakfu-dark font-semibold text-lg px-8 py-3">
              Explore Classes
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Content */}
      <section className="content-section">
        <h2 className="section-title">Featured Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeaturedCard
            title="Class Guides"
            description="Master your favorite class with our comprehensive guides and builds."
            icon={Users}
            link="/classes"
          />
          <FeaturedCard
            title="Dungeon Strategies"
            description="Conquer the most challenging dungeons with our detailed walkthroughs."
            icon={Map}
            link="/dungeons"
          />
          <FeaturedCard
            title="Beginner's Guide"
            description="New to Wakfu? Start here with our beginner-friendly tutorials."
            icon={Book}
            link="/guides"
          />
          <FeaturedCard
            title="Featured Builds"
            description="Explore top-rated builds from the community."
            icon={Star}
            link="/builds"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
