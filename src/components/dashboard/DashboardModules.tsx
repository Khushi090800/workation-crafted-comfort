import ModuleA from './ModuleA';
import ModuleB from './ModuleB';
import ModuleC from './ModuleC';

const DashboardModules = () => {
  return (
    <div className="space-y-16 md:space-y-20 pt-6">
      <ModuleA />
      <div className="py-14 md:py-18 -mx-6 lg:-mx-12 px-6 lg:px-12 bg-secondary">
        <ModuleB />
      </div>
      <ModuleC />
    </div>
  );
};

export default DashboardModules;
