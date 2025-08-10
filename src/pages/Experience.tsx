import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

const Experience: React.FC = () => (
  <div className="min-h-screen bg-background text-foreground flex flex-col">
    <SiteNavbar />
    <section className="container py-16 flex-1 space-y-12">
      {/* Professional Experience */}
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl">Experience</h2>
        <Card className="mt-6 shadow-[var(--shadow-soft)]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Briefcase className="h-5 w-5"/> Professional Experience</CardTitle>
            <CardDescription>Internships, jobs, and more</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Quantitative Strategist Intern, Oakcean Capital (Aug 2025 - Sep 2025)
                <br />London-based Multi Family Office, where I honed my quantitative trading skills.
                <ul className="list-disc pl-5 space-y-1">
                  <li>Developed a statistical arbitrage strategy using 10+ years of Shanghai Stock Exchange (SSE) data to identify trading opportunities with Python.</li>
                  <li>Automated data processing workflows leveraging MongoDB for efficient data management and retrieval.</li>
                  <li>Implemented the Power Method algorithm in C++ to enhance computational efficiency and improve SVD model performance.</li>
                </ul>
              </li>
              <li>Full Stack Developer Intern, SnapFeedback Limited (Jun 2025 – Aug 2025)
                <br />A tech startup focused on feedback solutions for various sectors
                <ul className="list-disc pl-5 space-y-1">
                  <li>Tested and analyzed 6+ deep learning models for real-time computer vision and NLP projects, proposing and implementing plugins using Python, PyTorch, and Scikit-learn.</li>
                  <li>Developed a full-stack web application, contributing to the entire development lifecycle using React, Python, FastAPI, and Supabase.</li>
                </ul>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Projects */}
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl mt-10">Projects</h2>
        <Card className="mt-6 shadow-[var(--shadow-soft)]">
          <CardHeader>
            <CardTitle>Key Projects</CardTitle>
            <CardDescription>Academic and personal work</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>
                <a href="https://github.com/wcwong462/Interactive-Option-Pricing-Model-With-Heatmap-Analysis" target="_blank" rel="noopener noreferrer" className="underline text-primary">Interactive Option Pricing & Greeks Analysis Tool</a> (Jul 2025)
                <br />Streamlit and SciPy-based web application for Black-Scholes Model and Greeks analysis, featuring dynamic heatmaps.
              </li>
              <li>
                <a href="https://github.com/wcwong462/Python-Portfolio-Optimization-Project" target="_blank" rel="noopener noreferrer" className="underline text-primary">Portfolio Optimisation Tool</a> (Jan 2025)
                <br />Python-based tool maximizing Sharpe ratios for ETF and equity portfolios, leveraging pandas, NumPy, SciPy, yfinance, and FredAPI.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Courses */}
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl mt-10">Courses</h2>
        <Card className="mt-6 shadow-[var(--shadow-soft)]">
          <CardHeader>
            <CardTitle>Relevant Coursework</CardTitle>
            <CardDescription>Key modules and academic focus</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Stochastic Calculus</li>
              <li>Probability & Statistics</li>
              <li>Software Design</li>
              <li>Problem Solving and Programming</li>
              <li>Mathematics (Minor)</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
    <SiteFooter />
  </div>
);

export default Experience;
