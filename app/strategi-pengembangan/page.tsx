import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import ProductPotential from "@/components/sections/product-potential";
import ChannelSegmentation from "@/components/sections/channel-segmentation";
import InstitutionPriority from "@/components/sections/institution-priority";

export default function StrategiPengembanganPage() {
  return (
    <>
      <Navbar />

      <main>

        <Section
          background="gradient"
          className="pt-14 lg:pt-20"
        >
          <Container>

            <div className="mx-auto max-w-4xl text-center">

              <span className="inline-flex rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
                Strategi Pengembangan
              </span>

              <h1 className="mt-6">
                Strategi Pengembangan Pasar
              </h1>

              <p className="mt-8 text-lg leading-8 text-slate-600">
                Strategi disusun berdasarkan hasil analisis kondisi sehingga
                setiap program memiliki arah implementasi yang jelas,
                realistis, dan dapat dilaksanakan secara bertahap sesuai
                prioritas perusahaan.
              </p>

            </div>

          </Container>
        </Section>

        <ProductPotential />

        <ChannelSegmentation />

        <InstitutionPriority />

        <Section>

          <Container>

            <div className="executive-box">

              <h2 className="text-white">
                Kesimpulan Strategi
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                Strategi difokuskan pada pengembangan wilayah prioritas,
                optimalisasi saluran distribusi, peningkatan kerja sama
                institusi, dan pemilihan produk yang sesuai dengan karakter
                masing-masing saluran distribusi.
              </p>

              <div className="mt-10">
                <Button href="/rencana-implementasi">
                  Lanjut ke Rencana Implementasi
                </Button>
              </div>

            </div>

          </Container>

        </Section>

      </main>

      <Footer />
    </>
  );
}