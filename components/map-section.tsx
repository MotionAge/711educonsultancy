export function MapSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Find Us</h2>
          <p className="text-lg text-muted-foreground text-pretty">Visit our office in the heart of Kathmandu</p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1234567890123!2d85.31234567890123!3d27.71234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQyJzQ0LjQiTiA4NcKwMTgnNDQuNCJF!5e0!3m2!1sen!2snp!4v1234567890123!5m2!1sen!2snp"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="7 Eleven Education Consultancy Location"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
