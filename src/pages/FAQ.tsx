import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const navigate = useNavigate();

  const testimonials = [
    {
      name: "Andi S.",
      rating: 5,
      text: "Sangat memuaskan! Laptop saya yang mati total bisa hidup lagi. Teknisi sangat profesional dan harga terjangkau."
    },
    {
      name: "Siti R.",
      rating: 5,
      text: "Platform GES memudahkan saya menemukan teknisi terpercaya. Prosesnya cepat dan transparan."
    },
    {
      name: "Budi W.",
      rating: 4,
      text: "Bagus, mudah digunakan. Saya bisa track status servis real-time. Recommended!"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">GES</h1>
          <nav className="flex gap-4">
            <Button variant="ghost" onClick={() => navigate("/")}>Home</Button>
            <Button variant="ghost" onClick={() => navigate("/login")}>Login</Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Pertanyaan yang Sering Diajukan</h2>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="pt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Apa itu GES?</AccordionTrigger>
                  <AccordionContent>
                    GES adalah platform yang menghubungkan pengguna dengan teknisi servis elektronik terpercaya. Kami memudahkan Anda menemukan teknisi profesional untuk perbaikan laptop, smartphone, PC, dan perangkat elektronik lainnya.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Bagaimana cara memesan layanan servis?</AccordionTrigger>
                  <AccordionContent>
                    Cukup daftar/login, laporkan kerusakan perangkat Anda melalui form yang tersedia, kemudian sistem akan mencarikan teknisi yang sesuai. Anda bisa memilih teknisi berdasarkan rating, lokasi, dan harga.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Apakah teknisi sudah terverifikasi?</AccordionTrigger>
                  <AccordionContent>
                    Ya, semua teknisi di platform GES telah melalui proses verifikasi dan memiliki pengalaman yang terbukti. Anda juga bisa melihat rating dan review dari pelanggan sebelumnya.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Bagaimana cara pembayaran?</AccordionTrigger>
                  <AccordionContent>
                    Kami menyediakan pembayaran digital yang aman. Estimasi biaya akan diberikan setelah teknisi melakukan diagnosa awal. Pembayaran dilakukan setelah pekerjaan selesai dan Anda puas dengan hasilnya.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Bagaimana jika saya tidak puas dengan hasil servis?</AccordionTrigger>
                  <AccordionContent>
                    Anda bisa mengajukan komplain melalui sistem kami. Tim admin akan membantu menyelesaikan permasalahan dan memastikan kepuasan Anda sebagai prioritas utama.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>Apakah saya bisa menjadi teknisi di GES?</AccordionTrigger>
                  <AccordionContent>
                    Tentu! Daftar sebagai teknisi, lengkapi profil dan portofolio Anda, kemudian tunggu proses verifikasi dari admin. Setelah disetujui, Anda bisa mulai menerima pekerjaan.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Testimoni Pelanggan</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-lg">{testimonial.name}</span>
                    <span className="text-yellow-400">{"⭐".repeat(testimonial.rating)}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-primary text-primary-foreground">
            <CardContent className="py-12">
              <h3 className="text-2xl font-bold mb-4">Siap Memulai?</h3>
              <p className="mb-6">Dapatkan layanan servis elektronik terbaik dengan GES</p>
              <div className="flex gap-4 justify-center">
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => navigate("/signup")}
                >
                  Daftar Sekarang
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => navigate("/login")}
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Login
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default FAQ;
