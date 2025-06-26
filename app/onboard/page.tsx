"use client"

import { useState } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Music, ArrowLeft } from "lucide-react"

const categories = ["Singer", "Dancer", "DJ", "Musician", "Speaker", "Comedian"]
const languages = ["English", "Spanish", "French", "German", "Italian", "Portuguese", "Mandarin", "Japanese"]
const feeRanges = ["$200-500", "$500-1000", "$1000-2000", "$2000-5000", "$5000+"]

interface FormData {
  name: string
  bio: string
  location: string
  email: string
  phone: string
  categories: string[]
  languages: string[]
  feeRange: string
}

export default function OnboardPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>()

  const handleCategoryChange = (category: string, checked: boolean) => {
    const updated = checked ? [...selectedCategories, category] : selectedCategories.filter((c) => c !== category)

    setSelectedCategories(updated)
    setValue("categories", updated)
  }

  const handleLanguageChange = (language: string, checked: boolean) => {
    const updated = checked ? [...selectedLanguages, language] : selectedLanguages.filter((l) => l !== language)

    setSelectedLanguages(updated)
    setValue("languages", updated)
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Artist Registration Data:", {
      ...data,
      categories: selectedCategories,
      languages: selectedLanguages,
    })

    alert("Registration successful! Welcome to Artistly.")
    setIsSubmitting(false)
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
            <Button variant="ghost" asChild>
              <Link href="/" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Join Artistly as a Performer</h1>
          <p className="text-muted-foreground">Create your artist profile and start receiving booking requests</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Artist Registration</CardTitle>
            <CardDescription>Fill out your details to create your artist profile</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Basic Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      {...register("name", { required: "Name is required" })}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="location">Location *</Label>
                    <Input
                      id="location"
                      {...register("location", { required: "Location is required" })}
                      placeholder="City, State"
                    />
                    {errors.location && <p className="text-sm text-red-500 mt-1">{errors.location.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address",
                        },
                      })}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" {...register("phone")} placeholder="+1 (555) 123-4567" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="bio">Bio *</Label>
                  <Textarea
                    id="bio"
                    {...register("bio", { required: "Bio is required" })}
                    placeholder="Tell us about your experience and style..."
                    rows={4}
                  />
                  {errors.bio && <p className="text-sm text-red-500 mt-1">{errors.bio.message}</p>}
                </div>
              </div>

              {/* Categories */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Performance Categories *</h3>
                <p className="text-sm text-muted-foreground">Select all that apply</p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                      />
                      <Label htmlFor={category} className="text-sm">
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
                {selectedCategories.length === 0 && (
                  <p className="text-sm text-red-500">Please select at least one category</p>
                )}
              </div>

              {/* Languages */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Languages Spoken</h3>
                <p className="text-sm text-muted-foreground">Select all languages you can perform in</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {languages.map((language) => (
                    <div key={language} className="flex items-center space-x-2">
                      <Checkbox
                        id={language}
                        checked={selectedLanguages.includes(language)}
                        onCheckedChange={(checked) => handleLanguageChange(language, checked as boolean)}
                      />
                      <Label htmlFor={language} className="text-sm">
                        {language}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fee Range */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Fee Range *</h3>
                <Select onValueChange={(value) => setValue("feeRange", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your typical fee range" />
                  </SelectTrigger>
                  <SelectContent>
                    {feeRanges.map((range) => (
                      <SelectItem key={range} value={range}>
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting || selectedCategories.length === 0}>
                {isSubmitting ? "Creating Profile..." : "Create Artist Profile"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
