import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock, Building2 } from "lucide-react";

export default function CompanyInfo() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Informasi Perusahaan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-accent" />
                Hubungi Kami
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-semibold mb-1">Telepon</p>
                <p className="text-muted-foreground">(021) 2286 4665</p>
              </div>
              <div>
                <p className="font-semibold mb-1">HP</p>
                <p className="text-muted-foreground">0812-890-3010</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Email</p>
                <p className="text-muted-foreground">info@globalfotocopy.com</p>
              </div>
            </CardContent>
          </Card>

          {/* Location */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                Lokasi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-semibold mb-1">Kantor Pusat & Showroom</p>
                <p className="text-muted-foreground">
                  Jl. Biru Laut IX No.4
                  <br />
                  Jatinegara, Jakarta Timur
                </p>
              </div>
              <div>
                <p className="font-semibold mb-1">Gudang & Workshop</p>
                <p className="text-muted-foreground">
                  Jl. Biru Laut IX No.4
                  <br />
                  Jatinegara, Jakarta Timur
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Operating Hours & Legal Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent" />
                Jam Operasional
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                <span className="font-semibold">Senin - Sabtu</span>
                <br />
                08:00 - 17:00 WIB
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-accent" />
                Legalitas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>
                <span className="font-semibold">
                  PT. GLOBAL MITRA COPIERINDO
                </span>
              </p>
              <p>SIUP: 24/24.1PK.7/31.75.03/-1.824.27/e/2017</p>
              <p>NPWP: 21.144.904.6-002.000</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
