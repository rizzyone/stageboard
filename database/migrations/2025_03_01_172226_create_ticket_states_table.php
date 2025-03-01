<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ticket_states', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name', 20);
            $table->uuid('before_id')->nullable();
            $table->foreignUuid('project_id')->nullable()->constrained();
        });

        $uuids = collect(range(1, 3))->map(fn () => Str::uuid());

        DB::table('ticket_states')->insert([
            ['id' => $uuids[0], 'name' => 'Open', 'before_id' => null],
            ['id' => $uuids[1], 'name' => 'Progress', 'before_id' => $uuids[0]],
            ['id' => $uuids[2], 'name' => 'Closed', 'before_id' => $uuids[1]],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ticket_states');
    }
};
