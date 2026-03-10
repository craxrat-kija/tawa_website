<?php

namespace App\Filament\Widgets;

use App\Models\Destination;
use App\Models\News;
use App\Models\User;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverview extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Total Destinations', Destination::count())
                ->description('13 active game reserves')
                ->descriptionIcon('heroicon-m-map')
                ->color('success'),
            Stat::make('News Articles', News::count())
                ->description('Recent updates & events')
                ->descriptionIcon('heroicon-m-newspaper')
                ->color('warning'),
            Stat::make('Total Administrators', User::count())
                ->description('Super, Regional, & Media')
                ->descriptionIcon('heroicon-m-users')
                ->color('info'),
        ];
    }
}
