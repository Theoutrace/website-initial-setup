import { Button } from "@/components/ui/button";
import { CheckCircle, Rocket, Code2, Palette } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Modern Stack",
      description: "Next.js 14, React 18, Tailwind CSS, and Redux Toolkit"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Beautiful UI",
      description: "shadcn/ui components with dark/light mode support"
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Production Ready",
      description: "Error boundaries, loading states, and SEO optimization"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Best Practices",
      description: "TypeScript support, ESLint, Prettier, and clean architecture"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-16">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Modern Next.js Template
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A production-ready template with modern tooling, best practices, and comprehensive features for rapid application development.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              View GitHub
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Built with Modern Technologies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              This template includes everything you need to build scalable, maintainable web applications.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              "Next.js 14", "React 18", "Tailwind CSS", "Redux Toolkit", 
              "shadcn/ui", "Radix UI", "Lucide Icons", "TypeScript"
            ].map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 bg-muted rounded-full border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}