import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const summary = [
  {
    title: "Tujuan Presentasi",
    description:
      "Menyampaikan pendekatan yang digunakan untuk meningkatkan penetrasi pasar melalui analisis kondisi, penentuan prioritas, penyusunan strategi, dan implementasi yang terarah.",
  },
  {
    title: "Permasalahan Yang Dihadapi",
    description:
      "Peluang pasar belum dipetakan secara menyeluruh sehingga pengembangan wilayah dan program sering kali belum memiliki dasar prioritas yang sama.",
  },
  {
    title: "Pendekatan Yang Digunakan",
    description:
      "Strategi disusun melalui empat tahapan sederhana, yaitu memahami kondisi, menentukan prioritas, menyusun strategi, dan melaksanakan implementasi secara bertahap.",
  },
  {
    title: "Hasil Yang Diharapkan",
    description:
      "Perusahaan memiliki arah pengembangan pasar yang lebih jelas, pemanfaatan sumber daya yang lebih efektif, serta keputusan yang lebih terukur.",
  },
];

export default function ExecutiveSummary() {
  return (
    <Section background="white">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold text-sky-700">
            Ringkasan Eksekutif
          </span>

          <h2 className="mt-6">
            Gambaran Singkat Sebelum Memulai Presentasi
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Bagian ini memberikan gambaran umum mengenai tujuan, tantangan,
            pendekatan, dan hasil yang ingin dicapai sehingga pembaca memiliki
            pemahaman yang sama sebelum memasuki pembahasan yang lebih rinci.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {summary.map((item) => (
            <Card
              key={item.title}
              title={item.title}
            >
              <p className="leading-8 text-slate-600">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}