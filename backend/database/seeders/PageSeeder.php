<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Page::create([
            'title' => 'Home',
            'slug' => 'home',
            'content' => [
                [
                    'type' => 'hero',
                    'data' => [
                        'title' => 'Explore the Wild Heart of Tanzania',
                        'subtitle' => 'Unforgettable safaris and breathtaking landscapes await you.',
                        'image' => 'hero-safari.jpg',
                        'cta_text' => 'Book Your Safari',
                        'cta_link' => '#contact',
                    ],
                ],
                [
                    'type' => 'about',
                    'data' => [
                        'title' => 'Protecting Our Natural Heritage',
                        'content' => 'Tanzania Wildlife Management Authority (TAWA) is committed to conservation...',
                        'image' => 'dest-2.jpg',
                    ],
                ],
                [
                    'type' => 'stats',
                    'data' => [
                        'items' => [
                            ['label' => 'Game Reserves', 'value' => '25', 'suffix' => '+'],
                            ['label' => 'Wildlife Species', 'value' => '1000', 'suffix' => '+'],
                            ['label' => 'Annual Visitors', 'value' => '500', 'suffix' => 'K'],
                        ],
                    ],
                ],
                [
                    'type' => 'gallery',
                    'data' => [
                        'title' => 'Captured Moments',
                        'images' => [
                            ['src' => 'dest-1.jpg', 'alt' => 'Aerial view', 'category' => 'Landscape'],
                            ['src' => 'dest-2.jpg', 'alt' => 'Lion', 'category' => 'Wildlife'],
                        ],
                    ],
                ],
            ],
        ]);
    }
}
