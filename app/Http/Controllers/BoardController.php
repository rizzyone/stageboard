<?php

namespace App\Http\Controllers;

use App\Http\Resources\BoardCollection;
use App\Services\BoardService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class BoardController extends Controller
{
    public function __construct(
        private readonly BoardService $boardService,
    ) {
    }

    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $boards = $this->boardService->listByUser(Auth::user());

        return Inertia::render('Home', [
            'boards' => new BoardCollection($boards),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
