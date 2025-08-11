import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users } from "lucide-react";

const activityImages = {
};

import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

const Activities: React.FC = () => (
  <div className="min-h-screen bg-background text-foreground flex flex-col">
    <SiteNavbar />
    <section className="container py-16 flex-1">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl mb-6">Extracurricular Activity</h2>
        <div className="space-y-6">
          <Card className="shadow-[var(--shadow-soft)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl"><Users className="h-5 w-5"/> Student Mentor</CardTitle>
              <CardDescription className="flex flex-col md:flex-row md:items-center md:justify-between">
                <span>Department of Computer Science</span>
                <span className="text-xs md:text-sm text-muted-foreground">Aug 2024 - Jun 2025</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                <li>Guided new students in academic and career planning.</li>
                <li>Organized orientation events and peer support activities.</li>
              </ul>
            </CardContent>
          </Card>
           <Card className="shadow-[var(--shadow-soft)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl"><Users className="h-5 w-5"/>Professtional Mentorship Programme</CardTitle>
              <CardDescription className="flex flex-col md:flex-row md:items-center md:justify-between">
                <span>Mentee</span>
                <span className="text-xs md:text-sm text-muted-foreground">Aug 2024 - Aug 2025</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                <li>Obtain guidance for future career development</li>
                <li>Understand IT working environment</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-[var(--shadow-soft)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl"><Users className="h-5 w-5"/> HSBC Global Private Banking Case Challenge</CardTitle>
              <CardDescription className="flex flex-col md:flex-row md:items-center md:justify-between">
                <span>Participant</span>
                <span className="text-xs md:text-sm text-muted-foreground">Sep 2024</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                <li>Constructed multi-asset portfolios optimising ESG mandates, risk parameters, and income objectives by analysing 10
securities across multiple asset classes, including fixed income, equities, and thematic investments</li>
                <li>Delivered strategic recommendations with a special focus on investment management, portfolio diversification, risk
management and ESG considerations</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-[var(--shadow-soft)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl"><Users className="h-5 w-5"/> Deloitte Club Ushine Case Competition</CardTitle>
              <CardDescription className="flex flex-col md:flex-row md:items-center md:justify-between">
                <span>Participant</span>
                <span className="text-xs md:text-sm text-muted-foreground">May 2024 – Jul 2024</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                <li>Simulated a Listed Multinational Company Aiming for Expanding Business & Chinese Cosmetic Industry Market Analysis</li>
                <li>Competitor Analysis & Developed a 5 years strategy plan outlining current market trends, establishing a foothold, and growth in the Chinese market</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-[var(--shadow-soft)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl"><Users className="h-5 w-5"/> 2024 Value Investment Proposal Case Competition</CardTitle>
              <CardDescription className="flex flex-col md:flex-row md:items-center md:justify-between">
                <span>Participant</span>
                <span className="text-xs md:text-sm text-muted-foreground">Feb 2024 – Apr 2024</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                <li>Competed in the 2024 Value Investment Proposal Competition by researching the global EV industry; delivered a stock pitch incorporating DCF modeling to drive valuation projections, using data from annual reports and financial databases</li>
                <li>Completed comprehensive training on global financial market analysis, covered topics like Closed-End Funds Investing and Stock Market Analysis</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
    <SiteFooter />
  </div>
);

export default Activities;
