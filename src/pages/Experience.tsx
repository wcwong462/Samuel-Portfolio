import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useState } from "react";
import { Briefcase } from "lucide-react";
import HoverPopCard from "./HoverPopCard";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

const Experience: React.FC = () => (
  <div className="min-h-screen bg-background text-foreground flex flex-col">
    <SiteNavbar />
    <section className="container py-16 flex-1 space-y-12">
      {/* Professional Experience */}
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl mb-6">Experience</h2>
        <div className="space-y-6">
          {/* Oakcean Capital */}
          <Card className="shadow-[var(--shadow-soft)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl"><Briefcase className="h-5 w-5"/> Quantitative Strategist Intern</CardTitle>
              <CardDescription className="flex flex-col md:flex-row md:items-center md:justify-between">
                <span>Oakcean Capital</span>
                <span className="text-xs md:text-sm text-muted-foreground">Aug 2025 - Sep 2025</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm mb-2 text-muted-foreground">London-based Multi Family Office, where I honed my quantitative trading skills.</div>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                <li>Developed a statistical arbitrage strategy using 10+ years of Shanghai Stock Exchange (SSE) data to identify trading opportunities with Python.</li>
                <li>Automated data processing workflows leveraging MongoDB for efficient data management and retrieval.</li>
                <li>Implemented the Power Method algorithm in C++ to enhance computational efficiency and improve SVD model performance.</li>
              </ul>
            </CardContent>
          </Card>
          {/* SnapFeedback Limited */}
          <Card className="shadow-[var(--shadow-soft)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl"><Briefcase className="h-5 w-5"/> Full Stack Developer Intern</CardTitle>
              <CardDescription className="flex flex-col md:flex-row md:items-center md:justify-between">
                <span>SnapFeedback Limited</span>
                <span className="text-xs md:text-sm text-muted-foreground">Jun 2025 – Aug 2025</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm mb-2 text-muted-foreground">A tech startup focused on feedback solutions for various sectors.</div>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                <li>Tested and analyzed 6+ deep learning models for real-time computer vision and NLP projects, proposing and implementing plugins using Python, PyTorch, and Scikit-learn.</li>
                <li>Developed a full-stack web application, contributing to the entire development lifecycle using React, Python, FastAPI, and Supabase.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Projects */}
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl mt-10 mb-6">Projects</h2>
        <div className="space-y-6">
          <Card className="shadow-[var(--shadow-soft)]">
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Interactive Option Pricing & Greeks Analysis Tool</CardTitle>
              <CardDescription className="flex flex-col md:flex-row md:items-center md:justify-between">
                <a href="https://github.com/wcwong462/Interactive-Option-Pricing-Model-With-Heatmap-Analysis" target="_blank" rel="noopener noreferrer" className="underline text-primary">GitHub Repo</a>
                <span className="text-xs md:text-sm text-muted-foreground">Jul 2025</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground mb-2">A web application built with Streamlit and SciPy for interactive Black-Scholes option pricing and Greeks analysis. Users can visualize option sensitivities (Greeks) with dynamic heatmaps, adjust parameters in real time, and gain insights into option risk profiles. Designed for both educational and practical finance use.</div>
              <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
                <li>Implements Black-Scholes model for European options.</li>
                <li>Interactive sliders for adjusting volatility, time to maturity, and other parameters.</li>
                <li>Dynamic heatmaps for Delta, Gamma, Theta, Vega, and Rho.</li>
                <li>Exportable results for further analysis.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-[var(--shadow-soft)]">
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Portfolio Optimisation Tool</CardTitle>
              <CardDescription className="flex flex-col md:flex-row md:items-center md:justify-between">
                <a href="https://github.com/wcwong462/Python-Portfolio-Optimization-Project" target="_blank" rel="noopener noreferrer" className="underline text-primary">GitHub Repo</a>
                <span className="text-xs md:text-sm text-muted-foreground">Jan 2025</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground mb-2">A Python-based portfolio optimization tool that helps users maximize Sharpe ratios for ETF and equity portfolios. Integrates financial data sources and advanced optimization algorithms to support robust investment decision-making.</div>
              <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
                <li>Fetches historical price data using yfinance and FredAPI.</li>
                <li>Calculates expected returns, volatility, and correlation matrices.</li>
                <li>Uses SciPy optimization routines to maximize Sharpe ratio and minimize risk.</li>
                <li>Supports portfolio rebalancing and scenario analysis.</li>
                <li>Visualizes efficient frontier and optimal asset allocation.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Courses */}
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl mt-10 mb-6">Courses</h2>
        <div className="space-y-6">
          <Card className="shadow-[var(--shadow-soft)]">
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Quantitative Field</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                <li><b>MA1200 Calculus and Basic Linear Algebra I</b></li>
                <li><b>MA1201 Calculus and Basic Linear Algebra II</b></li>
                <li><b>MA2001 Multi-variable Calculus and Linear Algebra</b></li>
                <li><b>MA3511 Ordinary Differential Equations</b></li>
                <li><b>MA2185 Discrete Mathematics</b><br /><span className="text-xs">Number Theory, Combinatorics, Graph Theory</span></li>
                <li><b>MA2510 Probability and Statistics</b><br /><span className="text-xs">Statistical Methods, Probability Theory</span></li>
                <li><b>MS3601 Optimization Methods</b><br /><span className="text-xs">Linear Programming, Non-linear Optimization, Clustering</span></li>
                <li><b>EF3520 Stochastic Calculus for Finance</b><br /><span className="text-xs">Stochastic Processes, Ito Calculus, Brownian Motion</span></li>
                <li><b>MS3252 Regression Analysis</b><br /><span className="text-xs">Linear Regression, Logistic Regression, Time Series Analysis</span></li>
                <li><b>MS2602 Statistical Inference</b><br /><span className="text-xs">Estimation, Hypothesis Testing, Bayesian Inference</span></li>
                <li><b>EF4321 Derivative and Risk Management</b><br /><span className="text-xs">Financial Derivatives, Risk Assessment, Hedging Strategies, Black-Scholes Model</span></li>
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-[var(--shadow-soft)]">
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Computer Science</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                <li><b>CS1302 Introduction to Computer Programming</b><br /><span className="text-xs">Focused on Python fundamentals.</span></li>
                <li><b>CS2204 Fundamentals of Internet Applications Development</b><br /><span className="text-xs">Developed a university webpage as an assignment using HTML, CSS, and JavaScript.</span></li>
                <li><b>CS2310 Computer Programming</b><br /><span className="text-xs">Studied C++ fundamentals.</span></li>
                <li><b>CS2115 Computer Organization</b><br /><span className="text-xs">Explored logic and processes of hardware components, such as CPU, memory, and GPU.</span></li>
                <li><b>CS2312 Problem Solving and Programming</b><br /><span className="text-xs">Learned object-oriented programming in Java and developed a system for a club to manage member registration and equipment borrowing.</span></li>
                <li><b>CS3402 Database Systems</b><br /><span className="text-xs">Applied database systems using SQL and SQLite.</span></li>
                <li><b>CS3342 Software Design</b><br /><span className="text-xs">Introduces fundamental software engineering principles, focusing on requirements elicitation, analysis, and design principles/ pattern.</span></li>
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-[var(--shadow-soft)]">
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Others</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                <li><b>CB2400 Microeconomics</b></li>
                <li><b>CB2402 Macroeconomics</b></li>
                <li><b>CB2100 Introduction to Financial Accounting</b><br /><span className="text-xs">Prepared a report on identifying the weaknesses of a company based on its financial statements.</span></li>
                <li><b>CB3410 Financial Management</b><br /><span className="text-xs">Studied financial analysis, basic stock pricing, outputed stock pitching project.</span></li>
                <li><b>EF3320 Securities & Portfolio Management</b><br /><span className="text-xs">Portfolio Theory, Asset Pricing Model (CAPM), Conducted Data Analytics Project focus on Portfolio Optimization</span></li>
                <li><b>EF4313 Corporate Finance</b><br /><span className="text-xs">Capital Budgeting, Risk Management</span></li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
    <SiteFooter />
  </div>
);

export default Experience;
