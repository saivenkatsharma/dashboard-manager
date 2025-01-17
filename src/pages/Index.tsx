import { ArrowLeft } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import DataTable from '@/components/DataTable';

const Index = () => {
  return (
    <div className="w-full flex min-h-screen" style={{ backgroundColor: '#0c0c0c' }}>
      <Sidebar />

      <main className="flex-1 p-8 bg-[#0C0C0C]">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <button className="p-2 hover:bg-accent rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-semibold">AI Overview</h1>
        </div>

        {/* Content */}
        <div className="bg-[#0c0c0c] rounded-lg border border-[#0c0c0c]">
          <DataTable />
        </div>
      </main>
    </div>
  );
};

export default Index;