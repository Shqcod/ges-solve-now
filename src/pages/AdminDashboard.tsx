import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Wrench, DollarSign, AlertCircle } from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const users = [
    { id: 1, name: "John Doe", email: "john@email.com", type: "Pengguna", status: "Aktif" },
    { id: 2, name: "Jane Smith", email: "jane@email.com", type: "Pengguna", status: "Aktif" }
  ];

  const technicians = [
    { id: 1, name: "Budi Santoso", specialty: "Laptop & PC", rating: 4.9, status: "Verified" },
    { id: 2, name: "Andi Wijaya", specialty: "Smartphone", rating: 4.8, status: "Verified" }
  ];

  const transactions = [
    { id: 1, user: "John Doe", technician: "Budi Santoso", amount: 350000, status: "Selesai" },
    { id: 2, user: "Jane Smith", technician: "Andi Wijaya", amount: 250000, status: "Proses" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">GES - Admin</h1>
          <nav className="flex gap-4">
            <Button variant="ghost" onClick={() => navigate("/admin")}>Dashboard</Button>
            <Button variant="ghost" onClick={() => navigate("/")}>Logout</Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total Pengguna</CardDescription>
              <CardTitle className="text-3xl">247</CardTitle>
            </CardHeader>
            <CardContent>
              <Users className="h-6 w-6 text-muted-foreground" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total Teknisi</CardDescription>
              <CardTitle className="text-3xl">58</CardTitle>
            </CardHeader>
            <CardContent>
              <Wrench className="h-6 w-6 text-muted-foreground" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Transaksi Bulan Ini</CardDescription>
              <CardTitle className="text-3xl">124</CardTitle>
            </CardHeader>
            <CardContent>
              <DollarSign className="h-6 w-6 text-muted-foreground" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Komplain Aktif</CardDescription>
              <CardTitle className="text-3xl">3</CardTitle>
            </CardHeader>
            <CardContent>
              <AlertCircle className="h-6 w-6 text-destructive" />
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Manajemen Pengguna</CardTitle>
              <CardDescription>Kelola akun pengguna</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {users.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Edit</Button>
                      <Button size="sm" variant="destructive">Suspend</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Manajemen Teknisi</CardTitle>
              <CardDescription>Verifikasi dan kelola teknisi</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {technicians.map((tech) => (
                  <div key={tech.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{tech.name}</p>
                      <p className="text-sm text-muted-foreground">{tech.specialty} - Rating: {tech.rating}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">View</Button>
                      <Button size="sm" variant="destructive">Remove</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Transaksi Terbaru</CardTitle>
            <CardDescription>Monitor transaksi dan pembayaran</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {transactions.map((tx) => (
                <div key={tx.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{tx.user} → {tx.technician}</p>
                    <p className="text-sm text-muted-foreground">Rp {tx.amount.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      tx.status === "Selesai" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {tx.status}
                    </span>
                    <Button size="sm" variant="outline">Detail</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;
