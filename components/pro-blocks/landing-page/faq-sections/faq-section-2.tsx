"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function FaqSection2() {
  return (
    <section
      className="bg-background section-padding-y border-b"
      aria-labelledby="faq-heading"
      id="faq"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Left Column */}
          <div className="section-title-gap-lg flex flex-1 flex-col">
            {/* Category Tag */}
            <Tagline>FAQ</Tagline>
            {/* Main Title */}
            <h1 id="faq-heading" className="heading-lg text-foreground">
              Temukan Jawaban untuk Pertanyaan Anda
            </h1>
            {/* Section Description */}
            <p className="text-muted-foreground">
              Kami telah mengumpulkan pertanyaan yang sering diajukan tentang Campus Expo 2026.
              Tidak menemukan yang Anda cari?{" "}
              <Link href="https://wa.me/6281261286706?text=Halo,%20saya%20ingin%20bertanya%20tentang%20Campus%20Expo%202026" target="_blank" className="text-primary underline">
                Hubungi kami.
              </Link>
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-1 flex-col gap-8">
            {/* General FAQ Section */}
            <div className="flex flex-col gap-2">
              {/* Section Title */}
              <h2 className="text-foreground text-lg font-semibold md:text-xl">
                Informasi Umum
              </h2>
              {/* FAQ Accordion */}
              <Accordion
                type="single"
                collapsible
                aria-label="General FAQ items"
              >
                {/* FAQ Item 1 */}
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    Kapan dan dimana Campus Expo 2026 akan diadakan?
                  </AccordionTrigger>
                  <AccordionContent>
                    Campus Expo 2026 akan diadakan pada Mei-Juni 2026 di 6 kota strategis
                    di Jawa Tengah dan DIY: Semarang, Surakarta, Yogyakarta, Purwokerto,
                    Tegal, dan Pekalongan. Jadwal lengkap untuk setiap kota akan segera
                    diumumkan.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 2 */}
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    Siapa saja yang bisa mengikuti Campus Expo?
                  </AccordionTrigger>
                  <AccordionContent>
                    Campus Expo terbuka untuk siswa/i SMA/SMK/MA kelas 10, 11, dan 12,
                    orang tua atau wali siswa, serta guru dan konselor Bimbingan Konseling (BK).
                    Acara ini dirancang untuk membantu calon mahasiswa menemukan perguruan
                    tinggi yang tepat dengan bimbingan dari orang tua dan guru.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 3 */}
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    Apa saja kegiatan yang ada di Campus Expo?
                  </AccordionTrigger>
                  <AccordionContent>
                    Campus Expo menawarkan berbagai kegiatan interaktif: Zona Kampus Impian
                    dengan booth universitas, Konsultasi Eksklusif dengan perwakilan universitas,
                    Seminar dan Talkshow inspiratif, Simulasi Kehidupan Kampus, Talent Mapping,
                    dan informasi lengkap tentang beasiswa dari berbagai perguruan tinggi.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 4 */}
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    Berapa biaya untuk mengikuti Campus Expo sebagai pengunjung?
                  </AccordionTrigger>
                  <AccordionContent>
                    Campus Expo GRATIS untuk semua pengunjung (siswa, orang tua, dan guru).
                    Tidak ada biaya pendaftaran atau biaya masuk. Kami berkomitmen untuk
                    memberikan akses informasi pendidikan yang merata dan terjangkau bagi semua.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Participation FAQ Section */}
            <div className="flex flex-col gap-2">
              {/* Section Title */}
              <h2 className="text-foreground text-lg font-semibold md:text-xl">
                Partisipasi Perguruan Tinggi
              </h2>
              {/* FAQ Accordion */}
              <Accordion
                type="single"
                collapsible
                aria-label="Participation FAQ items"
              >
                {/* FAQ Item 1 */}
                <AccordionItem value="participation-1">
                  <AccordionTrigger className="text-left">
                    Bagaimana cara mendaftar sebagai tenant universitas?
                  </AccordionTrigger>
                  <AccordionContent>
                    Universitas dapat mendaftar dengan menghubungi kami melalui email di
                    hello@campusexpo.id atau WhatsApp di 0812-6128-6706. Tim kami akan
                    membantu Anda memilih paket yang sesuai dan mengurus proses pendaftaran.
                    Pendaftaran dilakukan dengan sistem first-come-first-served untuk
                    memastikan posisi booth terbaik.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 2 */}
                <AccordionItem value="participation-2">
                  <AccordionTrigger className="text-left">
                    Apa perbedaan paket Basic dan Platinum?
                  </AccordionTrigger>
                  <AccordionContent>
                    Paket Basic mencakup booth standar 2x3m dan publikasi logo di website &
                    media sosial. Paket Platinum menawarkan booth di posisi strategis, sesi
                    seminar/presentasi eksklusif (30-45 menit), akses database pengunjung,
                    publikasi logo di semua materi promosi, highlight di media sosial, dan
                    listing program Campus Tour setelah pameran.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 3 */}
                <AccordionItem value="participation-3">
                  <AccordionTrigger className="text-left">
                    Apakah bisa mengikuti acara di beberapa kota saja?
                  </AccordionTrigger>
                  <AccordionContent>
                    Ya, kami menawarkan fleksibilitas untuk mengikuti acara di 1 kota, 3 kota,
                    atau seluruh 6 kota. Harga akan disesuaikan dengan jumlah kota yang dipilih.
                    Paket 6 kota mendapatkan harga terbaik dengan diskon hingga 20% dan benefit
                    tambahan seperti listing program Campus Tour.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 4 */}
                <AccordionItem value="participation-4">
                  <AccordionTrigger className="text-left">
                    Bagaimana cara pembayaran dan kapan deadline-nya?
                  </AccordionTrigger>
                  <AccordionContent>
                    Pembayaran dilakukan melalui transfer bank ke rekening PT. VISI GENERASI MULIA.
                    Kami menawarkan diskon early bird dengan harga berbeda untuk periode
                    Oktober-Desember, Januari-Februari, dan Maret-April. Semakin awal mendaftar,
                    semakin besar diskon yang didapatkan. Hubungi kami untuk detail pembayaran
                    dan invoice.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
