"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from "@/components/ui/sidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Home,
  BookOpen,
  FileText,
  BarChart3,
  Info,
  User,
  Award,
  Headphones,
  PenTool,
  Mic,
  Users,
  Clock,
  Star,
} from "lucide-react"

export default function CoursesPage() {
  const courses = [
    {
      id: "reading",
      title: "IELTS Reading",
      description: "Develop reading comprehension with advanced techniques and practice",
      icon: BookOpen,
      students: "4,600+",
      lessons: 62,
      rating: 4.8,
      difficulty: "Intermediate",
      image: "/ielts-reading-comprehension-books-and-documents.png",
    },
    {
      id: "writing",
      title: "IELTS Writing",
      description: "Perfect your writing for Task 1 & 2 with expert feedback",
      icon: PenTool,
      students: "6,200+",
      lessons: 48,
      rating: 4.9,
      difficulty: "Advanced",
      image: "/ielts-writing-practice-with-pen-and-paper.png",
    },
    {
      id: "listening",
      title: "IELTS Listening",
      description: "Master listening skills with interactive exercises and real exam simulations",
      icon: Headphones,
      students: "5,000+",
      lessons: 54,
      rating: 4.7,
      difficulty: "Beginner",
      image: "/ielts-listening-practice-with-headphones.png",
    },
    {
      id: "speaking",
      title: "IELTS Speaking",
      description: "Build confidence and fluency with AI conversation practice",
      icon: Mic,
      students: "5,300+",
      lessons: 52,
      rating: 4.8,
      difficulty: "Intermediate",
      image: "/ielts-speaking-practice-with-microphone.png",
    },
  ]

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar collapsible="offcanvas">
        <SidebarHeader className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg">IELTS PREP Course</span>
          </div>
          <Badge variant="secondary" className="text-xs">
            AI-Powered Learning Platform
          </Badge>
        </SidebarHeader>

        <SidebarContent className="px-6">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/">
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive>
                <Link href="/courses">
                  <BookOpen className="w-4 h-4" />
                  <span>Courses</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/mock-ielts">
                  <FileText className="w-4 h-4" />
                  <span>Mock IELTS</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/level-check">
                  <BarChart3 className="w-4 h-4" />
                  <span>Level Check</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/about">
                  <Info className="w-4 h-4" />
                  <span>About</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/profile">
                  <User className="w-4 h-4" />
                  <span>Profile</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>

          <div className="mt-8 pt-6 border-t border-sidebar-border">
            <div className="text-xs text-sidebar-foreground/60 mb-2">Learning Streak</div>
            <div className="text-sm font-medium text-sidebar-foreground">5 days</div>
          </div>
        </SidebarContent>
      </Sidebar>

      <SidebarInset className="flex-1 sidebar-transition">
        <header className="sticky-header flex h-16 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="ml-auto flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              Learning Streak: 5 days
            </Badge>
            <ThemeToggle />
            <Button asChild size="sm">
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </header>

        <main className="sidebar-transition">
          <div className="centered-content">
            <div className="py-8">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Choose Your IELTS Course</h1>
                <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-pretty">
                  Master individual skills with our AI-powered learning platform
                </p>
                <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span>20,000+ Students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>4.8 Rating</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {courses.map((course) => (
                  <Card
                    key={course.id}
                    className="overflow-hidden performance-optimized hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>

                    <CardContent className="p-6">
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <course.icon className="w-5 h-5 text-primary" />
                          <h3 className="font-semibold text-lg">{course.title}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{course.description}</p>
                      </div>

                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          <span>{course.students}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{course.lessons} lessons</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span>{course.rating}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <Badge variant="secondary" className="text-xs">
                          {course.difficulty}
                        </Badge>
                      </div>

                      <Link href={`/courses/${course.id}`} className="block">
                        <Button className="w-full transition-all duration-200 hover:shadow-md">Start Learning</Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </main>
      </SidebarInset>
    </div>
  )
}
