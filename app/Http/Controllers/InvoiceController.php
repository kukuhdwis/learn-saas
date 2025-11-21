<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InvoiceController extends Controller
{
    public function index()
    {
        return Inertia::render('invoices/index', [
            'invoices' => Invoice::with(['client', 'team'])->get()
        ]);
    }

    public function create()
    {
        // We need clients to select from.
        // For MVP, if no clients exist, we might need to create one on the fly or show empty list.
        $team = \App\Models\Team::first(); // Simplification for MVP
        $clients = $team ? $team->clients : [];

        return Inertia::render('invoices/create', [
            'clients' => $clients
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'client_name' => 'required|string|max:255', // Simplified: Create client on fly
            'client_email' => 'nullable|email',
            'issue_date' => 'required|date',
            'items' => 'required|array|min:1',
            'items.*.description' => 'required|string',
            'items.*.quantity' => 'required|integer|min:1',
            'items.*.price' => 'required|numeric|min:0',
        ]);

        $team = \App\Models\Team::firstOrCreate(
            ['slug' => 'default-team'],
            ['name' => 'Default Team', 'owner_id' => auth()->id()]
        );

        // Find or create client
        $client = $team->clients()->firstOrCreate(
            ['name' => $validated['client_name']],
            ['email' => $validated['client_email']]
        );

        // Calculate total
        $total = collect($validated['items'])->sum(function ($item) {
            return $item['quantity'] * $item['price'];
        });

        $invoice = $team->invoices()->create([
            'client_id' => $client->id,
            'number' => 'INV-' . strtoupper(uniqid()),
            'issue_date' => $validated['issue_date'],
            'status' => 'draft',
            'total_amount' => $total,
        ]);

        foreach ($validated['items'] as $item) {
            $invoice->items()->create($item);
        }

        return redirect()->route('invoices.index');
    }
}
