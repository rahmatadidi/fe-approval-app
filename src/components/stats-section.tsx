export default function StatsSection() {
  const stats = [
    { number: "2157+", label: "Pelanggan Loyal" },
    { number: "100+", label: "Produk Tersedia" },
    { number: "5", label: "Vendor Terpercaya" },
    { number: "15+", label: "Tahun Pengalaman" },
  ];

  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {stat.number}
              </div>
              <p className="text-primary-foreground/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
