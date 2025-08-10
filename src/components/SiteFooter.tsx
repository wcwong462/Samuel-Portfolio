const SiteFooter = () => (
  <footer className="w-full bg-background/80 border-t py-8 mt-12">
    <div className="container text-center">
      <h3 className="font-display text-2xl mb-2">Get in Touch</h3>
      <p className="mb-4 text-muted-foreground">Feel free to reach out for collaboration, questions, or just to say hi!</p>
      <div className="flex justify-center gap-4">
        <a href="mailto:wcwong462.samuel@gmail.com" className="underline text-primary">wcwong462.samuel@gmail.com</a>
        <a href="https://www.linkedin.com/in/samuelwong1114/" target="_blank" rel="noopener noreferrer" className="underline text-primary">LinkedIn</a>
        <a href="https://github.com/wcwong462" target="_blank" rel="noopener noreferrer" className="underline text-primary">GitHub</a>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
