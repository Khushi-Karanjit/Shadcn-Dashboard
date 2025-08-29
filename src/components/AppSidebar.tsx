import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarTrigger,
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
  MoreHorizontal,
} from "lucide-react"

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
  { title: "Authentication", icon: Fingerprint, url: "#"},
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center justify-between px-3 py-2">
          <div className="flex items-center gap-2">
          <Command className="w-5 h-5"/>
          <span className="font-bold">Studio Admin</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
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
                      <span>{item.title}</span>
                      {item.soon && (
                        <span className="ml-auto text-xs bg-muted px-2 py-0.5 rounded-full">
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
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center gap-2"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                      {item.soon && (
                        <span className="ml-auto text-xs bg-muted px-2 py-0.5 rounded-full">
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
      </SidebarContent>

      <SidebarFooter>
        <div className="px-3 py-2 text-sm">
          <div className="font-medium">Arham Khan</div>
          <div className="text-muted-foreground text-xs">
            hello@arhamkhnz.com
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
