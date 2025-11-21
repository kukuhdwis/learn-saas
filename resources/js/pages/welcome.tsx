import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }: { auth: { user: any } }) {
    return (
        <>
            <Head title="Welcome to Orchestra" />
            <div className="min-h-screen bg-gray-50 text-black dark:bg-black dark:text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <header className="flex h-20 items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white dark:bg-white dark:text-black">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-5 w-5"
                                >
                                    <path d="M9 18V5l12-2v13" />
                                    <circle cx="6" cy="18" r="3" />
                                    <circle cx="18" cy="16" r="3" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold">Orchestra</span>
                        </div>
                        <nav className="flex gap-4">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="rounded-md px-3 py-2 text-sm font-medium transition hover:bg-gray-200 dark:hover:bg-gray-800"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="rounded-md px-3 py-2 text-sm font-medium transition hover:bg-gray-200 dark:hover:bg-gray-800"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                                    >
                                        Get Started
                                    </Link>
                                </>
                            )}
                        </nav>
                    </header>

                    {/* Hero Section */}
                    <main className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center text-center">
                        <div className="max-w-3xl space-y-8">
                            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
                                Conduct your business <br />
                                <span className="text-gray-500 dark:text-gray-400">like a symphony.</span>
                            </h1>
                            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                                Orchestra is the all-in-one platform for managing your projects, invoices, and team.
                                Stop juggling multiple apps and start performing.
                            </p>
                            <div className="flex justify-center gap-4">
                                <Link
                                    href={route('register')}
                                    className="rounded-full bg-black px-8 py-3 text-lg font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                                >
                                    Start for free
                                </Link>
                                <a
                                    href="#features"
                                    className="rounded-full border border-gray-300 px-8 py-3 text-lg font-semibold transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
                                >
                                    Learn more
                                </a>
                            </div>
                        </div>

                        {/* Feature Grid */}
                        <div id="features" className="mt-24 grid w-full grid-cols-1 gap-8 sm:grid-cols-3">
                            <div className="rounded-2xl border border-gray-200 bg-white p-8 text-left shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" /></svg>
                                </div>
                                <h3 className="mb-2 text-xl font-bold">Projects</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Manage tasks, track progress, and collaborate with your team in real-time.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-gray-200 bg-white p-8 text-left shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M2 6h4" /><path d="M2 10h4" /><path d="M2 14h4" /><path d="M2 18h4" /><rect width="16" height="20" x="6" y="2" rx="2" /><path d="M16 2v20" /><path d="M6 12h16" /></svg>
                                </div>
                                <h3 className="mb-2 text-xl font-bold">Invoices</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Create professional invoices, track payments, and manage your finances.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-gray-200 bg-white p-8 text-left shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                                </div>
                                <h3 className="mb-2 text-xl font-bold">More Tools</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Expand your capabilities with our growing library of business tools.
                                </p>
                            </div>
                        </div>
                    </main>

                    <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-500 dark:border-gray-800">
                        &copy; {new Date().getFullYear()} Orchestra. All rights reserved.
                    </footer>
                </div>
            </div>
        </>
    );
}
