import { useAuth } from '@/hooks/useAuth';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardModules from '@/components/dashboard/DashboardModules';
import ScrollReveal from '@/components/ScrollReveal';

const Dashboard = () => {
  const { user } = useAuth();
  
  const displayName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'there';

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      {/* Add top padding to account for fixed header */}
      <main className="container-wide px-6 lg:px-12 py-14 md:py-18 pt-24 lg:pt-28">
        {/* Welcome Section - Matches landing hero styling */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-5">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-foreground">Your workation command center</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-5">
              Welcome back, <span className="text-gradient">{displayName}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Manage your stays, discover experiences, and optimize your remote work environment
            </p>
          </div>
        </ScrollReveal>

        {/* Modules */}
        <DashboardModules />
      </main>
    </div>
  );
};

export default Dashboard;
