import { AppBreadcrumb } from "@/components/layout/app-breadcrumb";
import { AppNav } from "@/components/layout/app-nav";
import { AppToolbar } from "@/components/layout/app-toolbar";
import {
    SidebarProvider,
    SidebarInset,
} from "@/components/ui/sidebar";
import { trpc } from "@/lib/trpc";

export function Dashboard() {
    const healthCheck = trpc.health.check.useQuery();

    return (
        <SidebarProvider>
            <div className="w-full flex h-svh">
                <AppNav variant="icon" />

                <SidebarInset className="flex flex-col">
                    <AppToolbar title="Dashboard" />
                    <AppBreadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Dashboard" },
                        ]}
                    />

                    <main className="flex-1 p-6">
                        {healthCheck.data ? (
                            <pre className="text-sm text-neutral-400">
                                {JSON.stringify(healthCheck.data, null, 2)}
                            </pre>
                        ) : (
                            <pre className="text-sm text-neutral-400">
                                ❌ Health check failed with Backend
                            </pre>
                        )}
                    </main>
                </SidebarInset>
            </div>
        </SidebarProvider>
    );
}
