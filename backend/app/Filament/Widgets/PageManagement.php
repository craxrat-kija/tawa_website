<?php

namespace App\Filament\Widgets;

use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;

class PageManagement extends BaseWidget
{
    protected int|string|array $columnSpan = 'full';

    public static function canView(): bool
    {
        return in_array(auth()->user()?->role, [\App\RoleEnum::SUPER_ADMIN, \App\RoleEnum::MEDIA_ADMIN]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->query(
                fn() => \App\Models\Page::query()
            )
            ->columns([
                Tables\Columns\TextColumn::make('title')->label('Page Name'),
                Tables\Columns\TextColumn::make('slug')->badge(),
                Tables\Columns\TextColumn::make('updated_at')->dateTime()->label('Last Modified'),
            ])
            ->actions([
                Tables\Actions\Action::make('edit_layout')
                    ->label('Customize Structure')
                    ->icon('heroicon-o-puzzle-piece')
                    ->color('warning')
                    ->url(fn(\App\Models\Page $record): string => \App\Filament\Resources\PageResource::getUrl('index', ['record' => $record])), // PageResource is simple, so it uses index
            ]);
    }
}
