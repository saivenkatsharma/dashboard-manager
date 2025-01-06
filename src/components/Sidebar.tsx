import { Bot, Settings, CreditCard, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  return (
    <div className="w-45 h-screen bg-sidebar-gradient border-r border-sidebar-border flex flex-col">
      {/* Logo */}
      <div className="p-6 flex justify-center items-center">
        <h1 className="text-xl font-medium text-sidebar-foreground text-center">Logo</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        <a href="#" className={cn("nav-item active", "bg-[#0F2C42]")}>
          <Bot className="w-5 h-5" />
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
      </nav>

      {/* Logout Button */}
      <div className="p-4">
        <button className="nav-item w-full justify-start text-destructive hover:text-destructive">
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>

      {/* Separation Line */}
      <div className="border-t border-sidebar-border my-2"></div>

      {/* User Profile */}
      <div
        className={cn(
          "p-4 bg-[#1A374D] hover:bg-[#254F6E] rounded-lg shadow-md transition-all duration-300"
        )}
      >
        <div className="flex items-center gap-3 px-2">
          <div className="relative">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500">
              <img
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
                alt="John Smith"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#1A374D]"></div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white">John Smith</h3>
            <p className="text-sm text-gray-300">johnsmith@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
