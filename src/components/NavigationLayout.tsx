import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {

  Search,
  Settings,
  SunMoon,
  Grid,
  FileText,
  Activity,
  ShoppingCart,
  GraduationCap,
  Truck,
  LogIn,
} from "lucide-react"
import { SidebarTrigger } from "./ui/sidebar"

export default function TopNav() {
  return (
    <div className="w-full border-b bg-background">
      <div className="flex h-16 items-center px-4">

        {/* Left - Sidebar Toggle */}
        <Button variant="ghost" size="icon" className="rounded-full">
          <SidebarTrigger className="h-5 w-5" />
        </Button>

        {/* Search - triggers full overlay dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="ml-4 flex-1 max-w-md justify-start rounded-full bg-muted/40 px-3 py-2 text-muted-foreground hover:bg-muted/60"
            >
              <Search className="mr-2 h-4 w-4" />
              Search...
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl p-4">
            <DialogHeader>
              <DialogTitle>Search</DialogTitle>
              <DialogDescription>
                Search dashboards, users, and more
              </DialogDescription>
            </DialogHeader>

            {/* Input */}
            <Input autoFocus placeholder="Search dashboards, users, and more..." className="w-full mt-2 mb-4" />

            {/* Search results */}
            <div className="space-y-4 max-h-96 overflow-y-auto">
              
              {/* Dashboards Section */}
              <div>
                <p className="text-xs font-semibold text-muted-foreground mb-1">Dashboards</p>
                <div className="space-y-1">
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <Grid className="h-4 w-4" />
                    Default
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <FileText className="h-4 w-4" />
                    CRM
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <Activity className="h-4 w-4" />
                    Analytics
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    E-Commerce
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <GraduationCap className="h-4 w-4" />
                    Academy
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <Truck className="h-4 w-4" />
                    Logistics
                  </Button>
                </div>
              </div>

              {/* Authentication Section */}
              <div>
                <p className="text-xs font-semibold text-muted-foreground mb-1">Authentication</p>
                <div className="space-y-1">
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <LogIn className="h-4 w-4" />
                    Login v1
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Right Side */}
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-2">

            {/* Theme Toggle */}
            <NavigationMenuItem>
              <Button variant="ghost" size="icon" className="rounded-full">
                <SunMoon className="h-5 w-5" />
              </Button>
            </NavigationMenuItem>

            {/* Settings Dropdown */}
            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Settings className=" h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>Settings</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Account Settings</DropdownMenuItem>
                  <DropdownMenuItem>Preferences</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>

            {/* Avatar Dropdown */}
            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" className="border-none" variant="ghost">
                    <Avatar className="h-8 w-8 rounded-md overflow-hidden">
                <AvatarImage
                  src="https://next-shadcn-admin-dashboard.vercel.app/avatars/arhamkhnz.png"
                
                />
                <AvatarFallback>
                  AK
                </AvatarFallback>
              </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}
