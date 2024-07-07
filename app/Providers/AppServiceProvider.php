<?php

namespace App\Providers;

use App\Services\BoardService;
use App\Services\Internal\BoardServiceImpl;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public $singletons = [
        BoardService::class => BoardServiceImpl::class,
    ];

    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Model::shouldBeStrict();
        JsonResource::withoutWrapping();
    }
}
