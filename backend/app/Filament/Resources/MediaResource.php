<?php

namespace App\Filament\Resources;

use App\Filament\Resources\MediaResource\Pages;
use App\Models\Media;
use App\RoleEnum;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;

class MediaResource extends Resource
{
    protected static ?string $model = Media::class;
    protected static ?string $navigationIcon = 'heroicon-o-photo';

    public static function canViewAny(): bool
    {
        $user = auth()->user();
        return in_array($user?->role, [RoleEnum::SUPER_ADMIN, RoleEnum::MEDIA_ADMIN, RoleEnum::DESTINATION_ADMIN]);
    }

    public static function canCreate(): bool
    {
        $user = auth()->user();
        return in_array($user?->role, [RoleEnum::SUPER_ADMIN, RoleEnum::MEDIA_ADMIN]);
    }

    public static function canEdit($record): bool
    {
        $user = auth()->user();
        return in_array($user?->role, [RoleEnum::SUPER_ADMIN, RoleEnum::MEDIA_ADMIN]);
    }

    public static function canDelete($record): bool
    {
        $user = auth()->user();
        return in_array($user?->role, [RoleEnum::SUPER_ADMIN, RoleEnum::MEDIA_ADMIN]);
    }

    public static function getEloquentQuery(): Builder
    {
        $query = parent::getEloquentQuery();

        $user = Auth::user();

        // Media Admins and Super Admins get full management access
        if ($user && in_array($user->role, [RoleEnum::SUPER_ADMIN, RoleEnum::MEDIA_ADMIN])) {
            return $query;
        }

        // Destination admins are restricted to featured/view-only
        if ($user && $user->role === RoleEnum::DESTINATION_ADMIN) {
            return $query->where('is_featured', true);
        }

        return $query;
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title')->required(),
                Forms\Components\Select::make('type')
                    ->options([
                        'Banner' => 'Banner (Homepage)',
                        'Gallery' => 'Gallery Collection',
                        'Video' => 'Video Snippet',
                    ])
                    ->required(),
                Forms\Components\FileUpload::make('file_path')
                    ->label('Media File')
                    ->image()
                    ->directory('media')
                    ->columnSpanFull()
                    ->required(),
                Forms\Components\Toggle::make('is_featured')
                    ->label('Feature on Homepage')
                    ->default(false),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('file_path')->square(),
                Tables\Columns\TextColumn::make('title')->searchable(),
                Tables\Columns\TextColumn::make('type')->badge(),
                Tables\Columns\IconColumn::make('is_featured')->boolean()->label('Featured'),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('type')
                    ->options([
                        'Banner' => 'Banner',
                        'Gallery' => 'Gallery',
                    ]),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ManageMedia::route('/'),
        ];
    }
}
