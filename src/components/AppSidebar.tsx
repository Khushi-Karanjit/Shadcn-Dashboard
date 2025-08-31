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

const mainItems = [
  { title: "Default", icon: LayoutDashboard, url: "#" },
  { title: "CRM", icon: Home, url: "#" },
  { title: "Finance", icon: CreditCard, url: "#" },
  { title: "Analytics", icon: BarChart, url: "#", soon: true },
  { title: "E-commerce", icon: ShoppingCart, url: "#", soon: true },
  { title: "Academy", icon: GraduationCap, url: "#", soon: true },
  { title: "Logistics", icon: Package, url: "#", soon: true },
]

const pageItems = [
  { title: "Email", icon: Mail, url: "#", soon: true },
  { title: "Chat", icon: MessageSquare, url: "#", soon: true },
  { title: "Calendar", icon: Calendar, url: "#", soon: true },
  { title: "Kanban", icon: Kanban, url: "#", soon: true },
  { title: "Invoice", icon: FileText, url: "#", soon: true },
  { title: "Users", icon: Users, url: "#", soon: true },
  { title: "Roles", icon: Shield, url: "#", soon: true },
  { title: "Authentication", icon: Fingerprint, url: "#", 
    subitems: [
      { title: "Login v1", url: "#" },
      { title: "Login v2", url: "#" },
      { title: "Register v1", url: "#" },
      { title: "Register v2", url: "#" },
    ] },
]

const otherItems = [
  { title: "Others", icon:SquareArrowUpRight, url: "#", soon: true },
]


export function AppSidebar() {
  const { open, isMobile } = useSidebar()
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
            <button className="flex items-center bg-black text-white px-3 py-1.75 m-2 rounded-lg text-sm font-medium w-full justify-start hover:bg-gray-800">
              <CirclePlus className="w-4 h-4 mr-2" />
              Quick Create
            </button>
            <button className="p-2.5 border rounded-lg bg-white mr-2 hover:bg-gray-100">
              <Mail className="w-4 h-4" />
            </button>
          </div>
          ) : (
            <div className="flex flex-col items-center gap-2 p-2">
              <button className="p-2 rounded-lg bg-black text-white hover:bg-gray-800">
                <CirclePlus className="w-4 h-4" />
              </button>
            </div>
        )}
        <SidebarGroup>
          <SidebarGroupLabel>Dashboards</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center gap-2"
                    >
                      <item.icon className="h-4 w-4" />
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

        <SidebarGroup>
          <SidebarGroupLabel>Pages</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {pageItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.subitems ? (
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
                      {(open || isMobile) && (
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.subitems.map((subitem) => (
                              <SidebarMenuSubItem key={subitem.title}>
                                <SidebarMenuSubButton asChild>
                                  <a href={subitem.url}>
                                    <span>{subitem.title}</span>
                                  </a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      )}
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className="flex items-center gap-2"
                      >
                        <item.icon className="h-4 w-4" />
                        {(open || isMobile) && <span>{item.title}</span>}
                        {item.soon && (
                          <span className="ml-auto text-xs bg-gray-200 px-2 py-0.5 rounded-full text-gray-400">
                            Soon
                          </span>
                        )}
                      </a>
                    </SidebarMenuButton>
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
                      href={item.url}
                      className="flex items-center gap-2"
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
        {open || isMobile ? (
          <div className="flex items-center justify-between px-2 py-2 text-sm hover:bg-gray-100 rounded-md">
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
              <div className="flex flex-col">
                <div className="font-medium">Arham Khan</div>
                <div className="text-muted-foreground text-xs">
                  hello@arhamkhnz.com
                </div>
              </div>
            </div>
            <EllipsisVertical className="w-5 h-5 text-black" />
          </div>
          ) : (
            <div className="flex items-center justify-center py-3">
              <Avatar className="h-8 w-8 rounded-md overflow-hidden">
                <AvatarImage
                  src="https://next-shadcn-admin-dashboard.vercel.app/avatars/arhamkhnz.png"
                  className="grayscale"
                />
                <AvatarFallback className="rounded-md bg-gray-200 text-gray-600">
                  AK
                </AvatarFallback>
              </Avatar>
            </div>
        )}
      </SidebarFooter>

    </Sidebar>
  )
}