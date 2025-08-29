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
  Star,
  Shield,
  TrendingUp,
  Heart,
  Linkedin,
  Twitter,
  Mail,
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

export default function AboutPage() {
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
              <SidebarMenuButton asChild isActive>
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

      <SidebarInset className="flex-1 transition-all duration-300 ease-in-out">
        <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 px-4 backdrop-blur">
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
            {/* Hero Section */}
            <section className="relative py-16 md:py-20 px-4 text-center bg-gradient-to-b from-background to-muted/20">
              <div className="container mx-auto max-w-4xl">
                <Badge variant="secondary" className="mb-4">
                  Trusted by 10,000+ Students Worldwide
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                  Master IELTS with <span className="text-primary">Expert Guidance</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
                  Join thousands of successful students who achieved their dream IELTS scores through our comprehensive,
                  AI-powered learning platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <Link href="/register">Start Your Journey</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/courses">Explore Courses</Link>
                  </Button>
                </div>
              </div>
            </section>

            {/* About Us Section */}
            <section className="py-20 px-4">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">About Our Platform</h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
                    We're dedicated to helping students worldwide achieve their IELTS goals through innovative learning
                    methods and personalized support.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                  <Card className="text-center p-6 performance-optimized">
                    <CardContent className="pt-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">50,000+</h3>
                      <p className="text-muted-foreground">Students Trained</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center p-6 performance-optimized">
                    <CardContent className="pt-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Star className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">95%</h3>
                      <p className="text-muted-foreground">Success Rate</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center p-6 performance-optimized">
                    <CardContent className="pt-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">120+</h3>
                      <p className="text-muted-foreground">Countries Served</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 px-4 bg-muted/20">
              <div className="container mx-auto max-w-4xl text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Our Mission</h2>
                <p className="text-xl text-muted-foreground leading-relaxed text-balance">
                  To democratize IELTS preparation by providing world-class, accessible, and personalized learning
                  experiences that empower students to achieve their academic and professional dreams, regardless of
                  their background or location.
                </p>
              </div>
            </section>

            {/* Core Values Section */}
            <section className="py-20 px-4">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Our Core Values</h2>
                  <p className="text-xl text-muted-foreground text-balance">
                    The principles that guide everything we do
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <Card className="text-center p-6 performance-optimized hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Star className="h-8 w-8 text-blue-500" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">Quality</h3>
                      <p className="text-muted-foreground">
                        We deliver exceptional educational content and maintain the highest standards in everything we
                        create.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center p-6 performance-optimized hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="h-8 w-8 text-green-500" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">Trust</h3>
                      <p className="text-muted-foreground">
                        We build lasting relationships through transparency, reliability, and genuine care for our
                        students' success.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center p-6 performance-optimized hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="h-8 w-8 text-purple-500" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">Growth</h3>
                      <p className="text-muted-foreground">
                        We foster continuous learning and improvement, both for our students and our platform.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center p-6 performance-optimized hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Heart className="h-8 w-8 text-orange-500" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">Community</h3>
                      <p className="text-muted-foreground">
                        We create supportive environments where students connect, learn together, and celebrate
                        achievements.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Team Section */}
            <section className="py-20 px-4 bg-muted/20">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Meet Our Expert Team</h2>
                  <p className="text-xl text-muted-foreground text-balance">
                    Dedicated professionals committed to your IELTS success
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Card className="text-center p-6 performance-optimized">
                    <CardContent className="pt-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <User className="h-12 w-12 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Dr. Sarah Richardson</h3>
                      <p className="text-primary font-medium mb-2">Lead IELTS Instructor</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        15+ years experience, Cambridge certified examiner with expertise in all four IELTS skills.
                      </p>
                      <div className="flex justify-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Linkedin className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Mail className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="text-center p-6 performance-optimized">
                    <CardContent className="pt-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <User className="h-12 w-12 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Michael Chen</h3>
                      <p className="text-primary font-medium mb-2">Speaking & Listening Specialist</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Former IELTS examiner specializing in pronunciation and fluency development techniques.
                      </p>
                      <div className="flex justify-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Linkedin className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Twitter className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="text-center p-6 performance-optimized">
                    <CardContent className="pt-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <User className="h-12 w-12 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Emma Parker</h3>
                      <p className="text-primary font-medium mb-2">Writing & Reading Expert</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Academic writing specialist with PhD in Applied Linguistics and 12 years of IELTS coaching.
                      </p>
                      <div className="flex justify-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Linkedin className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Mail className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="py-20 px-4">
              <div className="container mx-auto max-w-4xl text-center">
                <div className="bg-primary/5 rounded-2xl p-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                    Ready to Start Your IELTS Journey?
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
                    Join thousands of successful students who achieved their target scores. Start your personalized
                    learning experience today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                      <Link href="/register">Get Started Now</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link href="/courses">View All Courses</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </SidebarInset>
    </div>
  )
}
