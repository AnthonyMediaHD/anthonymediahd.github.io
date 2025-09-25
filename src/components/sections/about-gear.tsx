import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Focus, Mic } from "lucide-react";

const cameras = [
  {
    name: "Canon EOS 70D",
    type: "DSLR Camera",
    specs: "20.2MP APS-C CMOS, Dual Pixel CMOS AF",
    description: "Professional-grade DSLR perfect for portraits and events"
  },
  {
    name: "Canon EOS 700D",
    type: "DSLR Camera", 
    specs: "18MP APS-C CMOS, DIGIC 5 Processor",
    description: "Versatile DSLR great for photography and video work"
  },
  {
    name: "Olympus XZ-10",
    type: "Compact Camera",
    specs: "12MP BSI CMOS, f/1.8-2.7 lens",
    description: "Ultra-portable camera for street and travel photography"
  }
];

const lenses = [
  {
    name: "Canon EF-S 18-55mm f/3.5-5.6",
    type: "Standard Zoom",
    description: "Versatile everyday lens perfect for general photography"
  },
  {
    name: "Canon EF-S 55-250mm f/4-5.6",
    type: "Telephoto Zoom", 
    description: "Great for portraits, sports, and wildlife photography"
  },
  {
    name: "Canon EF 50mm f/1.8",
    type: "Prime Lens",
    description: "Fast prime lens ideal for portraits with beautiful bokeh"
  }
];

const audio = [
  {
    name: "Movo Wireless Microphone System",
    type: "Audio Equipment",
    description: "Professional wireless microphones for clear audio recording in videography projects"
  }
];

export const AboutGearSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I specialize in capturing authentic moments that tell compelling stories. My passion lies in 
              event and portrait photography, where I can showcase the unique personality and emotion of my subjects.
            </p>
            <p>
              I believe that great photography comes from understanding both technical excellence and 
              human connection. Whether it's event coverage or portrait sessions, 
              I work closely with my clients to ensure their vision comes to life.
            </p>
          </div>
        </motion.div>

        {/* Gear Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12" id="gear">Professional Equipment</h3>
          
          {/* Cameras */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Camera className="h-6 w-6 text-primary mr-3" />
              <h4 className="text-2xl font-semibold">Cameras</h4>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {cameras.map((camera, index) => (
                <motion.div
                  key={camera.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="gear-card h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{camera.name}</CardTitle>
                        <Badge variant="outline">{camera.type}</Badge>
                      </div>
                      <CardDescription className="text-sm font-mono text-muted-foreground">
                        {camera.specs}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{camera.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Lenses */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Focus className="h-6 w-6 text-primary mr-3" />
              <h4 className="text-2xl font-semibold">Lenses</h4>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {lenses.map((lens, index) => (
                <motion.div
                  key={lens.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="gear-card h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{lens.name}</CardTitle>
                        <Badge variant="secondary">{lens.type}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{lens.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Audio Equipment */}
          <div>
            <div className="flex items-center mb-6">
              <Mic className="h-6 w-6 text-primary mr-3" />
              <h4 className="text-2xl font-semibold">Audio Equipment</h4>
            </div>
            <div className="grid md:grid-cols-1 max-w-2xl mx-auto">
              {audio.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="gear-card">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <Badge variant="default">{item.type}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-8">Services</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              "Portrait Photography",
              "Event Photography"
            ].map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Badge variant="outline" className="text-sm py-2 px-4 w-full justify-center">
                  {service}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};