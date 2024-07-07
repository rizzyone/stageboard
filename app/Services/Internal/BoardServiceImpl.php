<?php

namespace App\Services\Internal;

use App\Models\Board;
use App\Models\User;
use App\Services\BoardService;
use Illuminate\Database\Eloquent\Collection;

class BoardServiceImpl implements BoardService
{

    public function listByUser(User $user): Collection
    {
        return Board::with('user:id,name,email')->whereUserId($user->id)->get();
    }
}
