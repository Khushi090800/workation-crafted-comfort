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
      
      <main className="container-wide px-6 py-8 md:py-12">
        <ScrollReveal>
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-display text-foreground mb-2">
              Welcome, {displayName}
            </h1>
            <p className="text-muted-foreground">
              Your workation command center. Explore tools, manage bookings, and discover your destination.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <DashboardModules />
        </ScrollReveal>
      </main>
    </div>
  );
};

export default Dashboard;
