"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  ArrowLeft,
  BookOpen,
  FileText,
  Headphones,
  Mic,
  Users,
  Clock,
  Star,
  Globe,
  ChevronDown,
  ChevronUp,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function CompleteIELTSCoursePage() {
  const [openUnits, setOpenUnits] = useState<{ [key: string]: boolean }>({})

  const toggleUnit = (unitId: string) => {
    setOpenUnits((prev) => ({
      ...prev,
      [unitId]: !prev[unitId],
    }))
  }

  const courseUnits = [
    {
      id: "unit-1",
      title: "Introduction to IELTS",
      description: "Get familiar with IELTS format and requirements",
      sessions: 3,
      topics: {
        reading: "Understanding IELTS Reading format and question types",
        writing: "Overview of Task 1 and Task 2 requirements",
        listening: "IELTS Listening test structure and strategies",
        speaking: "Speaking test format and assessment criteria",
      },
    },
    {
      id: "unit-2",
      title: "Basic Grammar & Vocabulary",
      description: "Build essential grammar foundation and expand vocabulary",
      sessions: 3,
      topics: {
        reading: "Grammar in context and vocabulary building through texts",
        writing: "Essential grammar structures for academic writing",
        listening: "Recognizing grammar patterns in spoken English",
        speaking: "Using correct grammar and vocabulary in speech",
      },
    },
    {
      id: "unit-3",
      title: "Core Skills Development",
      description: "Develop fundamental skills for each IELTS component",
      sessions: 3,
      topics: {
        reading: "Skimming, scanning and reading comprehension techniques",
        writing: "Paragraph structure and coherence in writing",
        listening: "Note-taking skills and identifying key information",
        speaking: "Fluency development and pronunciation practice",
      },
    },
    {
      id: "unit-4",
      title: "Advanced Strategies",
      description: "Master advanced techniques for higher band scores",
      sessions: 3,
      topics: {
        reading: "Advanced reading strategies for complex texts",
        writing: "Advanced writing techniques and band 7+ structures",
        listening: "Dealing with difficult accents and complex audio",
        speaking: "Advanced speaking strategies and band descriptors",
      },
    },
    {
      id: "unit-5",
      title: "Task-Specific Training",
      description: "Focused practice on specific IELTS task types",
      sessions: 3,
      topics: {
        reading: "Mastering all reading question types with practice",
        writing: "Task 1 data description and Task 2 essay writing",
        listening: "Practice with all listening question formats",
        speaking: "Part 1, 2, and 3 specific preparation strategies",
      },
    },
    {
      id: "unit-6",
      title: "Academic Language Mastery",
      description: "Develop academic language skills for higher scores",
      sessions: 3,
      topics: {
        reading: "Academic vocabulary and complex sentence structures",
        writing: "Academic tone, formal language and advanced vocabulary",
        listening: "Understanding academic lectures and discussions",
        speaking: "Using academic language in speaking responses",
      },
    },
    {
      id: "unit-7",
      title: "Time Management & Exam Techniques",
      description: "Learn effective time management for test day",
      sessions: 3,
      topics: {
        reading: "Reading efficiently under time pressure",
        writing: "Planning and writing within time limits",
        listening: "Managing time during listening tasks",
        speaking: "Pacing yourself in speaking test situations",
      },
    },
    {
      id: "unit-8",
      title: "Practice Tests & Assessment",
      description: "Full-length practice tests and performance analysis",
      sessions: 3,
      topics: {
        reading: "Complete reading practice tests with detailed feedback",
        writing: "Timed writing practice with band score analysis",
        listening: "Full listening tests with score breakdown",
        speaking: "Mock speaking tests with expert evaluation",
      },
    },
    {
      id: "unit-9",
      title: "Error Analysis & Improvement",
      description: "Identify and correct common mistakes",
      sessions: 3,
      topics: {
        reading: "Common reading mistakes and how to avoid them",
        writing: "Grammar and structure error correction",
        listening: "Listening pitfalls and improvement strategies",
        speaking: "Pronunciation and fluency error correction",
      },
    },
    {
      id: "unit-10",
      title: "Band Score Optimization",
      description: "Fine-tune skills for target band achievement",
      sessions: 3,
      topics: {
        reading: "Achieving band 7+ in reading comprehension",
        writing: "Band 7+ writing techniques and examples",
        listening: "Maximizing listening scores with advanced strategies",
        speaking: "Band 7+ speaking performance techniques",
      },
    },
    {
      id: "unit-11",
      title: "Final Preparation & Review",
      description: "Comprehensive review and final preparation",
      sessions: 3,
      topics: {
        reading: "Final reading strategies and confidence building",
        writing: "Last-minute writing tips and practice",
        listening: "Final listening preparation and test-day tips",
        speaking: "Confidence building and final speaking practice",
      },
    },
    {
      id: "unit-12",
      title: "Test Day Success",
      description: "Final preparation and test day strategies",
      sessions: 3,
      topics: {
        reading: "Test day reading strategies and mental preparation",
        writing: "Final writing checklist and exam day approach",
        listening: "Test day listening tips and stress management",
        speaking: "Speaking test confidence and final preparation",
      },
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
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/courses" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Courses
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold mb-4">Complete IELTS Preparation Course</h1>
              <p className="text-lg text-green-50 mb-6">
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

              <div className="flex flex-wrap gap-3">
                {skillsData.map((skill) => (
                  <Badge key={skill.name} variant="secondary" className="bg-white/20 text-white border-white/30">
                    <skill.icon className="w-4 h-4 mr-2" />
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">$299</div>
                  <div className="text-sm text-gray-600 mb-4">One-time payment</div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white mb-4">Start Learning Now</Button>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium">0/216 lessons</span>
                    </div>
                    <Progress value={0} className="h-2" />
                    <div className="text-sm text-gray-600">0% complete</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Course Content</h2>
              <p className="text-muted-foreground">12 units • 36 sessions • 216 lessons</p>
            </div>

            <div className="space-y-4">
              {courseUnits.map((unit, index) => (
                <Card key={unit.id} className="border border-border">
                  <Collapsible open={openUnits[unit.id]} onOpenChange={() => toggleUnit(unit.id)}>
                    <CollapsibleTrigger asChild>
                      <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-lg font-semibold text-foreground">
                              Unit {index + 1}: {unit.title}
                            </CardTitle>
                            <CardDescription className="mt-1 text-muted-foreground">{unit.description}</CardDescription>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-muted-foreground">{unit.sessions} sessions</span>
                            {openUnits[unit.id] ? (
                              <ChevronUp className="w-5 h-5 text-muted-foreground" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-muted-foreground" />
                            )}
                          </div>
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="pt-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {skillsData.map((skill) => (
                            <div key={skill.name} className="p-4 rounded-lg border border-border bg-card">
                              <div className="flex items-center gap-3 mb-2">
                                <div className={`w-8 h-8 ${skill.color} rounded-lg flex items-center justify-center`}>
                                  <skill.icon className="w-4 h-4 text-white" />
                                </div>
                                <span className="font-medium text-foreground">{skill.name}</span>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {unit.topics[skill.name.toLowerCase() as keyof typeof unit.topics]}
                              </p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Course Features */}
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">Course Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {courseFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* IELTS Skills Covered */}
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">IELTS Skills Covered</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {skillsData.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3">
                    <div className={`w-8 h-8 ${skill.color} rounded-lg flex items-center justify-center`}>
                      <skill.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium text-foreground">{skill.name}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
