<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ToolController extends Controller
{
    public function index()
    {
        return Inertia::render('tools/index', [
            'tools' => [
                [
                    'id' => 'projects',
                    'name' => 'Projects',
                    'description' => 'Manage your team projects and tasks efficiently.',
                    'icon' => 'Folder',
                    'href' => route('projects.index'),
                    'status' => 'Installed',
                ],
                [
                    'id' => 'invoices',
                    'name' => 'Invoices',
                    'description' => 'Create and send professional invoices to clients.',
                    'icon' => 'BookOpen',
                    'href' => route('invoices.index'),
                    'status' => 'Installed',
                ],
                [
                    'id' => 'notes',
                    'name' => 'Notes',
                    'description' => 'Collaborative notes for your team ideas.',
                    'icon' => 'FileText',
                    'href' => '#',
                    'status' => 'Coming Soon',
                ],
                [
                    'id' => 'crm',
                    'name' => 'CRM',
                    'description' => 'Customer Relationship Management made simple.',
                    'icon' => 'Users',
                    'href' => '#',
                    'status' => 'Coming Soon',
                ],
            ]
        ]);
    }
}
