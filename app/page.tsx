import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Users, Mic, Headphones } from "lucide-react"

const categories = [
  {
    id: 1,
    name: "Singers",
    description: "Professional vocalists for all occasions",
    icon: Mic,
    count: "150+ Artists",
  },
  {
    id: 2,
    name: "Dancers",
    description: "Choreographers and dance performers",
    icon: Users,
    count: "200+ Artists",
  },
  {
    id: 3,
    name: "DJs",
    description: "Music mixers and party entertainers",
    icon: Headphones,
    count: "80+ Artists",
  },
  {
    id: 4,
    name: "Musicians",
    description: "Instrumentalists and bands",
    icon: Music,
    count: "120+ Artists",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Music className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">Artistly</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/artists" className="text-muted-foreground hover:text-foreground">
                Browse Artists
              </Link>
              <Link href="/onboard" className="text-muted-foreground hover:text-foreground">
                Join as Artist
              </Link>
              <Link href="/dashboard" className="text-muted-foreground hover:text-foreground">
                Dashboard
              </Link>
            </div>
            <Button asChild>
              <Link href="/artists">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Connect with Amazing <span className="text-primary">Performing Artists</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Artistly is the premier platform connecting event planners with talented performers. Find the perfect artist
            for your next event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/artists">Browse Artists</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/onboard">Join as Artist</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Artist Categories</h2>
            <p className="text-muted-foreground">Discover talented performers across various categories</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <Card key={category.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>{category.name}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">{category.count}</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/artists?category=${category.name.toLowerCase()}`}>View Artists</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Artist?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of event planners who trust Artistly to connect them with amazing performers.
          </p>
          <Button size="lg" asChild>
            <Link href="/artists">Start Browsing</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Artistly. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
