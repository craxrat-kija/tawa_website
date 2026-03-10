<?php

namespace App;

enum RoleEnum: string
{
    case SUPER_ADMIN = 'super_admin';
    case DESTINATION_ADMIN = 'destination_admin';
    case MEDIA_ADMIN = 'media_admin';
}
