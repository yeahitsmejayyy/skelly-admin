import { AppSidebar } from "@/components/layout/app-sidebar";
import {
    SidebarProvider,
    SidebarInset,
} from "@/components/ui/sidebar";
import { trpc } from "@/lib/trpc";

export function Dashboard() {
    const healthCheck = trpc.health.check.useQuery();

    return (
        <SidebarProvider>
            <div className="flex h-svh">
                <AppSidebar />

                <SidebarInset className="flex flex-col p-6">
                    <h1 className="mb-4 text-xl font-bold">Dashboard</h1>

                    {healthCheck.data ? (
                        <pre className="text-sm text-neutral-400">
                            {JSON.stringify(healthCheck.data, null, 2)}
                        </pre>
                    ) : (
                        <pre className="text-sm text-neutral-400">
                            ❌ Health check failed with Backend
                        </pre>
                    )}
                </SidebarInset>
            </div>
        </SidebarProvider>
    );
}
