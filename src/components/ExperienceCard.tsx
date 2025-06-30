import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import StarBorder from '@/blocks/Animations/StarBorder/StarBorder';

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  description: string;
  techs: string[];
  link?: string;
}

export default function ExperienceCard({
  company,
  role,
  period,
  description,
  techs,
  link,
}: ExperienceCardProps) {
  return (
    <StarBorder as="div" color="cyan" speed="5s" thickness={1} className="mb-8 bg-card/80">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <div className="text-sm text-muted-foreground font-semibold">{period}</div>
            <CardTitle className="text-lg font-bold">
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-accent"
                >
                  {role} · {company}
                </a>
              ) : (
                <>
                  {role} · {company}
                </>
              )}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-foreground">{description}</p>
          <div className="flex flex-wrap gap-2">
            {techs.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </StarBorder>
  );
}
