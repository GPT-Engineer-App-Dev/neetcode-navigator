import { useState } from 'react';
import { Rocket, Moon, Sun } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

const Index = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-background text-foreground">
        <header className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Rocket className="h-8 w-8 text-primary" />
              <a href="#" className="text-lg font-semibold">NeetCode</a>
            </div>
            <div className="hidden md:flex space-x-4">
              <a href="#" className="hover:text-primary">Courses</a>
              <a href="#" className="hover:text-primary">Practice</a>
              <a href="#" className="hover:text-primary">Roadmap</a>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="bg-green-500 text-white hover:bg-green-600">Pro</Button>
              <Button variant="ghost">Sign in</Button>
              <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
              {darkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </div>
          </nav>
        </header>

        <main className="container mx-auto px-4 py-8">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">NeetCode</h1>
            <p className="text-xl mb-8">A better way to prepare for coding interviews</p>
            <Button className="bg-green-500 text-white hover:bg-green-600">Get Pro</Button>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center">Interview Preparation Roadmap</h2>
            <div className="flex justify-center">
              <FlowChart />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

const FlowChart = () => {
  return (
    <div className="relative w-full max-w-3xl h-[600px]">
      <Node text="Arrays & Hashing" x="50%" y="10%" />
      <Node text="Two Pointers" x="30%" y="30%" />
      <Node text="Stack" x="70%" y="30%" />
      <Node text="Sliding Window" x="20%" y="50%" />
      <Node text="Linked List" x="40%" y="50%" />
      <Node text="Binary Search" x="60%" y="50%" />
      <Node text="Trees" x="50%" y="70%" />
      <Node text="Tries" x="30%" y="90%" />
      <Node text="Heap / Priority Queue" x="50%" y="90%" />
      <Node text="Backtracking" x="70%" y="90%" />
      <Connections />
    </div>
  );
};

const Node = ({ text, x, y }) => {
  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground rounded-lg p-2 text-sm"
      style={{ left: x, top: y }}
    >
      {text}
    </div>
  );
};

const Connections = () => {
  return (
    <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
      <line x1="50%" y1="15%" x2="30%" y2="28%" stroke="currentColor" />
      <line x1="50%" y1="15%" x2="70%" y2="28%" stroke="currentColor" />
      <line x1="30%" y1="35%" x2="20%" y2="48%" stroke="currentColor" />
      <line x1="30%" y1="35%" x2="40%" y2="48%" stroke="currentColor" />
      <line x1="70%" y1="35%" x2="60%" y2="48%" stroke="currentColor" />
      <line x1="40%" y1="55%" x2="50%" y2="68%" stroke="currentColor" />
      <line x1="60%" y1="55%" x2="50%" y2="68%" stroke="currentColor" />
      <line x1="50%" y1="75%" x2="30%" y2="88%" stroke="currentColor" />
      <line x1="50%" y1="75%" x2="50%" y2="88%" stroke="currentColor" />
      <line x1="50%" y1="75%" x2="70%" y2="88%" stroke="currentColor" />
    </svg>
  );
};

export default Index;
