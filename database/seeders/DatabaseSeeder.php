<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory(30)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        $this->call([
            // RoleAndPermissionSeeder::class,
            Roles::class,
            // UserSeeder::class,
            RegionSeeder::class,
            CountrySeeder::class,
            MaritalStatusSeeder::class,
            TypeOfApplicantSeeder::class,
            TypeofInvestment::class,
       GenderSeeder::class,


        ]);
    }
}
