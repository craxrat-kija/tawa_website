<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MediaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'type' => $this->type,
            'file_path' => $this->file_path ? asset('storage/' . $this->file_path) : null,
            'is_featured' => (bool) $this->is_featured,
            'created_at' => $this->created_at,
        ];
    }
}
