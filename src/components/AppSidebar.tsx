import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar"

import {
  Command,
  LayoutDashboard,
  Home,
  CreditCard,
  BarChart,
  ShoppingCart,
  GraduationCap,
  Package,
  Mail,
  MessageSquare,
  Calendar,
  Kanban,
  FileText,
  Users,
  Shield,
  Fingerprint,
  CirclePlus,
  ChevronRight,
  SquareArrowUpRight,
  EllipsisVertical,
  User, 
  Bell, 
  LogOut
} from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { 
  Avatar, 
  AvatarFallback, 
  AvatarImage 
} 
from "@/components/ui/avatar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { useState } from "react"
import { Link } from "react-router-dom"


const mainItems = [
  { title: "Default", icon: LayoutDashboard, url: "/default" },
  { title: "CRM", icon: Home, url: "/crm" },
  { title: "Finance", icon: CreditCard, url: "/fianance" },
  { title: "Analytics", icon: BarChart, soon: true },
  { title: "E-commerce", icon: ShoppingCart, soon: true },
  { title: "Academy", icon: GraduationCap, soon: true },
  { title: "Logistics", icon: Package, soon: true },
]

const pageItems = [
  { title: "Email", icon: Mail, soon: true },
  { title: "Chat", icon: MessageSquare, soon: true },
  { title: "Calendar", icon: Calendar, soon: true },
  { title: "Kanban", icon: Kanban, soon: true },
  { title: "Invoice", icon: FileText, soon: true },
  { title: "Users", icon: Users, soon: true },
  { title: "Roles", icon: Shield, soon: true , url: "#" },
  { title: "Authentication", icon: Fingerprint, 
    subitems: [
      { title: "Login v1", url: "#" },
      { title: "Login v2", url: "#" },
      { title: "Register v1", url: "#" },
      { title: "Register v2", url: "#" },
    ] },
]

const otherItems = [
  { title: "Others", icon:SquareArrowUpRight, soon: true, url: "#" },
]

