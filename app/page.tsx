import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink, Code, Database, Cloud, X } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-br from-gray-800 via-gray-900 to-emerald-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Image
              src="/engmackenzie-passport.jpg"
              alt="Stephen Waweru"
              width={249}
              height={249}
              className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-emerald-500/30 shadow-2xl shadow-emerald-500/10"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 text-balance">Stephen Waweru</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 text-balance">
            Software Engineer & Gold Fellow - The Room
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto text-pretty">
            Bridging Software Engineering and Aeronautics to build innovative solutions for fintech, healthcare, and
            transport industries
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="gap-2 bg-emerald-600 text-white hover:bg-emerald-700">
              <a href="mailto:stephen.mz.waweru@gmail.com">
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="gap-2 border-emerald-500/50 text-white hover:bg-emerald-500/10 bg-transparent"
            >
              <a href="https://github.com/engmackenzie" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-white">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I&apos;m an innovative Full-Stack Software Developer with a unique background in Aeronautical Engineering.
                This blend gives me a distinctive perspective on problem-solving, combining precision engineering
                principles with modern software development practices.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Throughout my career, I&apos;ve specialized in translating complex business requirements into scalable
                technical solutions, with particular expertise in fintech, healthcare technology, and transport systems.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary" className="bg-emerald-600 text-white border-emerald-500">
                  Full-Stack Development
                </Badge>
                <Badge variant="secondary" className="bg-gray-700 text-white border-gray-600">
                  Fintech Solutions
                </Badge>
                <Badge variant="secondary" className="bg-gray-700 text-white border-gray-600">
                  Healthcare Tech
                </Badge>
                <Badge variant="secondary" className="bg-emerald-600 text-white border-emerald-500">
                  API Design
                </Badge>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span>+254 729 603 687</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-emerald-400" />
                <span>stephen.mz.waweru@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-white">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="text-center">
                <Code className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <CardTitle className="text-lg text-white">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    JavaScript
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Python
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    C#
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    VB.NET
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    GoLang
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Java
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="text-center">
                <Code className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <CardTitle className="text-lg text-white">Frameworks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    React.js
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Vue.js
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Node.js
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Express.js
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    NestJS
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    .NET Core
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Django
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Flask
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    FastAPI
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Spring Boot
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="text-center">
                <Database className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <CardTitle className="text-lg text-white">Databases</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    SQL Server
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    PostgreSQL
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    MySQL
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    SQLite
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    MongoDB
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Firebase
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="text-center">
                <Cloud className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <CardTitle className="text-lg text-white">Cloud & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Azure
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    AWS
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Google Cloud
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Git
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    TFS
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Figma
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-white">Professional Experience</h2>
          <div className="space-y-8">
            <Card className="bg-gray-700 border-gray-600">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-white">Senior Software Engineer</CardTitle>
                    <CardDescription className="text-lg font-medium text-gray-300">
                      <a
                        href="https://www.pathologynetwork.africa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-300 transition-colors underline decoration-emerald-500/50 hover:decoration-emerald-300"
                      >
                        The Pathology Network
                      </a>
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-emerald-600 text-white border-emerald-500">
                    May 2025 – Present
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Leading software development for a health tech diagnostics application serving labs, pathologists and
                  medical practitioners across Africa.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-700 border-gray-600">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-white">Software Engineering Consultant</CardTitle>
                    <CardDescription className="text-lg font-medium text-gray-300">
                      <a
                        href="https://www.pathologynetwork.africa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-300 transition-colors underline decoration-emerald-500/50 hover:decoration-emerald-300"
                      >
                        The Pathology Network
                      </a>
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-gray-600 text-white border-gray-500">
                    May 2024 – May 2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Provided consultancy services for software development of a health tech diagnostics application for
                  labs, pathologists and medical practitioners.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-700 border-gray-600">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-white">Software Engineer</CardTitle>
                    <CardDescription className="text-lg font-medium text-gray-300">
                      <a
                        href="https://dataintegrated.co.ke/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-300 transition-colors underline decoration-emerald-500/50 hover:decoration-emerald-300"
                      >
                        Data Integrated Limited
                      </a>
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-gray-600 text-white border-gray-500">
                    Jan 2023 – May 2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>• Developed Web-APIs facilitating seamless system communication</li>
                  <li>• Converted business visions into practical and innovative tech solutions</li>
                  <li>• Designed Payment solutions tailored for the transport industry</li>
                  <li>• Created Tracking solutions enhancing real-time vehicle monitoring</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-700 border-gray-600">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-white">Software Developer</CardTitle>
                    <CardDescription className="text-lg font-medium text-gray-300">
                      <a
                        href="https://fintech-group.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-300 transition-colors underline decoration-emerald-500/50 hover:decoration-emerald-300"
                      >
                        Fintech Group
                      </a>
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-gray-600 text-white border-gray-500">
                    April 2022 – Jan 2023
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>• Developed Web-APIs enabling seamless system integration</li>
                  <li>• Built Micro-Services enhancing scalability and modularity</li>
                  <li>• Designed Core Systems for banks, Saccos, and Micro-finance institutions</li>
                  <li>• Documented comprehensive user manuals for clear instructions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-white">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-lg hover:shadow-emerald-500/10 transition-shadow bg-gray-800 border-gray-700 hover:border-emerald-500/50">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl group-hover:text-emerald-300 transition-colors text-white">
                      Grader Chap Chap
                    </CardTitle>
                    <CardDescription className="mt-2 text-gray-400">AI-Powered Grading Assistant</CardDescription>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  An AI-powered grading assistance tool designed for schools, teachers, and examiners. Winner of the 1st
                  ALX Hackathon in December 2023.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    AI/ML
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Education Tech
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Python
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    React
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg hover:shadow-emerald-500/10 transition-shadow bg-gray-800 border-gray-700 hover:border-emerald-500/50">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl group-hover:text-emerald-300 transition-colors text-white">
                      Coderunway
                    </CardTitle>
                    <CardDescription className="mt-2 text-gray-400">Aircraft Maintenance Management</CardDescription>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  A comprehensive solution for small aircraft maintenance organizations, improving maintenance
                  activities, record keeping, and compliance management.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Aviation
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Maintenance
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Compliance
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Full-Stack
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-white">Education & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gray-700 border-gray-600">
              <CardHeader>
                <CardTitle className="text-lg text-white">B.Eng Aeronautical Engineering</CardTitle>
                <CardDescription className="text-gray-300">The Technical University of Kenya</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400">Sept 2014 - Dec 2019</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-700 border-gray-600">
              <CardHeader>
                <CardTitle className="text-lg text-white">Software Engineering</CardTitle>
                <CardDescription className="text-gray-300">ALX Africa</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400">June 2021 - July 2022</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900 to-emerald-900/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-8 text-white">Let&apos;s Work Together</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto text-pretty">
            I&apos;m always interested in discussing new opportunities, innovative projects, or potential collaborations.
            Let&apos;s connect and explore how we can work together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-emerald-600 text-white hover:bg-emerald-700">
              <a href="mailto:stephen.mz.waweru@gmail.com">
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="gap-2 border-emerald-500/50 text-white hover:bg-emerald-500/10 bg-transparent"
            >
              <a href="https://github.com/engmackenzie" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                View GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="gap-2 border-emerald-500/50 text-white hover:bg-emerald-500/10 bg-transparent"
            >
              <a href="https://www.linkedin.com/in/engmackenzie" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="gap-2 border-emerald-500/50 text-white hover:bg-emerald-500/10 bg-transparent"
            >
              <a href="https://www.linkedin.com/in/engmakenzi" target="_blank" rel="noopener noreferrer">
                <X className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-700 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Stephen Waweru. #Do Hard Things.</p>
        </div>
      </footer>
    </div>
  )
}
