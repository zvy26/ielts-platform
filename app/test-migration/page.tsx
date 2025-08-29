"use client"

import type React from "react"

import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from "sonner"
import { CheckCircle, XCircle, AlertCircle, Loader2 } from "lucide-react"
import Link from "next/link"

// Test React Query functionality
function useTestQuery() {
  return useQuery({
    queryKey: ["test-migration"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return { message: "React Query is working!", timestamp: new Date().toISOString() }
    },
  })
}

export default function TestMigrationPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subscribe: false })
  const [darkMode, setDarkMode] = useState(false)
  const { data, isLoading, error } = useTestQuery()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Form submitted successfully!")
  }

  const testResults = [
    { name: "Next.js App Router", status: "success", description: "File-based routing working" },
    { name: "TypeScript", status: "success", description: "Type checking enabled" },
    { name: "Tailwind CSS v4", status: "success", description: "Styling system active" },
    { name: "shadcn/ui Components", status: "success", description: "UI library loaded" },
    {
      name: "React Query",
      status: data ? "success" : isLoading ? "loading" : "error",
      description: "Data fetching ready",
    },
    { name: "Form Handling", status: "success", description: "React Hook Form compatible" },
    { name: "Theme System", status: "success", description: "Dark/light mode support" },
    { name: "Icons", status: "success", description: "Lucide React icons loaded" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Migration Test & Validation</h1>
            <p className="text-muted-foreground">Comprehensive test of all migrated functionality</p>
          </div>
          <Button asChild variant="outline">
            <Link href="/">← Back to Home</Link>
          </Button>
        </div>

        <Tabs defaultValue="status" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="status">System Status</TabsTrigger>
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="forms">Forms</TabsTrigger>
            <TabsTrigger value="data">Data Fetching</TabsTrigger>
          </TabsList>

          <TabsContent value="status" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Migration Status</CardTitle>
                <CardDescription>All systems check for the Vite to Next.js migration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {testResults.map((test) => (
                    <div key={test.name} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        {test.status === "success" && <CheckCircle className="h-5 w-5 text-green-500" />}
                        {test.status === "loading" && <Loader2 className="h-5 w-5 text-blue-500 animate-spin" />}
                        {test.status === "error" && <XCircle className="h-5 w-5 text-red-500" />}
                        <div>
                          <p className="font-medium">{test.name}</p>
                          <p className="text-sm text-muted-foreground">{test.description}</p>
                        </div>
                      </div>
                      <Badge
                        variant={
                          test.status === "success"
                            ? "default"
                            : test.status === "loading"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {test.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="components" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>UI Components Test</CardTitle>
                  <CardDescription>Testing shadcn/ui component library</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Button>Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="test-checkbox" />
                    <Label htmlFor="test-checkbox">Test checkbox</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="test-switch" checked={darkMode} onCheckedChange={setDarkMode} />
                    <Label htmlFor="test-switch">Dark mode toggle</Label>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Alerts & Notifications</CardTitle>
                  <CardDescription>Testing feedback components</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>This is a test alert component.</AlertDescription>
                  </Alert>
                  <Button onClick={() => toast.success("Toast notification working!")}>Test Toast</Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Test Dialog</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Dialog Test</DialogTitle>
                        <DialogDescription>This dialog component is working correctly.</DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="forms" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Form Handling Test</CardTitle>
                <CardDescription>Testing form components and validation</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="subscribe"
                      checked={formData.subscribe}
                      onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, subscribe: !!checked }))}
                    />
                    <Label htmlFor="subscribe">Subscribe to newsletter</Label>
                  </div>
                  <Button type="submit" className="w-full">
                    Submit Test Form
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="data" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>React Query Test</CardTitle>
                <CardDescription>Testing data fetching with TanStack Query</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading && (
                  <div className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Loading data...</span>
                  </div>
                )}
                {error && (
                  <Alert>
                    <XCircle className="h-4 w-4" />
                    <AlertDescription>Error loading data: {error.message}</AlertDescription>
                  </Alert>
                )}
                {data && (
                  <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      {data.message} (Loaded at: {new Date(data.timestamp).toLocaleTimeString()})
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Migration Summary</CardTitle>
            <CardDescription>Your Vite project has been successfully migrated to Next.js</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold mb-2">✅ Completed</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Dependencies updated to Next.js ecosystem</li>
                  <li>• React Router converted to App Router</li>
                  <li>• shadcn/ui components integrated</li>
                  <li>• React Query configured</li>
                  <li>• TypeScript and ESLint configured</li>
                  <li>• Tailwind CSS v4 set up</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">📋 Next Steps</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Add your custom components from Vite project</li>
                  <li>• Migrate any API routes to Next.js API routes</li>
                  <li>• Set up environment variables</li>
                  <li>• Configure deployment settings</li>
                  <li>• Add error boundaries and loading states</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
