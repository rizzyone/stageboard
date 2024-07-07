<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Database\Eloquent\Collection;

interface BoardService
{

    public function listByUser(User $user): Collection;

}
