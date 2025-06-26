"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Music, Eye, MessageSquare, CheckCircle } from "lucide-react"

// Mock artist submissions data
const artistSubmissions = [
  {
    id: 1,
    name: "Sarah Johnson",
    category: "Singer",
    location: "New York",
    feeRange: "$500-1000",
    status: "active",
    submittedAt: "2025-01-15",
    languages: ["English", "Spanish"],
  },
  {
    id: 2,
    name: "Mike Chen",
    category: "DJ",
    location: "Los Angeles",
    feeRange: "$300-800",
    status: "pending",
    submittedAt: "2025-01-14",
    languages: ["English", "Mandarin"],
  },
  {
    id: 3,
    name: "Dance Collective",
    category: "Dancer",
    location: "Chicago",
    feeRange: "$800-1500",
    status: "active",
    submittedAt: "2025-01-13",
    languages: ["English"],
  },
  {
    id: 4,
    name: "Jazz Quartet",
    category: "Musician",
    location: "New York",
    feeRange: "$1000-2000",
    status: "active",
    submittedAt: "2025-01-12",
    languages: ["English"],
  },
  {
    id: 5,
    name: "Emma Rodriguez",
    category: "Singer",
    location: "Miami",
    feeRange: "$400-900",
    status: "pending",
    submittedAt: "2025-01-11",
    languages: ["English", "Spanish", "Portuguese"],
  },
]

const bookingRequests = [
  {
    id: 1,
    eventName: "Corporate Gala",
    artistName: "Sarah Johnson",
    eventDate: "2025-02-15",
    status: "pending",
    clientName: "ABC Corp",
  },
  {
    id: 2,
    eventName: "Wedding Reception",
    artistName: "Jazz Quartet",
    eventDate: "2025-02-20",
    status: "confirmed",
    clientName: "Smith Family",
  },
  {
    id: 3,
    eventName: "Birthday Party",
    artistName: "Mike Chen",
    eventDate: "2025-02-10",
    status: "pending",
    clientName: "Johnson Family",
  },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"artists" | "bookings">("artists")

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>
      case "pending":
        return <Badge variant="secondary">Pending Review</Badge>
      case "confirmed":
        return <Badge className="bg-blue-100 text-blue-800">Confirmed</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

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
              <Link href="/artists" className="text-muted-foreground hover:text-foreground">
                Browse Artists
              </Link>
              <Link href="/onboard" className="text-muted-foreground hover:text-foreground">
                Join as Artist
              </Link>
              <Link href="/dashboard" className="text-foreground font-medium">
                Dashboard
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Manager Dashboard</h1>
          <p className="text-muted-foreground">Manage artist profiles and booking requests</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Artists</CardTitle>
              <Music className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{artistSubmissions.length}</div>
              <p className="text-xs text-muted-foreground">
                {artistSubmissions.filter((a) => a.status === "active").length} active
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{artistSubmissions.filter((a) => a.status === "pending").length}</div>
              <p className="text-xs text-muted-foreground">Awaiting approval</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Booking Requests</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{bookingRequests.length}</div>
              <p className="text-xs text-muted-foreground">
                {bookingRequests.filter((b) => b.status === "pending").length} pending
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Confirmed Bookings</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{bookingRequests.filter((b) => b.status === "confirmed").length}</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-6">
          <Button variant={activeTab === "artists" ? "default" : "ghost"} onClick={() => setActiveTab("artists")}>
            Artist Submissions
          </Button>
          <Button variant={activeTab === "bookings" ? "default" : "ghost"} onClick={() => setActiveTab("bookings")}>
            Booking Requests
          </Button>
        </div>

        {/* Artists Table */}
        {activeTab === "artists" && (
          <Card>
            <CardHeader>
              <CardTitle>Artist Submissions</CardTitle>
              <CardDescription>Manage and review artist profile submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Fee Range</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Submitted</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {artistSubmissions.map((artist) => (
                    <TableRow key={artist.id}>
                      <TableCell className="font-medium">{artist.name}</TableCell>
                      <TableCell>{artist.category}</TableCell>
                      <TableCell>{artist.location}</TableCell>
                      <TableCell>{artist.feeRange}</TableCell>
                      <TableCell>{getStatusBadge(artist.status)}</TableCell>
                      <TableCell>{artist.submittedAt}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            View
                          </Button>
                          {artist.status === "pending" && <Button size="sm">Approve</Button>}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        {/* Bookings Table */}
        {activeTab === "bookings" && (
          <Card>
            <CardHeader>
              <CardTitle>Booking Requests</CardTitle>
              <CardDescription>Manage booking requests and confirmations</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Event Name</TableHead>
                    <TableHead>Artist</TableHead>
                    <TableHead>Client</TableHead>
                    <TableHead>Event Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bookingRequests.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell className="font-medium">{booking.eventName}</TableCell>
                      <TableCell>{booking.artistName}</TableCell>
                      <TableCell>{booking.clientName}</TableCell>
                      <TableCell>{booking.eventDate}</TableCell>
                      <TableCell>{getStatusBadge(booking.status)}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                          {booking.status === "pending" && <Button size="sm">Respond</Button>}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
