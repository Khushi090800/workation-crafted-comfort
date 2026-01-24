import { useAuth } from '@/hooks/useAuth';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardModules from '@/components/dashboard/DashboardModules';
import { motion } from 'framer-motion';
import dashboardHero from '@/assets/dashboard-hero-lombok.jpg';

const Dashboard = () => {
  const { user } = useAuth();
  
  const displayName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'traveler';

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      {/* Hero Section with Lombok Beach */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-end pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={dashboardHero}
            alt="Lombok sunset beach with palm trees"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-wide px-6 lg:px-12 pb-12 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm mb-5">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-foreground">Welcome home, {displayName}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-4">
              Your Lombok Journey
              <br />
              <span className="text-gradient">Awaits</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg italic">
              "Chasing sunsets & deadlines from paradise"
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Main Content */}
      <main className="container-wide px-6 lg:px-12 py-14 md:py-18">
        <DashboardModules />
      </main>
    </div>
  );
};

export default Dashboard;
