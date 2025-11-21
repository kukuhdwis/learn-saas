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
    Route::get('invoices', [App\Http\Controllers\InvoiceController::class, 'index'])->name('invoices.index');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
