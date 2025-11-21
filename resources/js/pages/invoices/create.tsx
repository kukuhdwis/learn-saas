import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { FormEventHandler } from 'react';
import { Plus, Trash } from 'lucide-react';

export default function InvoiceCreate() {
    const { data, setData, post, processing, errors } = useForm({
        client_name: '',
        client_email: '',
        issue_date: new Date().toISOString().split('T')[0],
        items: [{ description: '', quantity: 1, price: 0 }],
    });

    const addItem = () => {
        setData('items', [...data.items, { description: '', quantity: 1, price: 0 }]);
    };

    const removeItem = (index: number) => {
        const newItems = [...data.items];
        newItems.splice(index, 1);
        setData('items', newItems);
    };

    const updateItem = (index: number, field: string, value: any) => {
        const newItems = [...data.items];
        newItems[index] = { ...newItems[index], [field]: value };
        setData('items', newItems);
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('invoices.store'));
    };

    const total = data.items.reduce((sum, item) => sum + (item.quantity * item.price), 0);

    return (
        <AppLayout breadcrumbs={[
            { title: 'Invoices', href: '/invoices' },
            { title: 'Create', href: '/invoices/create' }
        ]}>
            <Head title="Create Invoice" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="max-w-3xl">
                    <h1 className="mb-6 text-2xl font-bold">Create New Invoice</h1>

                    <form onSubmit={submit} className="space-y-8">
                        {/* Client Info */}
                        <div className="grid gap-4 md:grid-cols-2">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Client Name</label>
                                <input
                                    type="text"
                                    value={data.client_name}
                                    onChange={e => setData('client_name', e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black dark:bg-gray-800 dark:border-gray-700"
                                    required
                                />
                                {errors.client_name && <div className="text-sm text-red-600">{errors.client_name}</div>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Client Email</label>
                                <input
                                    type="email"
                                    value={data.client_email}
                                    onChange={e => setData('client_email', e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black dark:bg-gray-800 dark:border-gray-700"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Issue Date</label>
                            <input
                                type="date"
                                value={data.issue_date}
                                onChange={e => setData('issue_date', e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black dark:bg-gray-800 dark:border-gray-700"
                                required
                            />
                        </div>

                        {/* Items */}
                        <div>
                            <h3 className="mb-2 text-lg font-medium">Items</h3>
                            <div className="space-y-4">
                                {data.items.map((item, index) => (
                                    <div key={index} className="flex gap-4 items-end">
                                        <div className="flex-1">
                                            <label className="block text-xs text-gray-500">Description</label>
                                            <input
                                                type="text"
                                                value={item.description}
                                                onChange={e => updateItem(index, 'description', e.target.value)}
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black dark:bg-gray-800 dark:border-gray-700"
                                                required
                                            />
                                        </div>
                                        <div className="w-20">
                                            <label className="block text-xs text-gray-500">Qty</label>
                                            <input
                                                type="number"
                                                min="1"
                                                value={item.quantity}
                                                onChange={e => updateItem(index, 'quantity', parseInt(e.target.value))}
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black dark:bg-gray-800 dark:border-gray-700"
                                                required
                                            />
                                        </div>
                                        <div className="w-32">
                                            <label className="block text-xs text-gray-500">Price</label>
                                            <input
                                                type="number"
                                                min="0"
                                                step="0.01"
                                                value={item.price}
                                                onChange={e => updateItem(index, 'price', parseFloat(e.target.value))}
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black dark:bg-gray-800 dark:border-gray-700"
                                                required
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => removeItem(index)}
                                            className="p-2 text-red-500 hover:text-red-700"
                                            disabled={data.items.length === 1}
                                        >
                                            <Trash className="h-5 w-5" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <button
                                type="button"
                                onClick={addItem}
                                className="mt-4 flex items-center text-sm font-medium text-black hover:underline dark:text-white"
                            >
                                <Plus className="mr-1 h-4 w-4" /> Add Item
                            </button>
                        </div>

                        <div className="flex items-center justify-between border-t pt-4">
                            <div className="text-xl font-bold">
                                Total: ${total.toFixed(2)}
                            </div>
                            <button
                                type="submit"
                                disabled={processing}
                                className="rounded-md bg-black px-6 py-2 text-sm font-semibold text-white hover:bg-gray-800 disabled:opacity-50"
                            >
                                Create Invoice
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
