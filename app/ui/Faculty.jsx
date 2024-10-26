import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone } from "lucide-react";

const faculties = [
  {
    id: 1,
    name: "Dr. Engr. Shah Murtaza Rashid Al Masud",
    department: "Computer Science and Engineering",
    position: "Professor",
    email: "emily.johnson@university.edu",
    phone: "+1 (555) 123-4567",
    imageUrl:
      "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=RfilYIgAAAAJ&citpid=1",
  },
  {
    id: 2,
    name: "Dr. Bilkis Jamal Ferdosi",
    department: "Computer Science and Engineering",
    position: "Professor",
    email: "michael.chen@university.edu",
    phone: "+1 (555) 987-6543",
    imageUrl:
      "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=QaITgeIAAAAJ&citpid=2",
  },
  {
    id: 3,
    name: "Prof. Dr. Aloke Kumar Saha",
    department: "Computer Science and Engineering",
    position: "Professor",
    email: "sarah.patel@university.edu",
    phone: "+1 (555) 246-8135",
    imageUrl:
      "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=a9t8g-AAAAAJ&citpid=10",
  },
  {
    id: 4,
    name: "Dr. Nasima Begum",
    department: "Computer Science and Engineering",
    position: "Associate Professor",
    email: "sarah.patel@university.edu",
    phone: "+1 (555) 246-8135",
    imageUrl:
      "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=i1GeAwcAAAAJ&citpid=3",
  },
];

export default function FacultyInfoPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl pt-5 font-bold mb-8 text-center">
        Faculty Information
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {faculties.map((faculty) => (
          <Card key={faculty.id}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={faculty.imageUrl} alt={faculty.name} />
                  <AvatarFallback>
                    {faculty.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{faculty.name}</CardTitle>
                  <CardDescription>{faculty.position}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Badge>{faculty.department}</Badge>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{faculty.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{faculty.phone}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
