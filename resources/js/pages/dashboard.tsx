import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';
import { Folder, FileText, DollarSign, Users, ArrowRight } from 'lucide-react';

export default function Dashboard({ stats, recentProjects, recentInvoices }: { stats: any, recentProjects: any[], recentInvoices: any[] }) {
    return (
        <AppLayout breadcrumbs={[{ title: 'Dashboard', href: '/dashboard' }]}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-4 bg-gray-50 dark:bg-black/10">

                {/* Stats Grid */}
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    <div className="rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-500">
                                <Folder className="h-6 w-6" />
                            </div>
                        </div>
                        <div className="mt-4 flex items-end justify-between">
                            <div>
                                <h4 className="text-title-md font-bold text-black dark:text-white text-2xl">
                                    {stats.totalProjects}
                                </h4>
                                <span className="text-sm font-medium text-gray-500">Total Projects</span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-500">
                                <DollarSign className="h-6 w-6" />
                            </div>
                        </div>
                        <div className="mt-4 flex items-end justify-between">
                            <div>
                                <h4 className="text-title-md font-bold text-black dark:text-white text-2xl">
                                    ${stats.totalRevenue.toLocaleString()}
                                </h4>
                                <span className="text-sm font-medium text-gray-500">Total Revenue</span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-50 text-purple-500">
                                <FileText className="h-6 w-6" />
                            </div>
                        </div>
                        <div className="mt-4 flex items-end justify-between">
                            <div>
                                <h4 className="text-title-md font-bold text-black dark:text-white text-2xl">
                                    {stats.totalInvoices}
                                </h4>
                                <span className="text-sm font-medium text-gray-500">Total Invoices</span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                                <Users className="h-6 w-6" />
                            </div>
                        </div>
                        <div className="mt-4 flex items-end justify-between">
                            <div>
                                <h4 className="text-title-md font-bold text-black dark:text-white text-2xl">
                                    {stats.totalClients}
                                </h4>
                                <span className="text-sm font-medium text-gray-500">Total Clients</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Activity Grid */}
                <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                    {/* Recent Projects */}
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6 py-4 dark:border-strokedark flex justify-between items-center">
                            <h3 className="font-semibold text-black dark:text-white">
                                Recent Projects
                            </h3>
                            <Link href={route('projects.index')} className="text-sm text-blue-500 hover:underline">View All</Link>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-col gap-4">
                                {recentProjects.length === 0 ? (
                                    <p className="text-gray-500 text-sm">No projects yet.</p>
                                ) : (
                                    recentProjects.map((project) => (
                                        <div key={project.id} className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                                                    <Folder className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <h5 className="font-medium text-black dark:text-white">
                                                        {project.name}
                                                    </h5>
                                                    <span className="text-xs text-gray-500">{project.status}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Recent Invoices */}
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6 py-4 dark:border-strokedark flex justify-between items-center">
                            <h3 className="font-semibold text-black dark:text-white">
                                Recent Invoices
                            </h3>
                            <Link href={route('invoices.index')} className="text-sm text-blue-500 hover:underline">View All</Link>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-col gap-4">
                                {recentInvoices.length === 0 ? (
                                    <p className="text-gray-500 text-sm">No invoices yet.</p>
                                ) : (
                                    recentInvoices.map((invoice) => (
                                        <div key={invoice.id} className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                                                    <FileText className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <h5 className="font-medium text-black dark:text-white">
                                                        {invoice.number}
                                                    </h5>
                                                    <span className="text-xs text-gray-500">{invoice.client?.name}</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-medium text-black dark:text-white">
                                                    ${invoice.total_amount}
                                                </p>
                                                <span className="text-xs text-gray-500">{invoice.status}</span>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
