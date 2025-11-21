import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

export default function ProjectsIndex({ projects }: { projects: any[] }) {
    return (
        <AppLayout breadcrumbs={[{ title: 'Projects', href: '/projects' }]}>
            <Head title="Projects" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Projects</h1>
                    <button className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800">
                        New Project
                    </button>
                </div>

                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 rounded-xl border md:min-h-min">
                    <div className="p-4">
                        {projects.length === 0 ? (
                            <div className="text-center text-gray-500">
                                No projects found. Create one to get started.
                            </div>
                        ) : (
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {projects.map((project) => (
                                    <div key={project.id} className="rounded-lg border p-4 shadow-sm">
                                        <h3 className="font-semibold">{project.name}</h3>
                                        <p className="text-sm text-gray-500">{project.team?.name}</p>
                                        <div className="mt-2 text-xs uppercase tracking-wider text-gray-400">
                                            {project.status}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
