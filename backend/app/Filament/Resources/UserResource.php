<?php

namespace App\Filament\Resources;

use App\Filament\Resources\UserResource\Pages;
use App\Models\User;
use App\RoleEnum;
use App\Models\Destination;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Support\Facades\Hash;

class UserResource extends Resource
{
    protected static ?string $model = User::class;
    protected static ?string $navigationIcon = 'heroicon-o-users';

    public static function canViewAny(): bool
    {
        return auth()->user()?->role === RoleEnum::SUPER_ADMIN;
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')->required(),
                Forms\Components\TextInput::make('email')->email()->required()->unique(ignoreRecord: true),
                Forms\Components\TextInput::make('password')
                    ->password()
                    ->dehydrateStateUsing(fn($state) => Hash::make($state))
                    ->dehydrated(fn($state) => filled($state))
                    ->required(fn(string $context): bool => $context === 'create'),
                Forms\Components\Select::make('role')
                    ->options([
                        RoleEnum::SUPER_ADMIN->value => 'Super Admin',
                        RoleEnum::DESTINATION_ADMIN->value => 'Destination Admin',
                        RoleEnum::MEDIA_ADMIN->value => 'Media Admin',
                    ])
                    ->required()
                    ->native(false)
                    ->live(),
                Forms\Components\Select::make('destination_id')
                    ->label('Assigned Destination')
                    ->options(Destination::all()->pluck('name', 'id'))
                    ->visible(fn(Forms\Get $get) => $get('role') === RoleEnum::DESTINATION_ADMIN->value)
                    ->required(fn(Forms\Get $get) => $get('role') === RoleEnum::DESTINATION_ADMIN->value)
                    ->searchable()
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')->searchable(),
                Tables\Columns\TextColumn::make('email')->searchable(),
                Tables\Columns\TextColumn::make('role')->badge(),
                Tables\Columns\TextColumn::make('destination.name')->label('Location')->placeholder('N/A'),
            ])
            ->filters([])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                // Tables\Actions\DeleteBulkAction::make(),
            ])
            ->paginated(false);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ManageUsers::route('/'),
        ];
    }
}
