import { CtaBanner } from "./CtaBanner";
import { FaqSection } from "./Faq";
import { Testimonials } from "./Testimonials";
import { getFaqs, getTestimonials } from "@/lib/data";

/** The shared Testemunhos → Dúvidas → CTA block that closes every page. */
export async function PageClosing({
  withTestimonials = true,
}: {
  withTestimonials?: boolean;
}) {
  const [testimonials, faqs] = await Promise.all([
    getTestimonials(),
    getFaqs(),
  ]);

  return (
    <>
      {withTestimonials && <Testimonials items={testimonials} />}
      <FaqSection items={faqs} />
      <CtaBanner />
    </>
  );
}
