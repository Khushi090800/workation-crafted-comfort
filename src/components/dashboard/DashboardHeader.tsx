import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { LogOut, User, Home } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const DashboardHeader = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const displayName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User';

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/50 shadow-sm">
      <div className="container max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-display text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
            DeskAway
          </Link>
          <div className="hidden sm:flex items-center gap-1 text-gray-400">
            <span>/</span>
            <span className="text-gray-700 font-medium ml-1">Dashboard</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            to="/"
            className="hidden sm:flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Home className="w-4 h-4" />
            Home
          </Link>
          
          <div className="flex items-center gap-3 px-3 py-2 rounded-full bg-gradient-to-r from-amber-50 to-orange-50 border border-orange-100">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <span className="hidden sm:inline text-sm font-medium text-gray-700">{displayName}</span>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={handleSignOut}
            className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl"
          >
            <LogOut className="w-4 h-4 sm:mr-2" />
            <span className="hidden sm:inline">Sign out</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
