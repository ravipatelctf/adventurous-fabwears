import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Certficates | Adventurous Fabwears",
  description:
    "Know about our cerficates"
}

export default function Page() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12 space-y-6">
      <h1 className="text-4xl font-bold text-center">Our Certificates</h1>
      <hr />
      {/* PDF Wrapper */}
      <div className="mx-auto max-w-4xl">
        <div className="relative w-full aspect-[210/297] border rounded-lg overflow-hidden bg-white">
          <iframe
            src="/certificateOfIEC.pdf"
            title="Adventurous Fabwears Catalogue"
            className="
              absolute inset-0 w-full h-full
              origin-top
              scale-90
              sm:scale-100
            "
          />
        </div>
      </div>
    </section>
  )
}
