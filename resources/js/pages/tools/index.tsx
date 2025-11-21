import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { BookOpen, FileText, Folder, Users, ArrowRight } from 'lucide-react';

const iconMap: Record<string, any> = {
    Folder,
    BookOpen,
    FileText,
    Users,
};

export default function ToolsIndex({ tools }: { tools: any[] }) {
    return (
        <AppLayout breadcrumbs={[{ title: 'Tools', href: '/tools' }]}>
            <Head title="Tools" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Tools</h1>
                        <p className="text-sm text-gray-500">Manage your orchestra of applications.</p>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {tools.map((tool) => {
                        const Icon = iconMap[tool.icon] || Folder;
                        return (
                            <div key={tool.id} className="group relative flex flex-col justify-between rounded-xl border p-6 transition-all hover:shadow-md">
                                <div>
                                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 group-hover:bg-black group-hover:text-white">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-lg font-semibold">{tool.name}</h3>
                                    <p className="mt-2 text-sm text-gray-500">{tool.description}</p>
                                </div>
                                <div className="mt-6">
                                    {tool.status === 'Installed' ? (
                                        <Link
                                            href={tool.href}
                                            className="inline-flex items-center text-sm font-medium text-black hover:underline"
                                        >
                                            Open Tool <ArrowRight className="ml-1 h-4 w-4" />
                                        </Link>
                                    ) : (
                                        <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                                            {tool.status}
                                        </span>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </AppLayout>
    );
}
