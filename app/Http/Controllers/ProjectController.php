<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index()
    {
        return Inertia::render('projects/index', [
            'projects' => Project::with('team')->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('projects/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'status' => 'required|in:active,archived,completed',
        ]);

        // Assuming single team for now, or get from user context
        // For this MVP, we'll just use the first team found or create one if missing
        $team = \App\Models\Team::firstOrCreate(
            ['slug' => 'default-team'],
            ['name' => 'Default Team', 'owner_id' => auth()->id()]
        );

        $team->projects()->create($validated);

        return redirect()->route('projects.index');
    }
}
