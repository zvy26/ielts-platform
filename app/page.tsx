import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
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
  MessageSquare,
  BookOpenCheck,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"

export default function HomePage() {
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
              <SidebarMenuButton asChild isActive>
                <Link href="/">
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
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

        <main className="flex-1 sidebar-transition">
          <div className="centered-content">
            <section className="text-center py-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                Ready to achieve your <span className="text-primary">IELTS goals</span>?
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                Start your journey with us and master all four IELTS skills through our comprehensive learning platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/register">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/courses">View Courses</Link>
                </Button>
              </div>
            </section>

            <section className="py-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-balance">Master all four IELTS skills</h2>
                <p className="text-muted-foreground text-lg text-pretty">
                  Everything you need to achieve your target score with AI-powered personalized learning.
                </p>
              </div>

              <Card className="mb-8 performance-optimized">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpenCheck className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Complete IELTS Course</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Master all four IELTS skills with our comprehensive course package. Everything you need to achieve
                    your target score with AI-powered personalized learning.
                  </p>
                  <div className="flex justify-center gap-8 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">⭐</div>
                      <div className="text-sm text-muted-foreground">Practice Lessons</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">👥</div>
                      <div className="text-sm text-muted-foreground">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">📊</div>
                      <div className="text-sm text-muted-foreground">Success Rate</div>
                    </div>
                  </div>
                  <Button asChild size="lg">
                    <Link href="/courses/complete-ielts">View Full Course Details</Link>
                  </Button>
                </CardContent>
              </Card>
            </section>

            <section className="py-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-balance">Or choose individual skills</h2>
                <p className="text-muted-foreground text-pretty">
                  Focus on specific areas where you need the most improvement
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="performance-optimized hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="h-6 w-6 text-green-500" />
                    </div>
                    <h3 className="font-semibold mb-2">IELTS Reading</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Develop reading comprehension with advanced techniques and practice
                    </p>
                    <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                      <Link href="/courses/reading">Start Learning</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="performance-optimized hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <PenTool className="h-6 w-6 text-purple-500" />
                    </div>
                    <h3 className="font-semibold mb-2">IELTS Writing</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Perfect your writing for Task 1 & 2 with expert feedback
                    </p>
                    <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                      <Link href="/courses/writing">Start Learning</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="performance-optimized hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Headphones className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="font-semibold mb-2">IELTS Listening</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Master listening skills with interactive exercises
                    </p>
                    <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                      <Link href="/courses/listening">Start Learning</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="performance-optimized hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="h-6 w-6 text-orange-500" />
                    </div>
                    <h3 className="font-semibold mb-2">IELTS Speaking</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Build confidence and fluency with AI conversation practice
                    </p>
                    <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                      <Link href="/courses/speaking">Start Learning</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </main>
      </SidebarInset>
    </div>
  )
}
