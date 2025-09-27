import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-muted-foreground">Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
            <span className="text-muted-foreground">by</span>
            <span className="font-semibold gradient-text">Your Name</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;