import { Link } from "@tanstack/react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../ui/sidebar";

// Menu items.
import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  Info,
  LogIn,
} from "lucide-react";
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "About",
    url: "/about",
    icon: Info,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
  {
    title: "login",
    url: "/login",
    icon: LogIn,
  },
];

export function AppSidebar() {
  const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  } = useSidebar();

  return (
    <>
      {/* Mobile Sidebar */}
      {isMobile && openMobile && (
        <div className="fixed inset-0 z-50">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setOpenMobile(false)}
          ></div>
          <Sidebar className="relative z-50 w-10">
            <SidebarContent className="bg-zinc-400 flex">
              <SidebarGroup className=" ">
                <SidebarGroupLabel className="flex justify-center">
                  Application
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <Link
                            className="flex justify-center"
                            to={item.url}
                            onClick={() => setOpenMobile(false)}
                          >
                            <span>{item.title}</span>
                            <item.icon />
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
        </div>
      )}

      {/* Desktop Sidebar */}
      {!isMobile && open && (
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Application</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link to={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      )}

      {/* Sidebar Trigger
      <button
        className="fixed bottom-4 right-4 z-50 p-2 bg-blue-500 text-white rounded-full"
        onClick={toggleSidebar}
      >
        {open || openMobile ? "Close" : "Open"} Sidebar
      </button> */}
    </>
  );
}
