export function Testimonial() {
  return (
    <section className="section testimonial-section">
      <div className="section-inner">
        <div className="testimonial-inner">
          <div className="testimonial-quote-bg">&ldquo;</div>
          <div className="testimonial-layout">
            {/*
              Portrait of the featured customer. Replace
              /images/testimonials/featured-customer-portrait.jpg with a
              real photo of the person quoted, ideally in branded uniform
              on a job site or in their shop.
            */}
            <img
              className="testimonial-portrait"
              src="/images/testimonials/featured-customer-portrait.jpg"
              alt="Portrait of the featured Flux customer — a specialty contractor business owner or operations leader photographed in branded company uniform, ideally at one of their job sites or in their shop, with confident, direct eye contact."
              width={200}
              height={240}
            />
            <div className="testimonial-content">
              <blockquote>
                [Customer testimonial from a specialty contractor win —
                plumbing, HVAC, or electrical preferred. Focus: multi-state
                complexity, ERP migration, or field crew payroll.]
              </blockquote>
              <cite>
                <strong>[Name · Title · Company]</strong>
                [Trade Type] · [Headcount] employees
              </cite>
              <div className="placeholder-notice">
                ⚠ Insert real customer quote + logo before publishing
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
