import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Lightbulb } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Visi Kami</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    Menjadi perusahaan importir mesin fotocopy terbaik dan nomor
                    1 di Indonesia dan Asia
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    Menjadi mitra terpercaya dalam pengembangan usaha kecil dan
                    menengah
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    Menciptakan lebih banyak wirausaha baru di bidang fotocopy
                    komersial
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Misi Kami</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    Memberikan pelayanan yang sangat memuaskan dan melebihi
                    ekspektasi pelanggan
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    Menciptakan win-win solution untuk pelanggan dan perusahaan
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    Menjadi produsen dan eksportir mesin fotocopy berkualitas ke
                    seluruh dunia
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
