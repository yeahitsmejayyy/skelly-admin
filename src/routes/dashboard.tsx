import { ModeToggle } from "@/components/mode-toggle";
import { trpc } from "@/lib/trpc";

export function Dashboard() {
    const healthCheck = trpc.health.check.useQuery();

    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-4 p-4">
            <h1 className="text-xl font-bold">Dashboard</h1>

            <ModeToggle />

            {healthCheck.data ? (
                <pre className="text-sm text-neutral-400">
                    {JSON.stringify(healthCheck.data, null, 2)}
                </pre>
            ) : (
                <pre className="text-sm text-neutral-400">
                    ❌ Health check failed with Backend
                </pre>
            )}
        </div>
    );
}
