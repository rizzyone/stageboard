<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

/**
 * 
 *
 * @property string $id
 * @property string $code
 * @property string $name
 * @property string|null $description
 * @property string $color_hex
 * @property string|null $picture
 * @property bool $is_public
 * @property string $owner_type
 * @property string $owner_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read Model|\Eloquent $owner
 * @method static \Database\Factories\ProjectFactory factory($count = null, $state = [])
 * @method static Builder<static>|Project newModelQuery()
 * @method static Builder<static>|Project newQuery()
 * @method static Builder<static>|Project query()
 * @method static Builder<static>|Project whereCode($value)
 * @method static Builder<static>|Project whereColorHex($value)
 * @method static Builder<static>|Project whereCreatedAt($value)
 * @method static Builder<static>|Project whereDescription($value)
 * @method static Builder<static>|Project whereId($value)
 * @method static Builder<static>|Project whereIsPublic($value)
 * @method static Builder<static>|Project whereName($value)
 * @method static Builder<static>|Project whereOwner(\App\Models\User $owner)
 * @method static Builder<static>|Project whereOwnerId($value)
 * @method static Builder<static>|Project whereOwnerType($value)
 * @method static Builder<static>|Project wherePicture($value)
 * @method static Builder<static>|Project whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Project extends Model
{
    use HasUuids, HasFactory;

    protected $fillable = [
        'code',
        'name',
        'description',
        'color_hex',
        'picture',
        'is_public',
    ];

    public function owner(): MorphTo
    {
        return $this->morphTo();
    }

    public function scopeWhereOwner(Builder $query, User $owner): Builder
    {
        return $query
            ->whereOwnerId($owner->id)
            ->whereOwnerType(User::class);
    }
}
