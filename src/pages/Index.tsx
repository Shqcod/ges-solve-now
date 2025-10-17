import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Search, Shield, Star, MessageCircle, CreditCard } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Cari Teknisi Terpercaya",
      description: "Temukan teknisi profesional berdasarkan lokasi, rating, dan spesialisasi"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Rating & Review",
      description: "Lihat review dan rating dari pelanggan sebelumnya untuk keputusan terbaik"
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Komunikasi Langsung",
      description: "Chat langsung dengan teknisi untuk diskusi detail perbaikan"
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Pembayaran Aman",
      description: "Sistem pembayaran digital yang aman dan terpercaya"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Teknisi Terverifikasi",
      description: "Semua teknisi telah melalui proses verifikasi ketat"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Tracking Real-time",
      description: "Pantau status perbaikan perangkat Anda secara real-time"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">GES</h1>
          <nav className="flex gap-4">
            <Button variant="ghost" onClick={() => navigate("/faq")}>FAQ</Button>
            <Button variant="ghost" onClick={() => navigate("/login")}>Login</Button>
            <Button onClick={() => navigate("/signup")}>Daftar</Button>
          </nav>
        </div>
      </header>

      <main>
        <section className="py-20 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-5xl font-bold mb-6 text-foreground">
              Platform Servis Elektronik Terpercaya
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Hubungkan perangkat rusak Anda dengan teknisi profesional terverifikasi. 
              Cepat, mudah, dan terpercaya.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" onClick={() => navigate("/signup")}>
                Mulai Sekarang
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/login")}>
                Login
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-secondary/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Kenapa Pilih GES?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {features.map((feature, idx) => (
                <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 text-primary">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Cara Kerja</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold mb-2">Laporkan Kerusakan</h3>
                <p className="text-sm text-muted-foreground">
                  Isi form dengan detail perangkat dan masalah yang dialami
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold mb-2">Pilih Teknisi</h3>
                <p className="text-sm text-muted-foreground">
                  Pilih teknisi terbaik berdasarkan rating, lokasi, dan harga
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold mb-2">Selesai!</h3>
                <p className="text-sm text-muted-foreground">
                  Perangkat diperbaiki dan Anda bisa memberikan review
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">Siap Memulai?</h2>
            <p className="text-lg mb-8 opacity-90">
              Bergabunglah dengan ribuan pengguna yang telah mempercayai GES untuk servis elektronik mereka
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => navigate("/signup")}
              >
                Daftar Sebagai Pengguna
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => navigate("/signup")}
              >
                Daftar Sebagai Teknisi
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-card py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 GES. Platform Servis Elektronik Terpercaya.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
