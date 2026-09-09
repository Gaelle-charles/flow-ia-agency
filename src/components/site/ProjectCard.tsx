type Project = {
  name: string;
  statuses: readonly string[];
  statusLabels: readonly string[];
  summary: string;
  demonstrates: string;
  url: string;
  linkLabel: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="grid gap-6 rounded-[1.4rem] border border-border bg-card p-5 sm:p-7 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
      <div>
        <div>
          <p className="text-sm font-semibold leading-6 text-muted-foreground">
            {project.statuses.map((status, index) => (
              <span key={status}>
                {index > 0 ? " · " : ""}
                {project.statusLabels[index]}
              </span>
            ))}
          </p>
        </div>
        <h3 className="type-card-title mt-4 font-semibold text-foreground">{project.name}</h3>
      </div>
      <div>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground">{project.summary}</p>
        <p className="mt-5 max-w-2xl border-l-2 border-accent pl-4 text-sm font-semibold leading-6 text-foreground sm:text-base sm:leading-7">
          {project.demonstrates}
        </p>
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full border border-border px-5 text-sm font-bold text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {project.linkLabel}
        </a>
      </div>
    </article>
  );
}
