import { Brain, Settings, CreditCard, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  return (
    < div className="w-45 h-screen bg-sidebar-gradient border-r border-sidebar-border flex flex-col" >
      {/* Logo */}
      < div className="p-6" >
        <h1 className="text-xl font-bold text-sidebar-foreground">Logo</h1>
      </div >

      {/* Navigation */}
      < nav className="flex-1 px-3 py-4 space-y-1" >
        <a href="#" className="nav-item active">
          <Brain className="w-5 h-5" />
          AI Overview
        </a>
        <a href="#" className="nav-item">
          <Settings className="w-5 h-5" />
          Manage
        </a>
        <a href="#" className="nav-item">
          <CreditCard className="w-5 h-5" />
          Account & Payments
        </a>
      </nav >

      < div className="p-4" >
        <button className="nav-item w-full justify-start text-destructive hover:text-destructive">
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div >

      {/* User Profile */}
      < div className="p-4 border-t border-sidebar-border" >
        <div className="flex items-center gap-3 px-2">
          <div className="relative">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
                alt="John Smith"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-sidebar"></div>
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-sidebar-foreground">John Smith</h3>
            <p className="text-sm text-muted-foreground">johnsmith@gmail.com</p>
          </div>
        </div>
      </div >
    </div >
  );
};

export default Sidebar;