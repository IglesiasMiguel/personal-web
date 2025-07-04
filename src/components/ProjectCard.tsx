import StarBorder from '@/blocks/Animations/StarBorder/StarBorder';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  techs: string[];
  link?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function ProjectCard({
  title,
  description,
  techs,
  link,
  imageSrc,
  imageAlt,
}: ProjectCardProps) {
  return (
    <StarBorder
      as="div"
      color="var(--primary)"
      thickness={1}
      className="mb-8 transition-transform w-full"
      style={{ padding: '1px' }}
    >
      <div className="flex flex-col sm:flex-row bg-card rounded-lg shadow-sm overflow-hidden">
        {imageSrc && (
          <div className="flex-shrink-0 p-4">
            <div className="sm:w-40 relative aspect-video overflow-hidden bg-card">
              <div className="w-full h-full overflow-hidden rounded-sm border-2">
                <img
                  src={imageSrc}
                  alt={imageAlt || title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col flex-1 pb-4 px-4 sm:pt-4">
          <div className="flex flex-row items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-accent">
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:underline"
                >
                  {title}
                  <ArrowUpRight size={16} />
                </a>
              ) : (
                title
              )}
            </h3>
          </div>
          <p className="mb-4 text-base">{description}</p>
          <div className="mt-auto flex flex-wrap gap-2">
            {techs.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </StarBorder>
  );
}
