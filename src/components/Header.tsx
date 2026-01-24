import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut, User } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, loading, signOut } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut();
      toast.success("Logged out successfully");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Failed to log out");
    }
  };

  const navLinks = [
    { label: "Properties", href: "#properties" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-wide px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl font-display font-bold text-primary">DeskAway</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            {/* Dashboard link - only show when logged in */}
            {!loading && user && (
              <Link
                to="/dashboard"
                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Dashboard
              </Link>
            )}
          </nav>

          {/* Desktop CTAs + Auth Status */}
          <div className="hidden lg:flex items-center gap-4">
            {!loading && user ? (
              <>
                {/* Auth Status Badge */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                  <User className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-medium text-primary truncate max-w-[140px]">
                    {user.email}
                  </span>
                </div>
                <Button variant="hero" size="default" asChild>
                  <Link to="/dashboard">Dashboard</Link>
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleLogout}
                  className="text-muted-foreground hover:text-destructive"
                >
                  <LogOut className="w-4 h-4 mr-1" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/auth">Sign In</Link>
                </Button>
                <Button variant="hero" size="default">
                  Join Waitlist
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              {/* Dashboard link - only show when logged in */}
              {!loading && user && (
                <Link
                  to="/dashboard"
                  className="text-base font-medium text-primary hover:text-primary/80 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
              )}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                {!loading && user ? (
                  <>
                    {/* Mobile Auth Status Badge */}
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary/20 mb-2">
                      <User className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary truncate">
                        {user.email}
                      </span>
                    </div>
                    <Button variant="hero" asChild>
                      <Link to="/dashboard">Go to Dashboard</Link>
                    </Button>
                    <Button 
                      variant="ghost" 
                      onClick={handleLogout}
                      className="justify-start text-muted-foreground hover:text-destructive"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="ghost" className="justify-start" asChild>
                      <Link to="/auth">Sign In</Link>
                    </Button>
                    <Button variant="hero">
                      Join Waitlist
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
