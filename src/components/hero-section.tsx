import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export default function HeroSection() {
  return (
    <section className="bg-linear-to-r from-primary to-primary/80 text-primary-foreground py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Solusi Mesin Fotocopy Terpercaya untuk Bisnis Anda
            </h1>
            <p className="text-lg opacity-90 mb-8">
              PT. Global Mitra Copierindo menyediakan mesin fotocopy berkualitas
              tinggi dari brand ternama seperti Canon dan Fuji Xerox. Dengan
              pengalaman lebih dari 15 tahun, kami siap melayani kebutuhan
              bisnis Anda.
            </p>
            <div className="flex gap-4">
              <Link to="/about">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Pelajari Lebih Lanjut
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Hubungi Kami
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-accent/20 rounded-lg p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📠</div>
                <p className="text-xl font-semibold">
                  Mesin Fotocopy Profesional
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
