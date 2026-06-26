import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const steps = [
  {
    title: "Analisis Kondisi",
    description:
      "Mengidentifikasi kondisi pasar, karakteristik wilayah, jaringan distribusi, dan peluang pengembangan.",
  },
  {
    title: "Penentuan Prioritas",
    description:
      "Menetapkan wilayah, saluran distribusi, serta institusi yang menjadi fokus pengembangan.",
  },
  {
    title: "Penyusunan Strategi",
    description:
      "Merumuskan strategi pengembangan berdasarkan hasil analisis dan prioritas yang telah ditetapkan.",
  },
  {
    title: "Implementasi Bertahap",
    description:
      "Melaksanakan program pengembangan sesuai urutan prioritas dan kesiapan sumber daya.",
  },
  {
    title: "Evaluasi",
    description:
      "Melakukan pemantauan pelaksanaan sebagai dasar penyempurnaan strategi berikutnya.",
  },
];

export default function StrategyApproach() {
  return (
    <Section background="white">
      <Container>

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Pendekatan Strategi
          </span>

          <h2 className="mt-6">
            Tahapan Penyusunan Strategi
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Penyusunan strategi dilakukan melalui tahapan yang sistematis,
            dimulai dari analisis kondisi hingga evaluasi implementasi.
          </p>

        </div>

        <div className="space-y-8">

          {steps.map((step, index) => (

            <div
              key={step.title}
              className="card flex flex-col gap-6 p-8 lg:flex-row lg:items-start"
            >

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 text-xl font-bold text-white">
                {index + 1}
              </div>

              <div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {step.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </Container>
    </Section>
  );
}