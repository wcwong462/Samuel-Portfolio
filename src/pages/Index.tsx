import { useEffect, useState } from "react";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Github, Linkedin, Trophy, Users, Briefcase, GraduationCap, BarChart3, Brain, Mail } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  // Signature interaction: spotlight that follows cursor
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const onContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Thanks!", description: "Message feature coming soon." });
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteNavbar />
      <main className="flex-1">
        {/* Hero */}
        <section id="home" className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 interactive-spotlight"
            style={{ ['--x' as any]: `${pos.x}px`, ['--y' as any]: `${pos.y}px` }}
          />
          <div className="container py-24 md:py-32 relative">
            <div className="max-w-3xl animate-enter">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/30 px-3 py-1 text-xs">
                <span className="h-2 w-2 rounded-full bg-primary" />
                A young guy who loves to improve every day
              </span>
              <h1 className="mt-6 font-display text-4xl md:text-6xl leading-tight">
                Welcome to Samuel's Portfolio
              </h1>
              <p className="mt-4 text-muted-foreground text-lg">
                "It's not about how much you have, it's how you use it."
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects"><Button>Explore Projects</Button></a>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="secondary">Know More</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>About Me</DialogTitle>
                    </DialogHeader>
                    <p>
                      I love fitness training, coding, and trading. Feel free to explore my projects and get in touch :D
                    </p>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="container py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl">About Me</h2>
              <p className="mt-4 text-muted-foreground">
                I am a Year 3 dual-degree student at CityUHK, majoring in Computational Finance and Computer Science with a Minor in Mathematics. I'm interested in quantitative finance, software development, and data analytics. My goal is to leverage technology to solve complex financial problems and create innovative solutions. Feel free to reach out if you want to collaborate or just chat!
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#connect"><Button variant="secondary">Contact Me</Button></a>
              </div>
            </div>
            <Card className="shadow-[var(--shadow-soft)]">
              <CardHeader>
                <CardTitle>Skills & Certifications</CardTitle>
                <CardDescription>Quick snapshot</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Python', 'C++', 'Java', 'Quantitative Method', 'Derivative', 'Trading Strategy', 'Machine Learning', 'Data Analytics', 'Data Visualization', ,'Portfolio Mangement', 'Matlab', 'React', 'R', 'VBA'
                  ].map(s => (<Badge key={s} variant="secondary">{s}</Badge>))}
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm"><GraduationCap className="h-4 w-4"/>  Citi Markets Quantitative Analysis (Vitual Internship)</div>
                  <div className="flex items-center gap-2 text-sm"><GraduationCap className="h-4 w-4"/>  Bloomberg Market Concept & Bloomberg ESG (2024) </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Activities */}
        <section id="activities" className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl md:text-4xl">Extracurricular Activity</h2>
              <p className="mt-3 text-muted-foreground">
                I actively broaden my horizons and network with others through case competitions, leadership roles, and workshops, Including: <br />1. Palsi Leader (Tutor of Calculus Study Group)<br />2. Student Mentor, Department of Computer Science (2024–Present) <br />3. Deloitte Club Ushine Case Competition (May 2024–Jul 2024) <br />4. HSBC Global Private Banking Case Challenge 2024
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="mt-6">Know More</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Activities Details</DialogTitle>
                  </DialogHeader>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Palse Leader (Tutor of Calculus Study Group)</li>
                    <li>Student Mentor, Department of Computer Science (2024–Present)</li>
                    <li>Deloitte Club Ushine Case Competition (May 2024–Jul 2024)</li>
                    <li>HSBC Global Private Banking Case Challenge 2024</li>
                  </ul>
                </DialogContent>
              </Dialog>
            </div>

            <div className="mt-10">
              <Carousel>
                <CarouselContent>
                  {[
                    { icon: <Trophy className="h-10 w-10"/>, title: 'Case Competitions' },
                    { icon: <Users className="h-10 w-10"/>, title: 'Mentorship' },
                    { icon: <Brain className="h-10 w-10"/>, title: 'Workshops' },
                    { icon: <BarChart3 className="h-10 w-10"/>, title: 'Finance & Markets' },
                  ].map((item, i) => (
                    <CarouselItem key={i} className="basis-1/2 md:basis-1/4">
                      <Card className="hover-scale h-full">
                        <CardContent className="flex h-36 flex-col items-center justify-center gap-3">
                          {item.icon}
                          <span className="text-sm">{item.title}</span>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="container py-16">
          <h2 className="font-display text-3xl md:text-4xl">Experience</h2>
          <Accordion type="single" collapsible className="mt-6">
            <AccordionItem value="oakcean">
              <AccordionTrigger>Oakcean Capital, Quantitative Strategist Intern (Aug 2025–Sep 2025)</AccordionTrigger>
              <AccordionContent>
                - Developed a statistical arbitrage strategy utilizing over 10 years of datasets from the Shanghai Stock Exchange (SSE) to identify trading opportunities using Python. <br /> - Automated data processing workflows by leveraging MongoDB for efficient data management and retrieval. <br /> - Implemented the Power Method algorithm in C++ to enhance computational efficiency and improve Singular Value Decomposition (SVD) model performance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="snapfeedback">
              <AccordionTrigger>SnapFeedback Limited, Full Stack Developer Intern (Jun 2025–Aug 2025)</AccordionTrigger>
              <AccordionContent>
                - Tested 6+ deep learning models for real-time computer vision and NLP projects, proposing plugins using Python, PyTorch, and Scikit-learn. <br /> - Developed a full-stack web application using React, Python, FastAPI, and Supabase, contributing to the entire development lifecycle.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="mt-6">
            <a href="#connect"><Button variant="secondary">Contact me for opportunities</Button></a>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="font-display text-3xl md:text-4xl">Projects</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle>Interactive Option Pricing & Greeks Analysis Tool</CardTitle>
                  <CardDescription>Jul 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Streamlit and SciPy-based web application for Black-Scholes Model and Greeks analysis, featuring 4+ dynamic heatmaps to visualize market volatility and spot price relationships.</p>
                  <div className="mt-4">
                    <a href="https://github.com/wcwong462/Interactive-Option-Pricing-Model-With-Heatmap-Analysis" target="_blank" rel="noopener noreferrer">
                      <Button variant="secondary">View on GitHub</Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle>Portfolio Optimisation Tool</CardTitle>
                  <CardDescription>Jan 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Python-based tool maximizing Sharpe ratios for ETF and equity portfolios, leveraging pandas, NumPy, SciPy, yfinance, and FredAPI for advanced financial modeling.</p>
                  <div className="mt-4">
                    <a href="https://github.com/wcwong462/Python-Portfolio-Optimization-Project" target="_blank" rel="noopener noreferrer">
                      <Button variant="secondary">View on GitHub</Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills & Certifications */}
        <section id="skills" className="container py-16">
          <Tabs defaultValue="skills">
            <TabsList>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="certs">Certifications</TabsTrigger>
            </TabsList>
            <TabsContent value="skills" className="mt-6">
              <div className="flex flex-wrap gap-2">
                {[
                  'Python','Flask','FastAPI','Java','C++','JavaScript','React','Tailwind CSS','MongoDB','SQL','R','Matlab','Data Analytics'
                ].map(s => (<Badge key={s} variant="secondary">{s}</Badge>))}
              </div>
            </TabsContent>
            <TabsContent value="certs" className="mt-6">
              <ul className="list-disc pl-5 space-y-2">
                <li>Bloomberg Market Concept & Bloomberg ESG (2024)</li>
                <li>Fintech Trailblazers: Blockchain, DeFi, Cryptocurrency (2024)</li>
              </ul>
            </TabsContent>
          </Tabs>
        </section>

        {/* Other Platforms */}
        <section id="connect" className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="font-display text-3xl md:text-4xl">Other Platforms</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Linkedin className="h-5 w-5"/> LinkedIn</CardTitle>
                  <CardDescription>Connect with me to see my professional journey and network!</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="https://www.linkedin.com/in/samuelwong1114/" target="_blank" rel="noreferrer">
                    <Button>Visit LinkedIn</Button>
                  </a>
                </CardContent>
              </Card>
              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Github className="h-5 w-5"/> GitHub</CardTitle>
                  <CardDescription>Check out my academic and personal projects, including my option pricing tool and portfolio optimization code!</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="https://github.com/wcwong462" target="_blank" rel="noreferrer">
                    <Button>Visit GitHub</Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="container py-16">
          <h2 className="font-display text-3xl md:text-4xl">Get in touch</h2>
          <form onSubmit={onContactSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
            <Input placeholder="Your name" required />
            <Input type="email" placeholder="Email" required />
            <Textarea className="sm:col-span-2" placeholder="Message" required />
            <div className="sm:col-span-2 flex gap-3">
              <Button type="submit">Send</Button>
              <a href="mailto:wcwong462.samuel@gmail.com" className="inline-flex"><Button type="button" variant="secondary"><Mail className="mr-2 h-4 w-4"/>Email</Button></a>
            </div>
          </form>
        </section>
  </main>
  <SiteFooter />

      <footer className="border-t">
        <div className="container py-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Finance-Tech Portfolio. Built with React & Tailwind.
        </div>
      </footer>
    </div>
  );
};

export default Index;
