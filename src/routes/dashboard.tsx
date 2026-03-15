import { AppNav } from "@/components/layout/app-nav";
import { AppToolbar } from "@/components/layout/app-toolbar";
import { HealthStatusWidget } from "@/components/dashboard/health-status-widget";
import {
    SidebarProvider,
    SidebarInset,
} from "@/components/ui/sidebar";
import { trpc } from "@/lib/trpc";

export function Dashboard() {

    return (
        <SidebarProvider>
            <div className="w-full flex h-svh">
                <AppNav variant="icon" />

                <SidebarInset className="flex flex-col">
                    <AppToolbar
                        breadcrumbs={[
                            { label: "Home", href: "/" },
                            { label: "Dashboard" },
                        ]}
                    />

                    <main className="flex-1 p-6">
                        <HealthStatusWidget />
                    </main>
                </SidebarInset>
            </div>
        </SidebarProvider>
    );
}
