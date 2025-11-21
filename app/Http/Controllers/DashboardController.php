<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use App\Models\Project;
use App\Models\Team;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        // For MVP, assuming single team context or aggregating all for the user
        // In a real multi-tenant app, we'd filter by current team
        
        $totalProjects = Project::count();
        $totalInvoices = Invoice::count();
        $totalRevenue = Invoice::sum('total_amount');
        $totalClients = \App\Models\Client::count();

        $recentProjects = Project::with('team')->latest()->take(5)->get();
        $recentInvoices = Invoice::with('client')->latest()->take(5)->get();

        return Inertia::render('dashboard', [
            'stats' => [
                'totalProjects' => $totalProjects,
                'totalInvoices' => $totalInvoices,
                'totalRevenue' => $totalRevenue,
                'totalClients' => $totalClients,
            ],
            'recentProjects' => $recentProjects,
            'recentInvoices' => $recentInvoices,
        ]);
    }
}
