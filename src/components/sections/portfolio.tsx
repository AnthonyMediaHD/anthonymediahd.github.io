import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Video } from "lucide-react";

// Sample portfolio data - in a real app, this would come from a database
const portfolioItems = [
  {
    id: 1,
    title: "Corporate Headshots",
    category: "photography",
    camera: "Canon 70D",
    lens: "50mm f/1.8",
    description: "Professional headshots for business executives",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=face",
  },
  {
    id: 2,
    title: "Wedding Portrait Session",
    category: "photography", 
    camera: "Canon 700D",
    lens: "18-55mm",
    description: "Romantic wedding portraits in natural light",
    imageUrl: "https://images.unsplash.com/photo-1494790108755-2616c0763858?w=600&h=400&fit=crop&crop=face",
  },
  {
    id: 3,
    title: "Fashion Editorial",
    category: "photography",
    camera: "Canon 70D",
    lens: "55-250mm",
    description: "High-fashion editorial photoshoot",
    imageUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=400&fit=crop&crop=face",
  },
  {
    id: 4,
    title: "Corporate Video",
    category: "videography",
    camera: "Canon 70D",
    lens: "18-55mm",
    description: "Corporate promotional video with wireless audio",
    imageUrl: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop&crop=center",
  },
  {
    id: 5,
    title: "Street Photography",
    category: "photography",
    camera: "Olympus XZ-10",
    lens: "Built-in",
    description: "Urban street photography series",
    imageUrl: "https://images.unsplash.com/photo-1521931961826-fe48677230a5?w=600&h=400&fit=crop&crop=center",
  },
  {
    id: 6,
    title: "Music Video Production",
    category: "videography",
    camera: "Canon 700D",
    lens: "50mm f/1.8",
    description: "Cinematic music video with wireless audio recording",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&crop=center",
  },
  {
    id: 7,
    title: "Family Portraits",
    category: "photography",
    camera: "Canon 70D",
    lens: "50mm f/1.8",
    description: "Warm family portrait session outdoors",
    imageUrl: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&h=400&fit=crop&crop=center",
  },
  {
    id: 8,
    title: "Event Documentation", 
    category: "videography",
    camera: "Canon 700D",
    lens: "55-250mm",
    description: "Corporate event coverage with multi-camera setup",
    imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop&crop=center",
  }
];

type FilterType = 'all' | 'photography' | 'videography' | 'Canon 70D' | 'Canon 700D' | 'Olympus XZ-10' | '18-55mm' | '55-250mm' | '50mm f/1.8';

export const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredItems = portfolioItems.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'photography' || activeFilter === 'videography') {
      return item.category === activeFilter;
    }
    return item.camera === activeFilter || item.lens === activeFilter;
  });

  const filters: { label: string; value: FilterType; icon?: any }[] = [
    { label: 'All Work', value: 'all' },
    { label: 'Photography', value: 'photography', icon: Camera },
    { label: 'Videography', value: 'videography', icon: Video },
    { label: 'Canon 70D', value: 'Canon 70D' },
    { label: 'Canon 700D', value: 'Canon 700D' },
    { label: 'Olympus XZ-10', value: 'Olympus XZ-10' },
    { label: '18-55mm', value: '18-55mm' },
    { label: '55-250mm', value: '55-250mm' },
    { label: '50mm f/1.8', value: '50mm f/1.8' },
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my work in photography and videography. Filter by equipment to see what's possible with each camera and lens.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <Button
                key={filter.value}
                variant={activeFilter === filter.value ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.value)}
                className={`filter-button ${activeFilter === filter.value ? 'active' : ''} transition-all duration-300`}
              >
                {Icon && <Icon className="mr-2 h-4 w-4" />}
                {filter.label}
              </Button>
            );
          })}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          layout
          className="photo-grid"
        >
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.4,
                  delay: index * 0.1
                }}
                whileHover={{ y: -8 }}
                className="photo-item group"
              >
                <Card className="overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Overlay Content */}
                    <div className="photo-overlay">
                      <div className="space-y-2">
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <Badge variant="secondary" className="text-xs">
                            {item.camera}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {item.lens}
                          </Badge>
                          <Badge 
                            variant={item.category === 'photography' ? 'default' : 'secondary'} 
                            className="text-xs"
                          >
                            {item.category === 'photography' ? <Camera className="mr-1 h-3 w-3" /> : <Video className="mr-1 h-3 w-3" />}
                            {item.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground text-lg">No items found for this filter.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};