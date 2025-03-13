
import React from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  defaultCollapsed?: boolean;
}

export function Sidebar({
  className,
  defaultCollapsed = false,
  ...props
}: SidebarProps) {
  const [collapsed, setCollapsed] = React.useState(defaultCollapsed);

  return (
    <div
      className={cn(
        "flex flex-col h-screen border-r transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64",
        className
      )}
      {...props}
    >
      <div className="py-4 px-3 flex justify-between items-center">
        <div
          className={cn(
            "flex items-center transition-all duration-300",
            collapsed ? "opacity-0 w-0" : "opacity-100"
          )}
        >
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/logo.svg"
              alt="Logo"
              className="h-6 w-6"
            />
            <span className="font-medium text-lg">FarmSE</span>
          </Link>
        </div>
        
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded-md text-muted-foreground hover:bg-muted"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {collapsed ? (
              <>
                <path d="M9 6l6 6-6 6" />
              </>
            ) : (
              <>
                <path d="M15 6l-6 6 6 6" />
              </>
            )}
          </svg>
        </button>
      </div>
      
      <ScrollArea className="flex-1 overflow-auto">
        <div className="p-3">
          <SidebarNav collapsed={collapsed} />
        </div>
      </ScrollArea>
    </div>
  );
}

interface SidebarNavProps {
  collapsed: boolean;
}

export function SidebarNav({ collapsed }: SidebarNavProps) {
  return (
    <nav className="space-y-1.5">
      <SidebarSection title="Overview" collapsed={collapsed}>
        <SidebarItem href="/dashboard" icon="home" label="Dashboard" collapsed={collapsed} />
        <SidebarItem href="/analytics" icon="bar-chart" label="Analytics" collapsed={collapsed} />
        <SidebarItem href="/reports" icon="file-text" label="Reports" collapsed={collapsed} />
      </SidebarSection>
      
      <SidebarSection title="Operations" collapsed={collapsed}>
        <SidebarItem href="/my-crops" icon="package" label="My Crops" collapsed={collapsed} />
        <SidebarItem href="/orders" icon="shopping-cart" label="Orders" collapsed={collapsed} />
        <SidebarItem href="/transactions" icon="credit-card" label="Transactions" collapsed={collapsed} />
      </SidebarSection>
    </nav>
  );
}

interface SidebarSectionProps {
  title: string;
  collapsed: boolean;
  children: React.ReactNode;
}

export function SidebarSection({ title, collapsed, children }: SidebarSectionProps) {
  return (
    <div className="space-y-1.5">
      <div
        className={cn(
          "flex items-center font-medium text-xs text-muted-foreground uppercase tracking-wider",
          collapsed ? "justify-center" : "px-3 py-1.5"
        )}
      >
        {!collapsed && <span>{title}</span>}
      </div>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

interface SidebarItemProps {
  href: string;
  icon: string;
  label: string;
  collapsed: boolean;
}

export function SidebarItem({ href, icon, label, collapsed }: SidebarItemProps) {
  return (
    <Link
      to={href}
      className={cn(
        buttonVariants({ variant: "ghost", size: "sm" }),
        "w-full justify-start",
        collapsed && "px-0 justify-center"
      )}
    >
      <Icon name={icon} className={cn("h-5 w-5", !collapsed && "mr-2")} />
      {!collapsed && <span>{label}</span>}
    </Link>
  );
}

// Simple icon component to handle the icons
function Icon({ name, className }: { name: string; className?: string }) {
  const iconMap: Record<string, JSX.Element> = {
    home: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    "bar-chart": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
      </svg>
    ),
    "file-text": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
    package: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m16.5 9.4-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.29 7 12 12 20.71 7" />
        <line x1="12" y1="22" x2="12" y2="12" />
      </svg>
    ),
    "shopping-cart": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    ),
    "credit-card": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  };

  return iconMap[name] || null;
}
