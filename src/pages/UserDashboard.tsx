import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Search, Clock } from "lucide-react";

const UserDashboard = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    device: "",
    brand: "",
    problem: "",
    location: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/find-technician");
  };

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
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-5 w-5" />
                Laporan Kerusakan Baru
              </CardTitle>
              <CardDescription>Laporkan kerusakan perangkat Anda</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="device">Jenis Perangkat</Label>
                  <Input
                    id="device"
                    placeholder="Laptop, HP, PC, dll"
                    value={formData.device}
                    onChange={(e) => setFormData({...formData, device: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="brand">Merek</Label>
                  <Input
                    id="brand"
                    placeholder="Apple, Samsung, Asus, dll"
                    value={formData.brand}
                    onChange={(e) => setFormData({...formData, brand: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="problem">Deskripsi Masalah</Label>
                  <Textarea
                    id="problem"
                    placeholder="Jelaskan masalah yang Anda alami..."
                    value={formData.problem}
                    onChange={(e) => setFormData({...formData, problem: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Lokasi</Label>
                  <Input
                    id="location"
                    placeholder="Kota/Daerah Anda"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Search className="h-4 w-4 mr-2" />
                  Cari Teknisi
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Status Servis Anda
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Belum ada servis aktif</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Riwayat Servis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <p className="font-medium">Laptop Asus - Layar Mati</p>
                    <p className="text-sm text-muted-foreground">Selesai - 15 Jan 2025</p>
                    <p className="text-sm text-primary">Rating: ⭐⭐⭐⭐⭐</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <p className="font-medium">iPhone 12 - Baterai Bocor</p>
                    <p className="text-sm text-muted-foreground">Selesai - 3 Jan 2025</p>
                    <p className="text-sm text-primary">Rating: ⭐⭐⭐⭐</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