function SidebarLink({ item, open, isMobile }: any) {
  const isDisabled = item.soon;

  const link = (
    <SidebarMenuButton asChild>
      <Link
        to={isDisabled ? "#" : item.url}
        className={`flex items-center gap-2 ${
          isDisabled
            ? "text-gray-400 cursor-not-allowed pointer-events-none"
            : "text-black hover:text-black"
        }`}
      >
        <item.icon className="h-4 w-4" />
        {(open || isMobile) && <span>{item.title}</span>}
        {isDisabled && (open || isMobile) && (
          <span className="ml-auto text-xs bg-gray-200 px-2 py-0.5 rounded-full text-gray-400">
            Soon
          </span>
        )}
      </Link>
    </SidebarMenuButton>
  );

  // Tooltip only for active items in collapsed mode
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{link}</TooltipTrigger>
        {!open && !isMobile && (
          <TooltipContent side="right">{item.title}</TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
}

function CollapsibleSidebarItem({ item, open, isMobile }: any) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  // When sidebar is collapsed, use DropdownMenu
  if (!open && !isMobile) {
    return (
      <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
        <TooltipProvider>
          <Tooltip 
            open={tooltipOpen && !dropdownOpen} 
            onOpenChange={(open) => {
              if (!dropdownOpen) {
                setTooltipOpen(open);
              }
            }}
          >
            <TooltipTrigger asChild>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton 
                  className="group/menu-button"
                  onMouseEnter={() => !dropdownOpen && setTooltipOpen(true)}
                  onMouseLeave={() => setTooltipOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
            </TooltipTrigger>
            <TooltipContent side="right">{item.title}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <DropdownMenuContent side="right" align="start" className="w-48">
          {item.subitems.map((subitem : any) => (
            <DropdownMenuItem key={subitem.title} asChild>
              <a href={subitem.url} className="cursor-pointer">
                {subitem.title}
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  // When sidebar is expanded, use Collapsible
  return (
    <Collapsible className="group/collapsible">
      <CollapsibleTrigger asChild>
        <SidebarMenuButton className="group/menu-button">
          <item.icon className="h-4 w-4" />
          {(open || isMobile) && <span>{item.title}</span>}
          {(open || isMobile) && (
            <ChevronRight className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
          )}
        </SidebarMenuButton>
      </CollapsibleTrigger>

      <CollapsibleContent>
        <SidebarMenuSub>
          {item.subitems.map((subitem : any) => (
            <SidebarMenuSubItem key={subitem.title}>
              <SidebarMenuSubButton asChild>
                <a href={subitem.url}>{subitem.title}</a>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          ))}
        </SidebarMenuSub>
      </CollapsibleContent>
    </Collapsible>
  );
}

export function AppSidebar() {
  const { open, isMobile } = useSidebar()
  const [active, setActive] = useState(false)
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center justify-between px-2 py-2">
          <div className="flex items-center gap-2">
            <Command className="w-4 h-4" />
            {(open || isMobile) && (
              <span className="font-semibold text-lg">Studio Admin</span>
            )}
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {open || isMobile ? (
          <div className="flex items-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="flex items-center bg-black text-white px-3 py-1.75 m-2 rounded-lg text-sm font-medium w-full justify-start hover:bg-gray-800">
                    <CirclePlus className="w-4 h-4 mr-2" />
                    Quick Create
                  </button>
                </TooltipTrigger>
                {!open && !isMobile && (
                  <TooltipContent side="right">Create</TooltipContent>
                )}
                </Tooltip>
            </TooltipProvider>

              <button className="p-2.5 border rounded-lg bg-white mr-2 hover:bg-gray-100">
                <Mail className="w-4 h-4" />
              </button>
          </div>
          ) : (
            <div className="flex flex-col items-center gap-2 p-2">
              <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="p-2 rounded-lg bg-black text-white hover:bg-gray-800">
                    <CirclePlus className="w-4 h-4" />
                  </button>
                </TooltipTrigger>
                {!open && !isMobile && (
                  <TooltipContent side="right">Quick Create</TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          </div>
        )}

        <SidebarGroup>
          <SidebarGroupLabel>Dashboards</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarLink item={item} open={open} isMobile={isMobile} />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Pages</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {pageItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.subitems ? (
                    <CollapsibleSidebarItem item={item} open={open} isMobile={isMobile} />
                  ) : (
                    <SidebarLink item={item} open={open} isMobile={isMobile} />
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {(open || isMobile) && (
        <SidebarGroup>
          <SidebarGroupLabel>Misc</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {otherItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                     href={item.soon ? undefined : item.url}
                      className={`flex items-center gap-2 ${
                        item.soon
                          ? "text-gray-400 cursor-not-allowed pointer-events-none"
                          : "text-black hover:text-black"
                      }`}
                    >
                      {(open || isMobile) && <item.icon className="h-4 w-4" />}
                      {(open || isMobile) && <span>{item.title}</span>}
                      {item.soon && (
                        <span className="ml-auto text-xs bg-gray-200 px-2 py-0.5 rounded-full text-gray-400">
                          Soon
                        </span>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        )}
      </SidebarContent>

     <SidebarFooter>
        <DropdownMenu  onOpenChange={(val) => setActive(val)}>
          <DropdownMenuTrigger asChild>
            <button className={`w-full flex items-center justify-between py-2 text-sm rounded-md focus:outline-none transition-colors ${
            active ? "bg-gray-100" : "hover:bg-gray-100"
            }`}>
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8 rounded-md overflow-hidden">
                  <AvatarImage
                    src="https://next-shadcn-admin-dashboard.vercel.app/avatars/arhamkhnz.png"
                    className="grayscale"
                  />
                  <AvatarFallback className="rounded-md bg-gray-200 text-gray-600">
                    AK
                  </AvatarFallback>
                </Avatar>
                {open || isMobile ? (
                  <div className="flex flex-col text-left">
                    <div className="font-medium">Arham Khan</div>
                    <div className="text-muted-foreground text-xs">
                      hello@arhamkhnz.com
                    </div>
                  </div>
                ) : null}
              </div>
              {(open || isMobile) && (
                <EllipsisVertical className="w-5 h-5 text-black" />
              )}
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent side={isMobile ? "top" : "right"} align="end" className="w-60">
              <div className="flex items-center gap-3 px-2 py-1.5">
                <Avatar className="h-8 w-8 rounded-md overflow-hidden">
                  <AvatarImage
                    src="https://next-shadcn-admin-dashboard.vercel.app/avatars/arhamkhnz.png"
                  />
                  <AvatarFallback className="rounded-md bg-gray-200 text-gray-600">
                    AK
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col text-left">
                  <div className="font-medium text-sm">Arham Khan</div>
                  <div className="text-muted-foreground text-xs mt-0">
                    hello@arhamkhnz.com
                  </div>
                </div>
              </div>

              <DropdownMenuSeparator/>
              <DropdownMenuItem>
                <User className="mr-1 h-4 w-4" />
                Account
              </DropdownMenuItem>

              <DropdownMenuItem>
                <CreditCard className="mr-1 h-4 w-4" />
                Billing
              </DropdownMenuItem>

              <DropdownMenuItem >
                <Bell className="mr-1 h-4 w-4" />
                Notifications
              </DropdownMenuItem>


              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <LogOut className="mr-1"/>
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  )
}


