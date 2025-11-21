<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $fillable = ['team_id', 'name', 'email'];

    public function team()
    {
        return $this->belongsTo(Team::class);
    }

    public function invoices()
    {
        return $this->hasMany(Invoice::class);
    }
}
