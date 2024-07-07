<?php

use App\Models\Board;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;

uses(RefreshDatabase::class);

beforeEach(function () {
    $this->user = User::factory()->create();
    $this->boards = Board::factory()->for($this->user)->count(3)->create();
});

test('when open home page should render home page and contains list of authorized boards data', function () {
    $response = $this->actingAs($this->user)->get('/home');

    $response
        ->assertStatus(200)
        ->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Home')
            ->whereType('boards', 'array')
            ->has('boards.0', fn (AssertableInertia $page) => $page
                ->where('id', $this->boards[0]->id)
                ->where('name', $this->boards[0]->name)
                ->where('description', $this->boards[0]->description)
                ->where('createdAt', $this->boards[0]->created_at->toJSON())
                ->where('updatedAt', $this->boards[0]->updated_at->toJSON())
                ->has('user', fn (AssertableInertia $page) => $page
                    ->where('id', $this->boards[0]->user->id)
                    ->where('name', $this->boards[0]->user->name)
                    ->where('email', $this->boards[0]->user->email)
                )
            )
        );
});
