import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { buttonVariants } from "@/components/ui/button";
import {
  certifications,
  education,
  experience,
  languages,
  profile,
  projects,
  skillGroups,
} from "@/lib/data";
import { cn } from "@/lib/utils";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border py-12 sm:py-16">
      <h2 className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Hero() {
  return (
    <section id="top" className="pt-20 pb-16 sm:pt-28">
      <p className="text-sm text-brand">{profile.availability}</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-2 text-xl text-muted-foreground sm:text-2xl">{profile.headline}</p>
      <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
        {profile.about}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a href="#projects" className={cn(buttonVariants({ size: "lg" }), "px-4")}>
          View my work
          <ArrowRight data-icon="inline-end" />
        </a>
        <a href="#contact" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-4")}>
          Get in touch
        </a>
      </div>
    </section>
  );
}

function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border p-5 transition-colors hover:border-brand/40",
        className
      )}
    >
      {children}
    </div>
  );
}

function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <Card key={group.title}>
            <h3 className="text-sm font-medium text-foreground">{group.title}</h3>
            <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
              {group.skills.join(" · ")}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="grid gap-4">
        {experience.map((job) => (
          <Card key={job.role}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="font-medium text-foreground">
                {job.role} <span className="text-muted-foreground">· {job.company}</span>
              </h3>
              <p className="text-sm text-muted-foreground">{job.period}</p>
            </div>
            <ul className="mt-2 space-y-1 text-sm leading-6 text-muted-foreground">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="group flex flex-col">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="font-medium text-foreground">
                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 group-hover:text-brand"
                  >
                    {project.title}
                    <ArrowUpRight className="size-3.5 text-muted-foreground group-hover:text-brand" />
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              {project.badge && (
                <p className="text-sm text-brand">{project.badge}</p>
              )}
            </div>
            <p className="mt-1.5 flex-1 text-sm leading-6 text-muted-foreground">
              {project.description}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{project.tags.join(" · ")}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" title="Education">
      <div className="grid gap-4">
        {education.map((entry) => (
          <Card key={entry.degree}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="font-medium text-foreground">{entry.degree}</h3>
              <p className="text-sm text-muted-foreground">{entry.period}</p>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {entry.school} · {entry.location}
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Card>
          <h3 className="text-sm font-medium text-foreground">Certifications</h3>
          <ul className="mt-1.5 space-y-1 text-sm leading-6 text-muted-foreground">
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </Card>
        <Card>
          <h3 className="text-sm font-medium text-foreground">Languages</h3>
          <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
            {languages.join(" · ")}
          </p>
        </Card>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" title="Get in touch">
      <p className="max-w-xl text-sm leading-6 text-muted-foreground">
        Have a question or a project in mind? My inbox is always open.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a href={`mailto:${profile.email}`} className={cn(buttonVariants({ size: "lg" }), "px-4")}>
          <Mail data-icon="inline-start" />
          {profile.email}
        </a>
      </div>
    </Section>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-2xl flex-1 px-6">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-border py-8">
        <div className="mx-auto w-full max-w-2xl px-6 text-sm text-muted-foreground">
          © 2026 {profile.name}
        </div>
      </footer>
    </>
  );
}
