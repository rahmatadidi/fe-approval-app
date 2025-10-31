import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Award, Headphones, Zap } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Award,
      title: "Authorized Reseller",
      description:
        "Reseller resmi Canon dan Fuji Xerox dengan sertifikasi lengkap",
    },
    {
      icon: Zap,
      title: "Teknologi Terkini",
      description:
        "Mesin fotocopy dengan teknologi terbaru dan efisiensi tinggi",
    },
    {
      icon: Headphones,
      title: "Layanan Purna Jual",
      description:
        "Dukungan teknis dan maintenance berkala untuk performa optimal",
    },
    {
      icon: CheckCircle,
      title: "Harga Kompetitif",
      description: "Penawaran terbaik dengan kualitas yang tidak tertandingi",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mengapa Memilih Kami?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami berkomitmen memberikan solusi terbaik untuk kebutuhan fotocopy
            bisnis Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-0 shadow-sm hover:shadow-md transition-shadow"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
