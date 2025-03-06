import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";
import { AppSidebar } from "../components/layout/app-sidebar";
export const Route = createRootRoute({
  component: (/*{ children }: { children: React.ReactNode }*/) => (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          {/* {children} */}
          <Outlet />
          <TanStackRouterDevtools />
        </main>
      </SidebarProvider>
    </>
  ),
});
