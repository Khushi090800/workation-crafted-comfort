import ModuleA from './ModuleA';
import ModuleB from './ModuleB';
import ModuleC from './ModuleC';

const DashboardModules = () => {
  return (
    <div className="space-y-20">
      <ModuleA />
      <ModuleB />
      <ModuleC />
    </div>
  );
};

export default DashboardModules;
