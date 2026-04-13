import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import type { ReactNode } from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  repoUrl: string;
  liveUrl?: string;
  tags: string[];
  children?: ReactNode;
  isReversed?: boolean;
  repositoryLabel?: string;
  tryItLabel?: string;
  projectPreviewLabel?: string;
};

export function ProjectCard({
  title,
  description,
  repoUrl,
  liveUrl,
  tags,
  children,
  isReversed = false,
  repositoryLabel = "Repository",
  tryItLabel = "Try it",
  projectPreviewLabel = "Project preview",
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className={cn("grid grid-cols-1 md:grid-cols-2", isReversed ? "md:grid-flow-col-dense" : "")}>
        <div className={cn("p-6 sm:p-8 flex flex-col justify-center", isReversed ? "md:col-start-2" : "md:row-start-1")}>
          <h3 className="font-headline text-2xl font-bold md:row-start-1">{title}</h3>
          <div className="md:hidden mt-4">
            {children ?? (
              <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-sm">{projectPreviewLabel}</span>
              </div>
            )}
          </div>
          <p className="mt-4 text-muted-foreground">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">
                <Github className="mr-2" />
                {repositoryLabel}
              </Button>
            </a>
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <Button>
                  <ExternalLink className="mr-2" />
                  {tryItLabel}
                </Button>
              </a>
            )}
          </div>
        </div>
        <div className={cn("bg-muted/30 dark:bg-card p-6 sm:p-8 hidden md:flex items-center justify-center", isReversed ? "md:col-start-1" : "")}>
          {children ?? (
            <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground text-sm">{projectPreviewLabel}</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
