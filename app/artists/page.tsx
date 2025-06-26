"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Music, MapPin, DollarSign, Star } from "lucide-react"

// Mock artist data
const artists = [
  {
    id: 1,
    name: "Sarah Johnson",
    category: "singers",
    location: "New York",
    priceRange: "500-1000",
    rating: 4.8,
    image: "/placeholder.svg?height=200&width=200",
    bio: "Professional vocalist with 10+ years experience",
    languages: ["English", "Spanish"],
  },
  {
    id: 2,
    name: "Mike Chen",
    category: "djs",
    location: "Los Angeles",
    priceRange: "300-800",
    rating: 4.9,
    image: "/placeholder.svg?height=200&width=200",
    bio: "Electronic music specialist and party DJ",
    languages: ["English", "Mandarin"],
  },
  {
    id: 3,
    name: "Dance Collective",
    category: "dancers",
    location: "Chicago",
    priceRange: "800-1500",
    rating: 4.7,
    image: "/placeholder.svg?height=200&width=200",
    bio: "Contemporary dance troupe for events",
    languages: ["English"],
  },
  {
    id: 4,
    name: "Jazz Quartet",
    category: "musicians",
    location: "New York",
    priceRange: "1000-2000",
    rating: 4.9,
    image: "/placeholder.svg?height=200&width=200",
    bio: "Professional jazz ensemble for elegant events",
    languages: ["English"],
  },
  {
    id: 5,
    name: "Emma Rodriguez",
    category: "singers",
    location: "Miami",
    priceRange: "400-900",
    rating: 4.6,
    image: "/placeholder.svg?height=200&width=200",
    bio: "Latin music specialist and wedding singer",
    languages: ["English", "Spanish", "Portuguese"],
  },
  {
    id: 6,
    name: "Beat Master",
    category: "djs",
    location: "Chicago",
    priceRange: "200-600",
    rating: 4.5,
    image: "/placeholder.svg?height=200&width=200",
    bio: "Hip-hop and R&B DJ for all occasions",
    languages: ["English"],
  },
]

const categories = ["all", "singers", "dancers", "djs", "musicians"]
const locations = ["all", "New York", "Los Angeles", "Chicago", "Miami"]
const priceRanges = ["all", "200-600", "300-800", "400-900", "500-1000", "800-1500", "1000-2000"]

export default function ArtistsPage() {
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [locationFilter, setLocationFilter] = useState("all")
  const [priceFilter, setPriceFilter] = useState("all")

  const filteredArtists = useMemo(() => {
    return artists.filter((artist) => {
      const categoryMatch = categoryFilter === "all" || artist.category === categoryFilter
      const locationMatch = locationFilter === "all" || artist.location === locationFilter
      const priceMatch = priceFilter === "all" || artist.priceRange === priceFilter

      return categoryMatch && locationMatch && priceMatch
    })
  }, [categoryFilter, locationFilter, priceFilter])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Music className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">Artistly</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/artists" className="text-foreground font-medium">
                Browse Artists
              </Link>
              <Link href="/onboard" className="text-muted-foreground hover:text-foreground">
                Join as Artist
              </Link>
              <Link href="/dashboard" className="text-muted-foreground hover:text-foreground">
                Dashboard
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Browse Artists</h1>
          <p className="text-muted-foreground">Discover talented performers for your next event</p>
        </div>

        {/* Filters */}
        <div className="mb-8 p-4 bg-muted/50 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Category</label>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Location</label>
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location === "all" ? "All Locations" : location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Price Range ($)</label>
              <Select value={priceFilter} onValueChange={setPriceFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Select price range" />
                </SelectTrigger>
                <SelectContent>
                  {priceRanges.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range === "all" ? "All Prices" : `$${range}`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-muted-foreground">
            Showing {filteredArtists.length} artist{filteredArtists.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Artist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtists.map((artist) => (
            <Card key={artist.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Music className="h-12 w-12 text-muted-foreground" />
                </div>
                <CardTitle className="flex items-center justify-between">
                  {artist.name}
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{artist.rating}</span>
                  </div>
                </CardTitle>
                <CardDescription>{artist.bio}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">
                      {artist.category.charAt(0).toUpperCase() + artist.category.slice(1)}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{artist.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <DollarSign className="h-4 w-4" />
                    <span>${artist.priceRange}</span>
                  </div>
                </div>
                <Button className="w-full">Ask for Quote</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredArtists.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No artists found matching your criteria.</p>
            <Button
              variant="outline"
              onClick={() => {
                setCategoryFilter("all")
                setLocationFilter("all")
                setPriceFilter("all")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
