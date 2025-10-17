import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, DollarSign, Star, CheckCircle } from "lucide-react";

const TechnicianDashboard = () => {
  const navigate = useNavigate();

  const jobs = [
    {
      id: 1,
      device: "Laptop Asus",
      problem: "Layar mati total",
      customer: "John Doe",
      location: "Jakarta Selatan",
      status: "pending",
      offer: 350000
    },
    {
      id: 2,
      device: "iPhone 12",
      problem: "Baterai cepat habis",
      customer: "Jane Smith",
      location: "Jakarta Pusat",
      status: "accepted",
      offer: 250000
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">GES - Teknisi</h1>
          <nav className="flex gap-4">
            <Button variant="ghost" onClick={() => navigate("/technician-dashboard")}>Dashboard</Button>
            <Button variant="ghost" onClick={() => navigate("/technician-profile")}>Profil</Button>
            <Button variant="ghost" onClick={() => navigate("/")}>Logout</Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total Pekerjaan</CardDescription>
              <CardTitle className="text-3xl">47</CardTitle>
            </CardHeader>
            <CardContent>
              <Briefcase className="h-6 w-6 text-muted-foreground" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Rating</CardDescription>
              <CardTitle className="text-3xl flex items-center gap-1">
                4.9 <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">127 review</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Pendapatan Bulan Ini</CardDescription>
              <CardTitle className="text-3xl">8.5jt</CardTitle>
            </CardHeader>
            <CardContent>
              <DollarSign className="h-6 w-6 text-muted-foreground" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Selesai</CardDescription>
              <CardTitle className="text-3xl">43</CardTitle>
            </CardHeader>
            <CardContent>
              <CheckCircle className="h-6 w-6 text-green-600" />
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Pekerjaan Tersedia</CardTitle>
              <CardDescription>Permintaan servis baru dari pelanggan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {jobs.filter(j => j.status === "pending").map((job) => (
                  <div key={job.id} className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold">{job.device}</p>
                        <p className="text-sm text-muted-foreground">{job.problem}</p>
                      </div>
                      <Badge variant="secondary">Baru</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Pelanggan: {job.customer}</span>
                      <span className="text-muted-foreground">{job.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-primary">Rp {job.offer.toLocaleString()}</span>
                      <div className="flex gap-2">
                        <Button size="sm">Terima</Button>
                        <Button size="sm" variant="outline">Negosiasi</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pekerjaan Aktif</CardTitle>
              <CardDescription>Pekerjaan yang sedang dikerjakan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {jobs.filter(j => j.status === "accepted").map((job) => (
                  <div key={job.id} className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold">{job.device}</p>
                        <p className="text-sm text-muted-foreground">{job.problem}</p>
                      </div>
                      <Badge>Aktif</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Pelanggan: {job.customer}</span>
                      <span className="text-muted-foreground">{job.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-primary">Rp {job.offer.toLocaleString()}</span>
                      <Button size="sm" variant="outline">Update Status</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default TechnicianDashboard;
