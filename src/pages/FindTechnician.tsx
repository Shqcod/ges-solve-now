import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, DollarSign } from "lucide-react";

const technicians = [
  {
    id: 1,
    name: "Budi Santoso",
    specialty: "Laptop & PC",
    rating: 4.9,
    reviews: 127,
    location: "Jakarta Selatan",
    price: "150.000 - 500.000",
    experience: "8 tahun"
  },
  {
    id: 2,
    name: "Andi Wijaya",
    specialty: "Smartphone",
    rating: 4.8,
    reviews: 95,
    location: "Jakarta Pusat",
    price: "100.000 - 400.000",
    experience: "5 tahun"
  },
  {
    id: 3,
    name: "Dedi Kurniawan",
    specialty: "Laptop & Smartphone",
    rating: 4.7,
    reviews: 83,
    location: "Jakarta Barat",
    price: "120.000 - 450.000",
    experience: "6 tahun"
  }
];

const FindTechnician = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">GES</h1>
          <nav className="flex gap-4">
            <Button variant="ghost" onClick={() => navigate("/user-dashboard")}>Dashboard</Button>
            <Button variant="ghost" onClick={() => navigate("/faq")}>FAQ</Button>
            <Button variant="ghost" onClick={() => navigate("/")}>Logout</Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2">Teknisi Tersedia</h2>
          <p className="text-muted-foreground">Pilih teknisi terbaik untuk kebutuhan Anda</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicians.map((tech) => (
            <Card key={tech.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{tech.name}</CardTitle>
                    <CardDescription>{tech.specialty}</CardDescription>
                  </div>
                  <Badge variant="secondary">{tech.experience}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{tech.rating}</span>
                  <span className="text-muted-foreground">({tech.reviews} review)</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{tech.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span>Rp {tech.price}</span>
                </div>
                <Button 
                  className="w-full mt-4" 
                  onClick={() => navigate(`/technician/${tech.id}`)}
                >
                  Lihat Profil
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FindTechnician;
