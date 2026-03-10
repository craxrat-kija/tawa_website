<?php

namespace App\Filament\Resources;

use App\Filament\Resources\DestinationResource\Pages;
use App\Models\Destination;
use App\RoleEnum;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;

class DestinationResource extends Resource
{
    protected static ?string $model = Destination::class;
    protected static ?string $navigationIcon = 'heroicon-o-map-pin';

    public static function canViewAny(): bool
    {
        $user = auth()->user();
        return in_array($user?->role, [RoleEnum::SUPER_ADMIN, RoleEnum::DESTINATION_ADMIN]);
    }

    public static function canCreate(): bool
    {
        $user = auth()->user();
        return $user?->role === RoleEnum::SUPER_ADMIN;
    }

    public static function canEdit($record): bool
    {
        $user = auth()->user();
        return $user?->role === RoleEnum::SUPER_ADMIN || ($user?->role === RoleEnum::DESTINATION_ADMIN && $user->destination_id === $record->id);
    }

    public static function canDelete($record): bool
    {
        $user = auth()->user();
        return $user?->role === RoleEnum::SUPER_ADMIN;
    }

    public static function getEloquentQuery(): Builder
    {
        $query = parent::getEloquentQuery();

        $user = Auth::user();
        if ($user && $user->role === RoleEnum::DESTINATION_ADMIN) {
            return $query->where('id', $user->destination_id);
        }

        return $query;
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')->required()->live(onBlur: true),
                Forms\Components\TextInput::make('slug')->required()->unique(ignoreRecord: true),
                Forms\Components\RichEditor::make('description')->columnSpanFull(),
                Forms\Components\FileUpload::make('image')
                    ->image()
                    ->directory('destinations')
                    ->columnSpanFull(),
                Forms\Components\Select::make('type')
                    ->options([
                        'Game Reserve' => 'Game Reserve',
                        'Nature Reserve' => 'Nature Reserve',
                        'Forest Reserve' => 'Forest Reserve',
                    ])
                    ->required(),
                Forms\Components\TextInput::make('location')->placeholder('District, Region'),
                Forms\Components\TextInput::make('map_link')->url()->placeholder('Google Maps Link'),
                Forms\Components\Toggle::make('is_active')->default(true)->inline(false),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('image')->circular(),
                Tables\Columns\TextColumn::make('name')->searchable()->sortable(),
                Tables\Columns\TextColumn::make('type'),
                Tables\Columns\TextColumn::make('location')->placeholder('Unknown'),
                Tables\Columns\IconColumn::make('is_active')->boolean()->label('Status'),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('type')
                    ->options([
                        'Game Reserve' => 'Game Reserve',
                        'Nature Reserve' => 'Nature Reserve',
                    ]),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                // Tables\Actions\DeleteBulkAction::make(),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ManageDestinations::route('/'),
        ];
    }
}
