// src/components/TopNav.tsx
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Menu, Search, Settings, Moon } from "lucide-react"

export default function TopNav() {
  return (
    <div className="w-full border-b bg-background">
      <div className="flex h-14 items-center px-4">
        {/* Left - Sidebar Toggle */}
        <Button variant="ghost" size="icon" className="rounded-full">
          <Menu className="h-5 w-5" />
        </Button>

        {/* Search */}
        <div className="flex items-center gap-2 ml-4 flex-1 max-w-lg">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search"
            className="h-8 w-full max-w-xs border-none focus-visible:ring-0"
          />
          <kbd className="px-2 py-1 text-xs rounded bg-muted">⌘ J</kbd>
        </div>

        {/* Right Side - NavigationMenu */}
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-2">
            
            {/* Settings Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="px-2">
                <Settings className="h-5 w-5" />
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-3 w-40">
                <NavigationMenuLink className="block px-2 py-1 hover:bg-muted rounded">
                  Account Settings
                </NavigationMenuLink>
                <NavigationMenuLink className="block px-2 py-1 hover:bg-muted rounded">
                  Preferences
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Theme Toggle */}
            <NavigationMenuItem>
              <Button size="icon" variant="secondary" className="rounded-xl">
                <Moon className="h-5 w-5" />
              </Button>
            </NavigationMenuItem>

            {/* Avatar Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="px-1">
                <img
                  src="https://avatars.githubusercontent.com/u/000000?v=4"
                  alt="User"
                  className="h-9 w-9 rounded-xl"
                />
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-3 w-40">
                <NavigationMenuLink className="block px-2 py-1 hover:bg-muted rounded">
                  Profile
                </NavigationMenuLink>
                <NavigationMenuLink className="block px-2 py-1 hover:bg-muted rounded">
                  Logout
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}
