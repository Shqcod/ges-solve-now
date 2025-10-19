import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Search, Clock, MapPin } from "lucide-react";
import Map from "@/components/Map";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  device: z.string().min(1, { message: "Pilih jenis perangkat" }),
  brand: z.string().min(1, { message: "Pilih merek perangkat" }),
  problem: z.string().min(10, { message: "Deskripsi masalah minimal 10 karakter" }).max(500, { message: "Deskripsi masalah maksimal 500 karakter" }),
  location: z.string().min(1, { message: "Pilih lokasi Anda" }),
});

const UserDashboard = () => {
  const navigate = useNavigate();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      device: "",
      brand: "",
      problem: "",
      location: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="device"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Jenis Perangkat</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih jenis perangkat" />
                            </SelectTrigger>
                          </FormControl>
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
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="brand"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Merek</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih merek" />
                            </SelectTrigger>
                          </FormControl>
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
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="problem"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Deskripsi Masalah</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Jelaskan masalah yang Anda alami..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Lokasi</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih lokasi" />
                            </SelectTrigger>
                          </FormControl>
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
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full">
                    <Search className="h-4 w-4 mr-2" />
                    Cari Teknisi
                  </Button>
                </form>
              </Form>
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
