# Site Imagery

The site references real photo paths under `public/images/`. Until you drop
actual photos in at the paths below, the `<img>` tags will render the alt
text inside a styled dark placeholder box — the page still presents
cleanly, and it's obvious what each photo should portray.

When you have real photos:

1. Save the photo as a `.jpg` (or `.webp`) at the exact path listed below.
2. If you use a different file extension, update the matching `src=` in
   the component file noted next to each entry.

All photos should:

- Feature **real people** doing the work — no stock-y "businessperson on
  white background" shots.
- Show **branded uniforms / job-site context** where possible.
- Avoid heavy yellow accents (we want the Greenshades green to read as
  the brand color, not the gear).
- Be high-resolution (at least 1600px on the long edge) and licensed for
  commercial / marketing use.

---

## Crews in Action band — `components/CrewsInAction.tsx`

These four images run as a 4-column band between the trades and
why-TradePay sections. Vertical 4:5 framing reads best.

| Path | Subject |
|------|---------|
| `crews/plumber-residential-install.jpg` | A licensed plumber in branded company uniform crouched under a residential kitchen sink installing copper supply lines. |
| `crews/hvac-tech-rooftop-unit.jpg` | An HVAC technician in branded polo and tool belt servicing a rooftop commercial air handler, gauges and service tablet in hand. |
| `crews/electrician-panel-work.jpg` | A journeyman electrician in arc-flash PPE working inside an open commercial electrical panel, voltmeter probes in hand. |
| `crews/landscaping-crew-truck.jpg` | A landscaping crew of four in matching branded shirts loading equipment into a wrapped work truck at sunrise. |

The full alt text is already written in `components/CrewsInAction.tsx` —
treat each entry as the brief when sourcing.

## Featured customer portrait — `components/Testimonial.tsx`

| Path | Subject |
|------|---------|
| `testimonials/featured-customer-portrait.jpg` | Portrait of the featured TradePay customer — a specialty contractor business owner or operations leader in branded company uniform, ideally at one of their job sites or in their shop, confident direct eye contact. ~200×240 px framing. |

Replace the placeholder testimonial copy in `components/Testimonial.tsx`
at the same time you swap in the portrait.
