import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CompanyHistory() {
  const milestones = [
    {
      year: "2009",
      title: "Pendirian Perusahaan",
      description:
        "Globalfotocopy.com didirikan oleh Suprapto dengan fokus menyediakan produk dan pelayanan di industri mesin fotocopy.",
    },
    {
      year: "2010",
      title: "Ekspansi Online",
      description:
        "Mendaftarkan domain globalfotocopy.com dan mulai fokus memasarkan produk & layanan secara online.",
    },
    {
      year: "2014-2015",
      title: "Authorized Reseller",
      description:
        "Menjadi Authorized Reseller resmi untuk mesin fotocopy Canon dan Fuji Xerox.",
    },
    {
      year: "2016-2018",
      title: "Penghargaan Bergengsi",
      description:
        "Meraih penghargaan Reseller Canon Terbaik No. 1 selama tiga tahun berturut-turut.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sejarah Perusahaan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {milestones.map((milestone, index) => (
            <Card
              key={index}
              className="border-l-4 border-l-accent"
            >
              <CardHeader>
                <div className="text-accent font-bold text-lg mb-2">
                  {milestone.year}
                </div>
                <CardTitle>{milestone.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{milestone.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-muted/50 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">Pencapaian Saat Ini</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">2157+</div>
              <p className="text-muted-foreground">Konsumen Loyal</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">100+</div>
              <p className="text-muted-foreground">Produk Tersedia</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">5</div>
              <p className="text-muted-foreground">Vendor Terpercaya</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
