<?php

namespace App\Filament\Widgets;

use App\Models\News;
use App\Models\Destination;
use App\RoleEnum;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;
use Illuminate\Support\Facades\Auth;

class RecentNews extends BaseWidget
{
    protected static ?int $sort = 2;
    protected int|string|array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        return $table
            ->query(
                News::query()->latest()->limit(5)
                    ->when(
                        Auth::user()?->role === RoleEnum::DESTINATION_ADMIN,
                        fn($query) => $query->where('destination_id', Auth::user()->destination_id)
                    )
            )
            ->columns([
                Tables\Columns\TextColumn::make('title')->label('Latest News'),
                Tables\Columns\TextColumn::make('destination.name')->badge()->color('emerald')->placeholder('Global'),
                Tables\Columns\TextColumn::make('created_at')->dateTime()->label('Posted'),
            ]);
    }
}
