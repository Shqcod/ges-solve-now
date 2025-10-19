import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Search, Clock, MapPin } from "lucide-react";
import Map from "@/components/Map";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
                  <Select value={formData.device} onValueChange={(value) => setFormData({...formData, device: value})} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih jenis perangkat" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Laptop">Laptop</SelectItem>
                      <SelectItem value="HP">HP / Smartphone</SelectItem>
                      <SelectItem value="PC">PC / Komputer</SelectItem>
                      <SelectItem value="Tablet">Tablet</SelectItem>
                      <SelectItem value="Printer">Printer</SelectItem>
                      <SelectItem value="Kamera">Kamera</SelectItem>
                      <SelectItem value="Lainnya">Lainnya</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="brand">Merek</Label>
                  <Select value={formData.brand} onValueChange={(value) => setFormData({...formData, brand: value})} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih merek" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Apple">Apple</SelectItem>
                      <SelectItem value="Samsung">Samsung</SelectItem>
                      <SelectItem value="Asus">Asus</SelectItem>
                      <SelectItem value="Lenovo">Lenovo</SelectItem>
                      <SelectItem value="HP">HP</SelectItem>
                      <SelectItem value="Dell">Dell</SelectItem>
                      <SelectItem value="Acer">Acer</SelectItem>
                      <SelectItem value="Xiaomi">Xiaomi</SelectItem>
                      <SelectItem value="Oppo">Oppo</SelectItem>
                      <SelectItem value="Vivo">Vivo</SelectItem>
                      <SelectItem value="Realme">Realme</SelectItem>
                      <SelectItem value="Canon">Canon</SelectItem>
                      <SelectItem value="Epson">Epson</SelectItem>
                      <SelectItem value="Lainnya">Lainnya</SelectItem>
                    </SelectContent>
                  </Select>
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
                  <Select value={formData.location} onValueChange={(value) => setFormData({...formData, location: value})} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih lokasi" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Aceh">Aceh</SelectItem>
                      <SelectItem value="Medan">Medan</SelectItem>
                      <SelectItem value="Padang">Padang</SelectItem>
                      <SelectItem value="Pekanbaru">Pekanbaru</SelectItem>
                      <SelectItem value="Palembang">Palembang</SelectItem>
                      <SelectItem value="Jakarta">Jakarta</SelectItem>
                      <SelectItem value="Bandung">Bandung</SelectItem>
                      <SelectItem value="Semarang">Semarang</SelectItem>
                      <SelectItem value="Yogyakarta">Yogyakarta</SelectItem>
                      <SelectItem value="Surabaya">Surabaya</SelectItem>
                      <SelectItem value="Malang">Malang</SelectItem>
                      <SelectItem value="Denpasar">Denpasar</SelectItem>
                      <SelectItem value="Makassar">Makassar</SelectItem>
                      <SelectItem value="Manado">Manado</SelectItem>
                    </SelectContent>
                  </Select>
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

        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Peta Teknisi di Indonesia
            </CardTitle>
            <CardDescription>Lokasi teknisi terverifikasi di seluruh Indonesia</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[500px] w-full">
              <Map />
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default UserDashboard;
