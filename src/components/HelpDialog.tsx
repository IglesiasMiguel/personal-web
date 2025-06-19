// src/components/HelpDialog.tsx
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const HelpDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Help">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="pt-16 pb-8 max-h-[85dvh] sm:max-h-[80dvh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Usage Guide</DialogTitle>
          <DialogDescription>Here are the basics for using this template.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <h4 className="font-medium">🚀 Quick Start</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Clone the repository
                <code className="bg-muted px-1.5 py-0.5 rounded text-sm ml-2">
                  git clone [repository-url]
                </code>
              </li>
              <li>
                Install dependencies
                <code className="bg-muted px-1.5 py-0.5 rounded text-sm ml-2">npm install</code>
              </li>
              <li>
                Start the development server
                <code className="bg-muted px-1.5 py-0.5 rounded text-sm ml-2">npm run dev</code>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">⚡️ Main Features</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <em>Astro v5</em>: Fast builds and excellent performance
                <span className="text-sm text-muted-foreground block ml-2">
                  Supports static site generation and island architecture
                </span>
              </li>
              <li>
                <em>TailwindCSS v4</em>: Latest utility-first CSS
                <span className="text-sm text-muted-foreground block ml-2">
                  Supports custom properties and modern syntax
                </span>
              </li>
              <li>
                <em>shadcn/ui</em>: Customizable UI components
                <span className="text-sm text-muted-foreground block ml-2">
                  Use various components like Button, Dialog, Card, and more
                </span>
              </li>
              <li>
                <em>Dark Mode</em>: Linked to system settings
                <span className="text-sm text-muted-foreground block ml-2">
                  Automatic switching with CSS custom properties
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">🔧 Environment Settings</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <em>Development</em>: NODE_ENV=development
                <span className="text-sm text-muted-foreground block ml-2">
                  Runs at http://localhost:3000
                </span>
              </li>
              <li>
                <em>Staging</em>: npm run stg
                <span className="text-sm text-muted-foreground block ml-2">
                  Generates a build for the staging environment
                </span>
              </li>
              <li>
                <em>Production</em>: npm run prod
                <span className="text-sm text-muted-foreground block ml-2">
                  Generates an optimized production build
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">📝 Customization</h4>
            <p className="text-sm text-muted-foreground">
              You can manage environment-specific URL settings in
              <code className="bg-muted px-1.5 py-0.5 rounded mx-1">src/lib/constants.ts</code>.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">📚 Resources</h4>
            <p className="text-sm text-muted-foreground">
              For detailed documentation, please check the
              <a
                href="https://github.com/n-tong009/astro-shadcn-template"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline ml-1"
              >
                GitHub repository
              </a>
              .
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HelpDialog;
