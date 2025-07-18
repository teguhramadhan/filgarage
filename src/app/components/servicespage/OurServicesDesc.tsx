"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurServicesDesc() {
  return (
    <section className="min-h-screen flex flex-col gap-32 px-4 md:px-12 lg:px-32 xl:px-48 my-4 lg:my-32">
      {/* === Auto Detailing === */}
      <ServiceBlock
        title="Auto Detailing"
        description="Rasakan keajaiban perawatan mobil dengan layanan auto detailing terbaik di SR Point! Kami memberikan perhatian penuh pada setiap detail, dari pencucian eksterior hingga pembersihan interior, memastikan mobil Anda kembali berkilau dan terlindungi seperti baru. Kunjungi SR Point dan biarkan kami merawat mobil Anda dengan keahlian profesional dan produk berkualitas tinggi. Jadikan setiap perjalanan lebih menyenangkan dengan mobil yang bersih dan terawat sempurna."
        image="/images/services/autodetailing_img.png"
        reverse={false}
      />

      {/* === Rush Protection === */}
      <ServiceBlock
        title="Rush Protection"
        description="Lindungi mobil Anda dari karat dan korosi dengan layanan rust protection unggulan di SR Point! Teknologi kami memberikan lapisan pelindung yang kuat, mencegah kerusakan akibat kelembapan dan elemen lingkungan. Dengan rust protection dari SR Point, mobil Anda tetap aman, terawat, dan tampil prima. Kunjungi kami untuk memastikan investasi kendaraan Anda terlindungi dengan maksimal!"
        image="/images/services/rushprotection_img.png"
        reverse={true}
      />

      {/* === Paint Protection === */}
      <ServiceBlock
        title="Paint Protection"
        description="Lindungi keindahan mobil Anda dengan layanan paint protection premium di SR Point! Kami menggunakan teknologi terbaru dan produk terbaik untuk melindungi cat mobil Anda dari goresan, noda, dan kerusakan akibat sinar UV. Dengan perlindungan cat dari SR Point, mobil Anda akan tetap terlihat baru lebih lama. Kunjungi kami dan berikan mobil Anda perlindungan yang layak dengan layanan profesional dan hasil yang memukau."
        image="/images/services/paintprotection_img.png"
        reverse={false}
      />

      {/* === Nano Coating Ceramic === */}
      <ServiceBlock
        title="Nano Coating Ceramic"
        description="Perlindungan maksimal dan kilau sempurna untuk mobil Anda dengan layanan nano coating ceramic di SR Point! Teknologi nano ceramic coating kami memberikan lapisan pelindung yang tahan lama, melindungi cat mobil Anda dari goresan, kotoran, dan sinar UV. Hasilnya? Kilau yang mengagumkan dan perawatan yang lebih mudah. Kunjungi SR Point untuk mendapatkan perlindungan terbaik dan tampilan premium yang tak tertandingi untuk mobil Anda."
        image="/images/services/nanocoating_img.png"
        reverse={true}
      />

      {/* === Paint Protection Film === */}
      <ServiceBlock
        title="Paint Protection Film"
        description="Berikan mobil Anda perlindungan terbaik dengan paint protection film dari SR Point! Layanan kami menawarkan lapisan pelindung transparan yang tahan lama, melindungi cat mobil dari goresan, serpihan batu, dan kerusakan akibat cuaca. Dengan paint protection film dari SR Point, mobil Anda akan tetap terlihat baru dan berkilau lebih lama. Kunjungi kami dan temukan bagaimana kami dapat menjaga keindahan dan nilai kendaraan Anda dengan perlindungan unggulan."
        image="/images/services/filmprotection_img.png"
        reverse={false}
      />
    </section>
  );
}

// === Komponen Reusable ===
interface ServiceBlockProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

function ServiceBlock({
  title,
  description,
  image,
  reverse = false,
}: ServiceBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Deskripsi */}
      <div
        className={`w-full flex flex-col justify-center ${
          reverse ? "items-end text-right" : ""
        }`}
      >
        <h1
          className={`w-fit font-bebas text-4xl md:text-6xl bg-primary text-white py-4 md:py-6 ${
            reverse
              ? "pl-16 md:pl-24 pr-8 md:pr-12 rounded-tl-full"
              : "pl-8 md:pl-12 pr-16 md:pr-24 rounded-tr-full"
          }`}
        >
          {title}
        </h1>
        <p className="text-lg md:text-2xl leading-relaxed text-justify mt-6">
          {description}
        </p>
      </div>

      {/* Gambar */}
      <div className="w-full flex justify-center">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg object-cover"
        />
      </div>
    </motion.div>
  );
}
