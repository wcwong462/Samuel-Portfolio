import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users } from "lucide-react";

import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

const Activities: React.FC = () => (
  <div className="min-h-screen bg-background text-foreground flex flex-col">
    <SiteNavbar />
    <section className="container py-16 flex-1">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl md:text-4xl">Extracurricular Activity</h2>
        <Card className="mt-6 shadow-[var(--shadow-soft)]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Users className="h-5 w-5"/> Activities</CardTitle>
            <CardDescription>Leadership, competitions, and more</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Palsi Leader (Tutor of Calculus Study Group)</li>
              <li>Student Mentor, Department of Computer Science (2024–Present)</li>
              <li>Deloitte Club Ushine Case Competition (May 2024–Jul 2024)</li>
              <li>HSBC Global Private Banking Case Challenge 2024</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
    <SiteFooter />
  </div>
);

export default Activities;
