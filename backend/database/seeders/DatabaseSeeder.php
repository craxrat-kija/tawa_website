<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Destination;
use App\RoleEnum;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $reserves = [
            'Selous Game Reserve',
            'Ikorongo Game Reserve',
            'Grumeti Game Reserve',
            'Maswa Game Reserve',
            'Moyowosi Game Reserve',
            'Pande Game Reserve',
            'Lukwati Game Reserve',
            'Piti Game Reserve',
            'Kigosi Game Reserve',
            'Ugalla River Game Reserve',
            'Liparamba Game Reserve',
            'Kizigo Game Reserve',
            'Muhesi Game Reserve'
        ];

        foreach ($reserves as $reserve) {
            Destination::create([
                'name' => $reserve,
                'slug' => Str::slug($reserve),
                'description' => "Official $reserve managed by TAWA.",
                'type' => 'Game Reserve',
                'is_active' => true,
            ]);
        }

        // Create Super Admin
        User::create([
            'name' => 'Super Admin',
            'email' => 'admin@tawa.go.tz',
            'password' => Hash::make('password'),
            'role' => RoleEnum::SUPER_ADMIN,
        ]);

        // Create a Destination Admin for Selous
        $selous = Destination::where('name', 'Selous Game Reserve')->first();
        User::create([
            'name' => 'Selous Manager',
            'email' => 'selous@tawa.go.tz',
            'password' => Hash::make('password'),
            'role' => RoleEnum::DESTINATION_ADMIN,
            'destination_id' => $selous->id,
        ]);

        // Create a Media Admin
        User::create([
            'name' => 'Media Officer',
            'email' => 'media@tawa.go.tz',
            'password' => Hash::make('password'),
            'role' => RoleEnum::MEDIA_ADMIN,
        ]);
    }
}
