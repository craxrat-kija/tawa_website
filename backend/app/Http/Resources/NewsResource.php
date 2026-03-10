<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class NewsResource extends JsonResource
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
            'slug' => $this->slug,
            'content' => $this->content,
            'image' => $this->image ? asset('storage/' . $this->image) : null,
            'published_at' => $this->published_at,
            'destination' => new DestinationResource($this->whenLoaded('destination')),
            'destination_id' => $this->destination_id,
            'created_at' => $this->created_at,
        ];
    }
}
