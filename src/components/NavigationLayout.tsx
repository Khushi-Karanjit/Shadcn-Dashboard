"use client"

import * as React from "react"
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Command as CommandIcon,
  Search,
  Settings,
  Moon,
  ChartBar,
  Gauge,
  Forklift,
  ShoppingBag,
  GraduationCap,
  Bell,
  User,
  CreditCard,
  LogOut,
  LayoutDashboard,
} from "lucide-react"
import { SidebarTrigger } from "./ui/sidebar"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"

export default function TopNav() {
  const [open, setOpen] = React.useState(false)

  // keyboard shortcut: ⌘J / Ctrl+J
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <div className="w-full border-b bg-background">
      <div className="flex h-16 items-center px-4">
        {/* Left - Sidebar Toggle */}
        <Button variant="ghost" size="icon" className="rounded-full">
          <SidebarTrigger className="h-5 w-5" />
        </Button>

        <div className="flex justify-between w-full">
          <div className="flex items-center gap-2 ml-4">
            {/* Search icon trigger */}
            <Search
              className="h-5 w-5 cursor-pointer"
              onClick={() => setOpen(true)}
            />

            {/* Search text trigger */}
            <span
              className="text-sm text-muted-foreground cursor-pointer"
              onClick={() => setOpen(true)}
            >
              Search
            </span>

            {/* Shortcut badge */}
            <div
              onClick={() => setOpen(true)}
              className="ml-auto hidden sm:inline-flex items-center gap-1 rounded bg-muted px-1.5 text-[10px] font-medium text-muted-foreground cursor-pointer"
            >
              <CommandIcon className="h-3 w-3" />
              <span>J</span>
            </div>
          </div>

          {/* Right Side */}
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-2">
              {/* Theme Toggle */}
              <NavigationMenuItem>
                <Button className="p-2 rounded-lg bg-black text-white hover:bg-gray-800">
                  <Moon className="h-5 w-5" />
                </Button>
              </NavigationMenuItem>

              {/* Layout Settings Dropdown */}
<NavigationMenuItem>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button className="p-2 rounded-lg bg-black text-white hover:bg-gray-800">
        <Settings className="h-5 w-5" />
      </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent align="end" className="w-72 p-4 space-y-6">
      {/* Header */}
      <p className="font-semibold text-sm">Layout Settings</p>
      <p className="text-xs text-muted-foreground">
        Customize your dashboard layout preferences.
      </p>

      {/* Preset */}
<div>
  <p className="text-xs font-semibold  mb-2 ">Preset</p>
  <Select>
    <SelectTrigger className="h-8 text-xs ">
      <SelectValue placeholder="Default" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="default">Default</SelectItem>
      <SelectItem value="compact">Compact</SelectItem>
    </SelectContent>
  </Select>
</div>

      {/* Mode */}
      <div>
        <p className="text-xs font-semibold text-muted-foreground mb-2">Mode</p>
        <ToggleGroup type="single" className="flex w-full">
          <ToggleGroupItem
            value="light"
            className="flex-1 rounded-none px-2 py-1 text-xs
                       first:rounded-l-md last:rounded-r-md
                       -ml-px first:ml-0
                       hover:bg-muted/70
                       data-[state=on]:bg-muted
                       data-[state=on]:shadow-inner
                       border border-input"
          >
            Light
          </ToggleGroupItem>
          <ToggleGroupItem
            value="dark"
            className="flex-1 rounded-none px-2 py-1 text-xs
                       first:rounded-l-md last:rounded-r-md
                       -ml-px first:ml-0
                       hover:bg-muted/70
                       data-[state=on]:bg-muted
                       data-[state=on]:shadow-inner
                       border border-input"
          >
            Dark
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {/* Sidebar Variant */}
      <div>
        <p className="text-xs font-semibold text-muted-foreground mb-2">
          Sidebar Variant
        </p>
        <ToggleGroup type="single" className="flex w-full">
          <ToggleGroupItem
            value="inset"
            className="flex-1 rounded-none px-2 py-1 text-xs
                       first:rounded-l-md last:rounded-r-md
                       -ml-px first:ml-0
                       hover:bg-muted/70
                       data-[state=on]:bg-muted
                       data-[state=on]:shadow-inner
                       border border-input"
          >
            Inset
          </ToggleGroupItem>
          <ToggleGroupItem
            value="sidebar"
            className="flex-1 rounded-none px-2 py-1 text-xs
                       first:rounded-l-md last:rounded-r-md
                       -ml-px first:ml-0
                       hover:bg-muted/70
                       data-[state=on]:bg-muted
                       data-[state=on]:shadow-inner
                       border border-input"
          >
            Sidebar
          </ToggleGroupItem>
          <ToggleGroupItem
            value="floating"
            className="flex-1 rounded-none px-2 py-1 text-xs
                       first:rounded-l-md last:rounded-r-md
                       -ml-px first:ml-0
                       hover:bg-muted/70
                       data-[state=on]:bg-muted
                       data-[state=on]:shadow-inner
                       border border-input"
          >
            Floating
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {/* Sidebar Collapsible */}
      <div>
        <p className="text-xs font-semibold text-muted-foreground mb-2">
          Sidebar Collapsible
        </p>
        <ToggleGroup type="single" className="flex w-full">
          <ToggleGroupItem
            value="icon"
            className="flex-1 rounded-none px-2 py-1 text-xs
                       first:rounded-l-md last:rounded-r-md
                       -ml-px first:ml-0
                       hover:bg-muted/70
                       data-[state=on]:bg-muted
                       data-[state=on]:shadow-inner
                       border border-input"
          >
            Icon
          </ToggleGroupItem>
          <ToggleGroupItem
            value="offcanvas"
            className="flex-1 rounded-none px-2 py-1 text-xs
                       first:rounded-l-md last:rounded-r-md
                       -ml-px first:ml-0
                       hover:bg-muted/70
                       data-[state=on]:bg-muted
                       data-[state=on]:shadow-inner
                       border border-input"
          >
            OffCanvas
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {/* Content Layout */}
      <div>
        <p className="text-xs font-semibold text-muted-foreground mb-2">
          Content Layout
        </p>
        <ToggleGroup type="single" className="flex w-full">
          <ToggleGroupItem
            value="centered"
            className="flex-1 rounded-none px-2 py-1 text-xs
                       first:rounded-l-md last:rounded-r-md
                       -ml-px first:ml-0
                       hover:bg-muted/70
                       data-[state=on]:bg-muted
                       data-[state=on]:shadow-inner
                       border border-input"
          >
            Centered
          </ToggleGroupItem>
          <ToggleGroupItem
            value="fullwidth"
            className="flex-1 rounded-none px-2 py-1 text-xs
                       first:rounded-l-md last:rounded-r-md
                       -ml-px first:ml-0
                       hover:bg-muted/70
                       data-[state=on]:bg-muted
                       data-[state=on]:shadow-inner
                       border border-input"
          >
            Full Width
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </DropdownMenuContent>
  </DropdownMenu>
</NavigationMenuItem>



              {/* Account Dropdown */}
              <NavigationMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="icon" className="border-none" variant="ghost">
                      <Avatar className="h-8 w-8 rounded-md overflow-hidden">
                        <AvatarImage src="https://next-shadcn-admin-dashboard.vercel.app/avatars/arhamkhnz.png" />
                        <AvatarFallback>AK</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel className="flex flex-col">
                      <span className="font-medium">Arham Khan</span>
                      <span className="text-xs text-muted-foreground">
                        Administrator
                      </span>
                    </DropdownMenuLabel>
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" /> Account
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCard className="mr-2 h-4 w-4" /> Billing
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Bell className="mr-2 h-4 w-4" /> Notifications
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" /> Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* Search Command Dialog */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Dashboards">
            <CommandItem>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Default
            </CommandItem>
            <CommandItem>
              <ChartBar className="mr-2 h-4 w-4" />
              CRM
            </CommandItem>
            <CommandItem>
              <Gauge className="mr-2 h-4 w-4" />
              Analytics
            </CommandItem>
            <CommandItem>
              <ShoppingBag className="mr-2 h-4 w-4" />
              E-Commerce
            </CommandItem>
            <CommandItem>
              <GraduationCap className="mr-2 h-4 w-4" />
              Academy
            </CommandItem>
            <CommandItem>
              <Forklift className="mr-2 h-4 w-4" />
              Logistics
            </CommandItem>

          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Authentication">
            <CommandItem>
              {/* <User className="mr-2 h-4 w-4" /> */}
              Login V1
            </CommandItem>
            <CommandItem>
              {/* <CreditCard className="mr-2 h-4 w-4" /> */}
              Login V2
            </CommandItem>
            <CommandItem>
              {/* <Settings className="mr-2 h-4 w-4" /> */}
              Register V1
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  )
}
