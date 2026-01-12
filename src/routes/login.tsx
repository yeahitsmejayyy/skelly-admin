import { Button } from "@/components/ui/button";

export default function Login() {
    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white dark:bg-gray-900">
        <body class="h-full">
        ```
      */}
            <div className="w-full h-screen flex items-center justify-center">
                <div className="w-325 flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="mx-auto">
                        <span className="w-10.5 h-10.5 flex items-center justify-center bg-neutral-950 dark:bg-neutral-900 rounded-md">💀</span>
                    </div>
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
                            Sign in to your account
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form action="#" method="POST" className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        autoComplete="email"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <a
                                            href="#"
                                            className="font-semibold text-muted-foreground hover:text-muted-foreground/60"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        autoComplete="current-password"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <Button className="w-full" size={'lg'}>
                                    Sign in
                                </Button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm/6 text-muted-foreground">
                            Not a member?{' '}
                            <a
                                href="#"
                                className="font-semibold text-muted-foreground hover:text-muted-foreground/60 "
                            >
                                Start a 14 day free trial
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
