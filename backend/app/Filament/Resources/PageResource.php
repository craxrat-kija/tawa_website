<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PageResource\Pages;
use App\Filament\Resources\PageResource\RelationManagers;
use App\Models\Page;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class PageResource extends Resource
{
    protected static ?string $model = Page::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-duplicate';
    protected static ?string $navigationLabel = 'Page Layouts';

    public static function canViewAny(): bool
    {
        $user = auth()->user();
        return in_array($user?->role, [\App\RoleEnum::SUPER_ADMIN, \App\RoleEnum::MEDIA_ADMIN]);
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('General Info')
                    ->schema([
                        Forms\Components\TextInput::make('title')
                            ->required()
                            ->live(onBlur: true)
                            ->afterStateUpdated(fn(Forms\Set $set, ?string $state) => $set('slug', \Illuminate\Support\Str::slug($state))),
                        Forms\Components\TextInput::make('slug')
                            ->disabled()
                            ->dehydrated()
                            ->required()
                            ->unique(Page::class, 'slug', ignoreRecord: true),
                    ])->columns(2),

                Forms\Components\Builder::make('content')
                    ->label('Page Structure (Drag to reorder)')
                    ->blocks([
                        Forms\Components\Builder\Block::make('hero')
                            ->label('Hero Section')
                            ->icon('heroicon-m-presentation-chart-line')
                            ->schema([
                                Forms\Components\TextInput::make('title')->required(),
                                Forms\Components\Textarea::make('subtitle'),
                                Forms\Components\FileUpload::make('image')->image()->directory('page-content'),
                                Forms\Components\TextInput::make('cta_text')->label('Call to Action Text'),
                                Forms\Components\TextInput::make('cta_link')->label('Call to Action Link'),
                            ]),

                        Forms\Components\Builder\Block::make('about')
                            ->label('About Section')
                            ->icon('heroicon-m-information-circle')
                            ->schema([
                                Forms\Components\TextInput::make('title')->required(),
                                Forms\Components\RichEditor::make('content')->required(),
                                Forms\Components\FileUpload::make('image')->image()->directory('page-content'),
                            ]),

                        Forms\Components\Builder\Block::make('stats')
                            ->label('Stats Section')
                            ->icon('heroicon-m-chart-bar')
                            ->schema([
                                Forms\Components\Repeater::make('items')
                                    ->schema([
                                        Forms\Components\TextInput::make('label')->required(),
                                        Forms\Components\TextInput::make('value')->required(),
                                        Forms\Components\TextInput::make('suffix'),
                                    ])->columns(3),
                            ]),

                        Forms\Components\Builder\Block::make('gallery')
                            ->label('Gallery Grid')
                            ->icon('heroicon-m-photo')
                            ->schema([
                                Forms\Components\TextInput::make('title')->default('Captured Moments'),
                                Forms\Components\Repeater::make('images')
                                    ->schema([
                                        Forms\Components\FileUpload::make('src')->image()->directory('gallery')->required(),
                                        Forms\Components\TextInput::make('alt'),
                                        Forms\Components\TextInput::make('category'),
                                    ])->columns(3),
                            ]),

                        Forms\Components\Builder\Block::make('rich_text')
                            ->label('Rich Text Content')
                            ->icon('heroicon-m-bars-3-bottom-left')
                            ->schema([
                                Forms\Components\RichEditor::make('content')->required(),
                            ]),
                    ])
                    ->columnSpanFull()
                    ->collapsible()
                    ->collapsed() // Keeps it tidy initially
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')->searchable(),
                Tables\Columns\TextColumn::make('slug')->badge()->color('gray'),
                Tables\Columns\TextColumn::make('updated_at')->dateTime()->sortable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ManagePages::route('/'),
        ];
    }
}
