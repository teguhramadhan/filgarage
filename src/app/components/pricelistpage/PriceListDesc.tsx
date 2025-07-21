"use client";

export default function PriceListDesc() {
  // DATA: Card Intro Price List
  const introCards = [
    {
      name: "Small Motor",
      range: "(100 - 250CC)",
      price: "Rp. 2.000.000",
    },
    {
      name: "Medium Motor",
      range: "(250CC - 600CC)",
      price: "Rp. 2.500.000",
    },
    {
      name: "Large Motor",
      range: "(600CC+)",
      price: "Rp. 3.500.000",
    },
    {
      name: "PPF Motor",
      range: "-",
      price: "Rp. 5.000.000",
    },
  ];

  // DATA: Core Table Price List
  const nanoCoatingCategories = [
    {
      name: "Small",
      prices: [
        { type: "Paint Protection", price: "Rp. x.xxx.xxx" },
        { type: "Sound Proof", price: "Rp. x.xxx.xxx" },
        { type: "Nano Coating Reguler", price: "Rp. x.xxx.xxx" },
        { type: "Nano Coating Premium", price: "Rp. x.xxx.xxx" },
        { type: "Nano Coating Luxury", price: "Rp. x.xxx.xxx" },
        { type: "PPF 7.5 mil", price: "Rp. x.xxx.xxx" },
        { type: "PPF 8.5 mil", price: "Rp. x.xxx.xxx" },
      ],
    },
    {
      name: "Medium",
      prices: [
        { type: "Paint Protection", price: "Rp. x.xxx.xxx" },
        { type: "Sound Proof", price: "Rp. x.xxx.xxx" },
        { type: "Nano Coating Reguler", price: "Rp. x.xxx.xxx" },
        { type: "Nano Coating Premium", price: "Rp. x.xxx.xxx" },
        { type: "Nano Coating Luxury", price: "Rp. x.xxx.xxx" },
        { type: "PPF 7.5 mil", price: "Rp. x.xxx.xxx" },
        { type: "PPF 8.5 mil", price: "Rp. x.xxx.xxx" },
      ],
    },
    {
      name: "Large",
      prices: [
        { type: "Paint Protection", price: "Rp. x.xxx.xxx" },
        { type: "Sound Proof", price: "Rp. x.xxx.xxx" },
        { type: "Nano Coating Reguler", price: "Rp. x.xxx.xxx" },
        { type: "Nano Coating Premium", price: "Rp. x.xxx.xxx" },
        { type: "Nano Coating Luxury", price: "Rp. x.xxx.xxx" },
        { type: "PPF 7.5 mil", price: "Rp. x.xxx.xxx" },
        { type: "PPF 8.5 mil", price: "Rp. x.xxx.xxx" },
      ],
    },
    {
      name: "Extra Large",
      prices: [
        { type: "Paint Protection", price: "Rp. x.xxx.xxx" },
        { type: "Sound Proof", price: "Rp. x.xxx.xxx" },
        { type: "Nano Coating Reguler", price: "Rp. x.xxx.xxx" },
        { type: "Nano Coating Premium", price: "Rp. x.xxx.xxx" },
        { type: "Nano Coating Luxury", price: "Rp. x.xxx.xxx" },
        { type: "PPF 7.5 mil", price: "Rp. x.xxx.xxx" },
        { type: "PPF 8.5 mil", price: "Rp. x.xxx.xxx" },
      ],
    },
  ];

  return (
    <section className="w-full px-4 sm:px-10 lg:px-32 py-16 bg-white text-black">
      {/* Intro Title */}
      <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase font-bebas text-primary text-center">
        Nano Coating Ceramic Price List
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
        {introCards.map((card) => (
          <div
            key={card.name}
            className="bg-white shadow-md p-6 text-center border border-primary"
          >
            <h3 className="text-xl font-bebas uppercase text-primary mb-2">
              {card.name}
            </h3>
            {card.range && (
              <p className="text-sm mb-1 text-gray-600">{card.range}</p>
            )}
            <p className="text-2xl font-bold text-black">{card.price}</p>
          </div>
        ))}
      </div>

      {/* Intro Desc */}
      <div className="text-start mb-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-start md:items-stretch gap-12">
          {/* Point 1 */}
          <div className="flex-1">
            <h3 className="text-2xl font-bebas uppercase text-primary mb-2">
              Professional Detailer
            </h3>
            <p className="text-lg text-gray-700 text-justify">
              Detailer profesional kami memiliki sertifikasi dari lembaga
              detailing terkemuka dan menggunakan produk premium untuk
              memastikan setiap bagian kendaraan Anda berkilau dan terlindungi
              dengan sempurna.
            </p>
          </div>

          {/* Point 2 */}
          <div className="flex-1">
            <h3 className="text-2xl font-bebas uppercase text-primary mb-2">
              Technology 4.0
            </h3>
            <p className="text-lg text-gray-700 text-justify">
              Dengan penerapan nano coating berbasis teknologi terkini,
              kendaraan Anda akan mendapatkan kilau yang lebih dalam dan
              perlindungan jangka panjang hingga 5 tahun.
            </p>
          </div>
        </div>
      </div>

      {/* Core Price List */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {nanoCoatingCategories.map((cat) => (
          <div key={cat.name} className="border border-gray-200 rounded-lg">
            <h3 className="bg-primary text-white px-4 py-3 text-md lg:text-xl uppercase font-bold">
              {cat.name}
            </h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left text-xs lg:text-lg uppercase">
                    Jenis Coating
                  </th>
                  <th className="px-4 py-2 text-left text-xs lg:text-lg uppercase">
                    Harga
                  </th>
                </tr>
              </thead>
              <tbody>
                {cat.prices.map((p) => (
                  <tr key={p.type} className="border-b">
                    <td className="px-4 py-2 text-xs lg:text-sm uppercase">
                      {p.type}
                    </td>
                    <td className="px-4 py-2 text-xs lg:text-sm">{p.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </section>
  );
}
