export function MapSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Find Us</h2>
          <p className="text-lg text-muted-foreground text-pretty">Visit our office</p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg">
         <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2270.817987737209!2d85.4234268346936!3d27.665429333518638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1aa658380e9b%3A0xf3f6e9f47ac0905a!2sSuryabinayak%20Bus%20Station!5e1!3m2!1sen!2snp!4v1755843091356!5m2!1sen!2snp"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
      </div>
    </section>
  )
}
