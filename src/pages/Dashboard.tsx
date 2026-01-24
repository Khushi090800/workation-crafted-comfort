import { useAuth } from '@/hooks/useAuth';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardModules from '@/components/dashboard/DashboardModules';

const Dashboard = () => {
  const { user } = useAuth();
  
  const displayName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'there';

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <DashboardHeader />
      
      <main className="container max-w-7xl mx-auto px-6 py-10 md:py-14">
        {/* Welcome Section */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-700">Your workation command center</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4">
            Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">{displayName}</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Manage your stays, discover experiences, and optimize your remote work environment
          </p>
        </div>

        {/* Modules */}
        <DashboardModules />
      </main>
    </div>
  );
};

export default Dashboard;
