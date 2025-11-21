import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

export default function InvoicesIndex({ invoices }: { invoices: any[] }) {
    return (
        <AppLayout breadcrumbs={[{ title: 'Invoices', href: '/invoices' }]}>
            <Head title="Invoices" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Invoices</h1>
                    <Link
                        href={route('invoices.create')}
                        className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
                    >
                        New Invoice
                    </Link>
                </div>

                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 rounded-xl border md:min-h-min">
                    <div className="p-4">
                        {invoices.length === 0 ? (
                            <div className="text-center text-gray-500">
                                No invoices found. Create one to get started.
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead className="border-b">
                                        <tr>
                                            <th className="px-4 py-2">Number</th>
                                            <th className="px-4 py-2">Client</th>
                                            <th className="px-4 py-2">Amount</th>
                                            <th className="px-4 py-2">Status</th>
                                            <th className="px-4 py-2">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {invoices.map((invoice) => (
                                            <tr key={invoice.id} className="border-b hover:bg-gray-50">
                                                <td className="px-4 py-2 font-medium">{invoice.number}</td>
                                                <td className="px-4 py-2">{invoice.client?.name}</td>
                                                <td className="px-4 py-2">${invoice.total_amount}</td>
                                                <td className="px-4 py-2">
                                                    <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-semibold">
                                                        {invoice.status}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-2">{invoice.issue_date}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
