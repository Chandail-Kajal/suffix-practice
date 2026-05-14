"use client"

// components/footer.tsx

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: string;
  href: string;
  alt?: string;
}

interface FooterProps {
  logo?: string;
  phoneIcon?: string;
  contactIcon?: string;

  phones?: string[];

  quickLinks?: FooterLink[];
  helpLinks?: FooterLink[];

  socialLinks?: SocialLink[];

  newsletterPlaceholder?: string;
  newsletterButtonText?: string;

  copyright?: string;
  className?: string;
}

export default function Footer({
  logo = "/assets/logo.svg",
  phoneIcon = "/assets/headphone.svg",
  contactIcon = "/assets/contactcard.svg",

  phones = ["+91 93768 84752", "+91 99250 00237"],

  quickLinks = [
    { label: "Home", href: "#" },
    { label: "Solution", href: "#" },
    { label: "Insights", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
  ],

  helpLinks = [
    { label: "Blog", href: "#" },
    { label: "Events", href: "#" },
    { label: "Contact Us", href: "#" },
  ],

  socialLinks = [
    {
      icon: "/assets/facebook.svg",
      href: "#",
      alt: "Facebook",
    },
    {
      icon: "/assets/linkdin.svg",
      href: "#",
      alt: "LinkedIn",
    },
  ],

  newsletterPlaceholder = "Enter Your Email Address",
  newsletterButtonText = "SUBSCRIBE",

  copyright = "© 2025 Suffix, Inc. All rights reserved.",

  className = "",
}: FooterProps) {
  return (
    <footer
      className={`w-full bg-[#006d7c] text-white ${className}`}
    >
      <div className="max-w-[1650px] mx-auto px-6 lg:px-14 pt-16 lg:pt-20 pb-8">
        {/* TOP */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.6fr_0.6fr_1fr] gap-16">
          {/* LEFT */}
          <div>
            {/* Logo */}
            <img
              src={logo}
              alt="Logo"
              className="w-[260px] lg:w-[320px] object-contain"
            />

            {/* Contact */}
            <div className="mt-14">
              <p className="text-[12px] uppercase tracking-[0.18em] text-white/90">
                Connect With Us
              </p>

              {/* Phone Numbers */}
              <div className="mt-8 flex items-start gap-4">
                <img
                  src={phoneIcon}
                  alt="Phone"
                  className="w-10 h-10 object-contain flex-shrink-0"
                />

                <div className="space-y-1">
                  {phones.map((phone) => (
                    <p
                      key={phone}
                      className="text-[18px] lg:text-[20px] text-white"
                    >
                      {phone}
                    </p>
                  ))}
                </div>
              </div>

              {/* Contact Button */}
              <button className="mt-10 border border-white w-full max-w-[380px] h-[76px] flex items-center justify-center gap-5 hover:bg-white hover:text-[#006d7c] transition-all duration-300">
                <img
                  src={contactIcon}
                  alt="Contact"
                  className="w-8 h-8 object-contain"
                />

                <span className="uppercase tracking-[0.14em] text-[13px] lg:text-[14px]">
                  Contact Online
                </span>
              </button>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-[28px] lg:text-[34px] font-semibold mb-10">
              Quick Link
            </h3>

            <ul className="space-y-6">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[20px] lg:text-[24px] hover:opacity-80 transition-opacity"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* HELP */}
          <div>
            <h3 className="text-[28px] lg:text-[34px] font-semibold mb-10">
              Help
            </h3>

            <ul className="space-y-6">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[20px] lg:text-[24px] hover:opacity-80 transition-opacity"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-[28px] lg:text-[34px] font-semibold mb-12">
              Newsletter
            </h3>

            {/* Newsletter Form */}
            <form className="flex items-center gap-8">
              <input
                type="email"
                placeholder={newsletterPlaceholder}
                className="w-full bg-transparent border-b border-white pb-3 text-[18px] lg:text-[22px] placeholder:text-white/85 outline-none"
              />

              <button
                type="submit"
                className="border-b border-white pb-3 text-[18px] lg:text-[22px] font-semibold uppercase whitespace-nowrap"
              >
                {newsletterButtonText}
              </button>
            </form>

            {/* Social */}
            <div className="mt-32">
              <p className="text-[12px] uppercase tracking-[0.18em] text-white/90 mb-8">
                Follow Us On Social Media
              </p>

              <div className="flex items-center gap-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.alt}
                  >
                    <img
                      src={social.icon}
                      alt={social.alt}
                      className="w-7 h-7 object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <p className="text-[16px] lg:text-[18px] text-white/95">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}