<?php

namespace App\Filament\Widgets;

use App\Models\Media;
use App\RoleEnum;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Illuminate\Support\Facades\Auth;

class MediaStats extends BaseWidget
{
    public static function canView(): bool
    {
        $user = Auth::user();
        return $user && in_array($user->role, [RoleEnum::SUPER_ADMIN, RoleEnum::MEDIA_ADMIN]);
    }

    protected function getStats(): array
    {
        return [
            Stat::make('Homepage Banners', Media::where('type', 'Banner')->count())
                ->description('Active hero sliders')
                ->descriptionIcon('heroicon-m-photo')
                ->color('success'),
            Stat::make('Gallery Items', Media::where('type', 'Gallery')->count())
                ->description('Public photo collections')
                ->descriptionIcon('heroicon-m-rectangle-group')
                ->color('info'),
            Stat::make('Featured Media', Media::where('is_featured', true)->count())
                ->description('Shown on landing page')
                ->descriptionIcon('heroicon-m-star')
                ->color('warning'),
        ];
    }
}
