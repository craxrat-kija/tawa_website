<?php

namespace App\Filament\Resources;

use App\Filament\Resources\NewsResource\Pages;
use App\Models\News;
use App\Models\Destination;
use App\RoleEnum;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;

class NewsResource extends Resource
{
    protected static ?string $model = News::class;
    protected static ?string $navigationIcon = 'heroicon-o-newspaper';

    public static function canViewAny(): bool
    {
        $user = auth()->user();
        return in_array($user?->role, [RoleEnum::SUPER_ADMIN, RoleEnum::DESTINATION_ADMIN, RoleEnum::MEDIA_ADMIN]);
    }

    public static function canCreate(): bool
    {
        $user = auth()->user();
        return in_array($user?->role, [RoleEnum::SUPER_ADMIN, RoleEnum::DESTINATION_ADMIN]);
    }

    public static function canEdit($record): bool
    {
        $user = auth()->user();
        return $user?->role === RoleEnum::SUPER_ADMIN || ($user?->role === RoleEnum::DESTINATION_ADMIN && $user->destination_id === $record->destination_id);
    }

    public static function canDelete($record): bool
    {
        $user = auth()->user();
        return $user?->role === RoleEnum::SUPER_ADMIN || ($user?->role === RoleEnum::DESTINATION_ADMIN && $user->destination_id === $record->destination_id);
    }

    protected static function getGlobalSearchBuilder(Builder $builder): Builder
    {
        return parent::getGlobalSearchBuilder($builder)->with(['destination']);
    }

    public static function getEloquentQuery(): Builder
    {
        $query = parent::getEloquentQuery();

        $user = Auth::user();
        if ($user && $user->role === RoleEnum::DESTINATION_ADMIN) {
            return $query->where('destination_id', $user->destination_id);
        }

        return $query;
    }

    public static function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\Section::make('Article Content')
                ->schema([
                    Forms\Components\TextInput::make('title')->required()->live(onBlur: true),
                    Forms\Components\TextInput::make('slug')->required()->unique(ignoreRecord: true),
                    Forms\Components\RichEditor::make('content')->required(),
                    Forms\Components\FileUpload::make('image')
                        ->image()
                        ->directory('news')
                        ->columnSpanFull(),
                ])->columnSpan(2),

            Forms\Components\Section::make('Meta Info')
                ->schema([
                    Forms\Components\DateTimePicker::make('published_at')->default(now()),
                    Forms\Components\Select::make('destination_id')
                        ->relationship('destination', 'name')
                        ->placeholder('Global News')
                        ->disabled(fn() => Auth::user()?->role === RoleEnum::DESTINATION_ADMIN)
                        ->default(fn() => Auth::user()?->destination_id)
                        ->searchable()
                        ->helperText('Assign to a specific location or leave blank for global news.'),
                ])->columnSpan(1),
        ])->columns(3);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('image')->square(),
                Tables\Columns\TextColumn::make('title')->searchable()->limit(50),
                Tables\Columns\TextColumn::make('destination.name')->label('Location')->badge()->color('gray')->placeholder('Global'),
                Tables\Columns\TextColumn::make('published_at')->dateTime()->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('destination_id')
                    ->relationship('destination', 'name')
                    ->label('Filter by Location'),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ManageNews::route('/'),
        ];
    }
}
