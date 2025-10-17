import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Award, MessageCircle, DollarSign } from "lucide-react";

const TechnicianDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const technician = {
    name: "Budi Santoso",
    specialty: "Laptop & PC",
    rating: 4.9,
    reviews: 127,
    location: "Jakarta Selatan",
    price: "150.000 - 500.000",
    experience: "8 tahun",
    description: "Spesialis perbaikan laptop dan PC dengan pengalaman 8 tahun. Ahli dalam hardware dan software troubleshooting.",
    skills: ["Hardware Repair", "Software Installation", "Data Recovery", "Virus Removal"],
    portfolio: [
      { device: "Laptop Asus ROG", issue: "Overheat", result: "Berhasil diperbaiki" },
      { device: "MacBook Pro", issue: "Keyboard Error", result: "Ganti keyboard" },
      { device: "PC Gaming", issue: "Blue Screen", result: "Install ulang OS" }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">GES</h1>
          <nav className="flex gap-4">
            <Button variant="ghost" onClick={() => navigate("/user-dashboard")}>Dashboard</Button>
            <Button variant="ghost" onClick={() => navigate("/find-technician")}>Cari Teknisi</Button>
            <Button variant="ghost" onClick={() => navigate("/")}>Logout</Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
          ← Kembali
        </Button>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl">{technician.name}</CardTitle>
                    <CardDescription className="text-lg">{technician.specialty}</CardDescription>
                  </div>
                  <Badge variant="secondary" className="text-sm">{technician.experience}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-lg">{technician.rating}</span>
                    <span className="text-muted-foreground">({technician.reviews} review)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <span>{technician.location}</span>
                  </div>
                </div>
                <p className="text-muted-foreground">{technician.description}</p>
                
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Keahlian
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {technician.skills.map((skill, idx) => (
                      <Badge key={idx} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Portfolio & Pengalaman</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {technician.portfolio.map((item, idx) => (
                    <div key={idx} className="p-4 border rounded-lg">
                      <p className="font-medium">{item.device}</p>
                      <p className="text-sm text-muted-foreground">Masalah: {item.issue}</p>
                      <p className="text-sm text-primary">Hasil: {item.result}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Review Pelanggan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[1,2,3,4,5].map(i => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm font-medium">Andi S.</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Sangat memuaskan! Laptop saya yang mati total bisa hidup lagi. Teknisi sangat profesional.</p>
                  </div>
                  <div className="border-b pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[1,2,3,4].map(i => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <Star className="h-4 w-4 text-gray-300" />
                      </div>
                      <span className="text-sm font-medium">Siti R.</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Bagus, cepat, dan harga terjangkau. Recommended!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Estimasi Biaya</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <span className="text-xl font-bold">Rp {technician.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  *Harga final akan ditentukan setelah diagnosis
                </p>
                <div className="space-y-2">
                  <Button className="w-full">
                    Pilih Teknisi Ini
                  </Button>
                  <Button variant="outline" className="w-full">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat Teknisi
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Waktu Kerja</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Senin - Jumat</span>
                  <span className="font-medium">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sabtu</span>
                  <span className="font-medium">09:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Minggu</span>
                  <span className="font-medium">Libur</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TechnicianDetail;
