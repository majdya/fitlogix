import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'


import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar"
import { AppSidebar } from "../components/layout/app-sidebar"
import Header from '@/components/layout/header'






export const Route = createRootRoute({
    component: (/*{ children }: { children: React.ReactNode }*/) => (
        <>
            <SidebarProvider>
                <AppSidebar />
                <main>
                    <Header />
                    <SidebarTrigger />
                    {/* {children} */}
                    <Outlet />
                    <TanStackRouterDevtools />
                </main>
            </SidebarProvider>
        </>
    ),
})