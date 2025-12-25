import type { ContactMethod } from '@/types';

interface ContactProps {
  methods: ContactMethod[];
}

export default function Contact({ methods }: ContactProps) {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Let&apos;s Work Together</h2>
      <div className="contact-container">
        <div className="contact-methods">
          {methods.map((method) => (
            <a
              key={method.title}
              href={method.link}
              className="contact-method"
              target={method.target}
            >
              <i className={method.icon} />
              <div>
                <h4>{method.title}</h4>
                <p>{method.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
