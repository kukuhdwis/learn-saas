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
}
