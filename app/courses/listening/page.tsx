"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  ChevronDown,
  Users,
  Clock,
  Star,
  Globe,
  BookOpen,
  Headphones,
  FileText,
  Mic,
  CheckCircle,
  Play,
} from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function CompleteCourseDetailsPage() {
  const [expandedUnits, setExpandedUnits] = useState<number[]>([])

  const toggleUnit = (unitIndex: number) => {
    setExpandedUnits((prev) => (prev.includes(unitIndex) ? prev.filter((i) => i !== unitIndex) : [...prev, unitIndex]))
  }

  const courseUnits = [
    {
      title: "Introduction to IELTS",
      description: "Get familiar with IELTS format and requirements",
      sessions: 3,
    },
    {
      title: "Basic Grammar & Vocabulary",
      description: "Build essential grammar foundation and expand vocabulary",
      sessions: 3,
    },
    {
      title: "Listening Fundamentals",
      description: "Learn basic listening techniques and note-taking skills",
      sessions: 3,
    },
    {
      title: "Reading Strategies",
      description: "Master skimming, scanning and reading comprehension",
      sessions: 3,
    },
    {
      title: "Writing Task 1 Basics",
      description: "Understand charts, graphs and data interpretation",
      sessions: 3,
    },
    {
      title: "Speaking Confidence",
      description: "Build confidence in spoken English communication",
      sessions: 3,
    },
    {
      title: "Advanced Grammar",
      description: "Advanced grammatical structures and complex sentences",
      sessions: 3,
    },
    {
      title: "Academic Vocabulary",
      description: "Academic words and phrases for higher band scores",
      sessions: 3,
    },
    {
      title: "Listening for Details",
      description: "Practice identifying specific information in audio",
      sessions: 3,
    },
    {
      title: "Reading Comprehension",
      description: "Advanced reading strategies for complex texts",
      sessions: 3,
    },
    {
      title: "Writing Task 2 Mastery",
      description: "Essay writing techniques and argumentation skills",
      sessions: 3,
    },
    {
      title: "Speaking Fluency & Final Review",
      description: "Final speaking practice and comprehensive review",
      sessions: 3,
    },
  ]

  const courseFeatures = [
    "36 comprehensive sessions across 12 units",
    "Video lessons with expert instructors",
    "Interactive practice exercises",
    "Regular assessments and feedback",
    "Mock tests with detailed analysis",
    "24/7 online support community",
    "Certificate of completion",
    "Lifetime access to materials",
  ]

  const skillsData = [
    { name: "Listening", icon: Headphones, color: "bg-blue-500" },
    { name: "Reading", icon: BookOpen, color: "bg-green-500" },
    { name: "Writing", icon: FileText, color: "bg-purple-500" },
    { name: "Speaking", icon: Mic, color: "bg-orange-500" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">IP</span>
            </div>
            <span className="font-semibold text-foreground">IELTS PREP Course</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-orange-50 dark:bg-orange-950 px-3 py-2 rounded-lg">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-sm text-orange-700 dark:text-orange-300">Learning Streak</span>
              <span className="text-sm font-medium text-orange-900 dark:text-orange-100">3 days</span>
            </div>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Back to Courses Link */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <Link
          href="/courses"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronDown className="w-4 h-4 rotate-90" />
          <span className="text-sm">Back to Courses</span>
        </Link>
      </div>

      {/* Course Header */}
      <div className="bg-green-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold mb-4">Complete IELTS Preparation Course</h1>
              <p className="text-lg mb-6 text-green-50">
                Master all four IELTS skills with our comprehensive preparation program designed to help you achieve
                your target band score.
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>15,000+ students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>6 months access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-current" />
                  <span>4.9/5 rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  <span>English</span>
                </div>
              </div>

              <div className="flex gap-2">
                <span className="bg-green-600 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <Headphones className="w-4 h-4" />
                  Listening
                </span>
                <span className="bg-green-600 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  Reading
                </span>
                <span className="bg-green-600 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <FileText className="w-4 h-4" />
                  Writing
                </span>
                <span className="bg-green-600 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <Mic className="w-4 h-4" />
                  Speaking
                </span>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <div className="text-right mb-4">
                    <div className="text-3xl font-bold text-green-600">$299</div>
                    <div className="text-sm text-gray-600">One-time payment</div>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white mb-4">Start Learning Now</Button>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Progress</span>
                      <span className="text-sm font-medium">0/216 lessons</span>
                    </div>
                    <Progress value={0} className="h-2" />
                    <div className="text-xs text-gray-500">0% complete</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-2">Course Content</h2>
            <p className="text-muted-foreground mb-6">12 units • 36 sessions • 216 lessons</p>

            <div className="space-y-4">
              {courseUnits.map((unit, index) => (
                <Card key={index} className="border border-border">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleUnit(index)}
                      className="w-full p-4 text-left hover:bg-muted/50 transition-colors flex items-center justify-between"
                    >
                      <div>
                        <h3 className="font-semibold text-foreground">
                          Unit {index + 1}: {unit.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">{unit.description}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground">{unit.sessions} sessions</span>
                        <ChevronDown
                          className={`w-5 h-5 text-muted-foreground transition-transform ${
                            expandedUnits.includes(index) ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </button>

                    {expandedUnits.includes(index) && (
                      <div className="border-t border-border p-4 bg-muted/20">
                        <div className="space-y-2">
                          {[1, 2, 3].map((session) => (
                            <div key={session} className="flex items-center gap-3 py-2">
                              <Play className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm text-foreground">Session {session}</span>
                              <span className="text-xs text-muted-foreground ml-auto">15 min</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Course Features */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Course Features</h3>
                <div className="space-y-3">
                  {courseFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* IELTS Skills Covered */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">IELTS Skills Covered</h3>
                <div className="space-y-3">
                  {skillsData.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-8 h-8 ${skill.color} rounded-lg flex items-center justify-center`}>
                        <skill.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
