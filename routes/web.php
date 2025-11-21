<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('projects', [App\Http\Controllers\ProjectController::class, 'index'])->name('projects.index');
    Route::get('projects/create', [App\Http\Controllers\ProjectController::class, 'create'])->name('projects.create');
    Route::post('projects', [App\Http\Controllers\ProjectController::class, 'store'])->name('projects.store');
    
    Route::get('invoices', [App\Http\Controllers\InvoiceController::class, 'index'])->name('invoices.index');
    Route::get('invoices/create', [App\Http\Controllers\InvoiceController::class, 'create'])->name('invoices.create');
    Route::post('invoices', [App\Http\Controllers\InvoiceController::class, 'store'])->name('invoices.store');

    Route::get('tools', [App\Http\Controllers\ToolController::class, 'index'])->name('tools.index');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
