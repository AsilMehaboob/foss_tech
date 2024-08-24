"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const speakers = [
  {
    name: "Dr. Jane Smith",
    role: "AI Ethics Researcher",
    image: "/placeholder.svg?height=600&width=400",
    bio: "Dr. Smith is a leading expert in AI ethics, focusing on the societal impacts of machine learning algorithms. With over 15 years of experience in the field, she has published numerous papers on the ethical considerations of AI deployment in healthcare, finance, and criminal justice systems. Dr. Smith is a frequent speaker at international conferences and advises several tech companies on responsible AI practices.",
    achievements: [
      "She has published over 50 peer-reviewed articles on AI ethics, received the 2022 Global AI Ethics Award, and founded the AI Ethics Institute."
    ]
  },
  {
    name: "John Doe",
    role: "Quantum Computing Specialist",
    image: "/placeholder.svg?height=600&width=400",
    bio: "John is pioneering quantum algorithms that could revolutionize cryptography and drug discovery. His work focuses on developing practical applications for quantum computers, bridging the gap between theoretical quantum mechanics and real-world problem-solving. John's research has significant implications for data security and pharmaceutical development.",
    achievements: [
      "John developed a novel quantum algorithm for protein folding, holds three patents in quantum cryptography, and was named one of MIT Technology Review's 35 Innovators Under 35."
    ]
  },
  {
    name: "Emily Chen",
    role: "Cybersecurity Expert",
    image: "/placeholder.svg?height=600&width=400",
    bio: "Emily has over a decade of experience in protecting critical infrastructure from cyber threats. She specializes in developing robust security protocols for large-scale systems and has consulted for government agencies and Fortune 500 companies. Emily is known for her proactive approach to cybersecurity, focusing on threat prediction and preemptive defense strategies.",
    achievements: [
      "Emily led the cybersecurity team for a major national infrastructure project, regularly contributes to the Annual Cybersecurity Report, and is a keynote speaker at DEF CON."
    ]
  },
  {
    name: "Dr. Michael Johnson",
    role: "Robotics Engineer",
    image: "/placeholder.svg?height=600&width=400",
    bio: "Dr. Johnson's work in soft robotics is paving the way for more adaptable and safer robots in various industries. His research focuses on creating flexible, bio-inspired robotic systems that can interact safely with humans in complex environments. Dr. Johnson's innovations have applications in healthcare, manufacturing, and space exploration.",
    achievements: [
      "Dr. Johnson invented a new class of soft actuators for robotic manipulation, secured $5 million in research grants from NASA and NSF, and was featured in 'Robotics Today' as a top 10 innovator."
    ]
  },
  {
    name: "Sarah Williams",
    role: "VR/AR Developer",
    image: "/placeholder.svg?height=600&width=400",
    bio: "Sarah is creating immersive experiences that blend the physical and digital worlds, pushing the boundaries of VR and AR technologies. Her work spans entertainment, education, and professional training, with a focus on creating intuitive and engaging user interfaces in virtual spaces. Sarah is passionate about making VR/AR technology accessible to a wider audience.",
    achievements: [
      "Sarah developed a VR training simulator used by major airlines, created an AR educational app used in over 1000 schools worldwide, and won the Best VR Experience award at SIGGRAPH 2023."
    ]
  }
]

export default function Component() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null)

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Speakers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <Card key={index} className="flex flex-col overflow-hidden">
              <CardHeader className="p-0">
                <img src={speaker.image} alt={speaker.name} className="w-full h-[400px] object-cover" />
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="text-xl mb-2">{speaker.name}</CardTitle>
                <CardDescription>{speaker.role}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full" onClick={() => setSelectedSpeaker(speaker)}>
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[525px]">
                    <DialogHeader>
                      <DialogTitle>{selectedSpeaker?.name}</DialogTitle>
                      <DialogDescription>{selectedSpeaker?.role}</DialogDescription>
                    </DialogHeader>
                    <div className="mt-4 grid grid-cols-3 gap-4">
                      <img src={selectedSpeaker?.image} alt={selectedSpeaker?.name} className="w-full h-[300px] object-cover rounded-lg col-span-1" />
                      <div className="col-span-2">
                        <p className="text-sm text-muted-foreground mb-4">{selectedSpeaker?.bio}</p>
                        <h4 className="font-semibold mb-2">Key Achievements:</h4>
                        <p className="text-sm text-muted-foreground">
                          {selectedSpeaker?.achievements}
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
