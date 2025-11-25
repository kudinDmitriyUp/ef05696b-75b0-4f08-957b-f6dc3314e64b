"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import SplitAboutMetric from '@/components/sections/about/SplitAboutMetric';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { ChefHat, Facebook, Instagram, Leaf, Sparkles, Wine } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="large"
      sizing="small"
      background="fluid"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Savory Kitchen"
          button={{
            text: "Reserve Table",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Culinary Excellence Awaits"
          description="Experience refined dining with our seasonal menu crafted by master chefs using the finest local and international ingredients."
          tag="Fine Dining"
          buttons={[
            {
              text: "Reserve Your Table",
              href: "contact"
            },
            {
              text: "View Menu",
              href: "#features"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764064859095-gm0unj7p.jpg",
              imageAlt: "Gourmet plated food dish"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764064859980-5xlzg2zk.jpg",
              imageAlt: "Fine dining restaurant elegant setting"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764064864472-nsargpfr.jpg",
              imageAlt: "Fresh ingredients colorful food preparation"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764064866320-p9mruhbo.jpg",
              imageAlt: "Restaurant interior ambiance"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764064867996-zbfq5bxt.jpg",
              imageAlt: "Chef preparing food professionally"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764064868883-i0804y4d.jpg",
              imageAlt: "Dessert plating fine dining"
            }
          ]}
        />
      </div>
      
      <div id="about" data-section="about">
        <SplitAboutMetric
          title="A Legacy of Culinary Passion"
          description={[
            "Since opening our doors, Savory Kitchen has been dedicated to delivering an unforgettable dining experience. Our chef-driven approach combines traditional cooking techniques with contemporary innovation, celebrating the finest seasonal ingredients. Every dish tells a story of craftsmanship, creativity, and our commitment to excellence."
          ]}
          metrics={[
            {
              label: "Years of Excellence",
              value: "15+"
            },
            {
              label: "Satisfied Guests Annually",
              value: "12K+"
            }
          ]}
        />
      </div>
      
      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Why Choose Savory Kitchen"
          description="Discover what makes our restaurant a destination for food lovers and special occasions."
          tag="Dining Experience"
          features={[
            {
              title: "Seasonal Menu",
              description: "Our menu changes with the seasons, showcasing the freshest ingredients from local suppliers and global sources.",
              icon: Leaf
            },
            {
              title: "Expert Chefs",
              description: "Our culinary team brings decades of combined experience and passion for creating memorable dishes.",
              icon: ChefHat
            },
            {
              title: "Elegant Ambiance",
              description: "Dine in our thoughtfully designed dining room with intimate lighting and refined décor.",
              icon: Sparkles
            },
            {
              title: "Wine Selection",
              description: "Curated wine pairings from renowned vineyards to complement your meal perfectly.",
              icon: Wine
            }
          ]}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Our Guests Say"
          description="Hear from diners who have experienced our culinary excellence firsthand."
          tag="Reviews"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              handle: "@sarahdines",
              testimonial: "The most memorable dining experience of my life. Every course was a masterpiece, and the service was impeccable. I recommend Savory Kitchen to everyone.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764064891302-ml0f3qj2.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "James Chen",
              handle: "@foodlover_james",
              testimonial: "Exceptional flavors and perfect execution. The chef truly understands their craft. Can't wait to return for another unforgettable evening.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764064892102-oupn6ur5.jpg",
              imageAlt: "James Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              handle: "@emmats",
              testimonial: "We celebrated our anniversary here and it was absolutely perfect. The ambiance, the food, everything was spectacular. Thank you for making our night special.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764064893192-6thqzkra.jpg",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",
              name: "Michael Thompson",
              handle: "@michaelevents",
              testimonial: "Hosted a corporate dinner and all our guests were blown away. Professional service, outstanding food, and elegant setting. Highly recommended for any special event.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764064901559-xi92rtjt.jpg",
              imageAlt: "Michael Thompson"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reserve Now"
          title="Book Your Dining Experience"
          description="Reserve your table at Savory Kitchen and prepare for an evening of culinary excellence. Contact us for special occasions, group bookings, or private events."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764064904282-2wkaz2cm.jpg"
          imageAlt="Gourmet dining presentation"
          mediaPosition="right"
          inputPlaceholder="Your email address"
          buttonText="Reserve Table"
          termsText="We'll send you reservation details and special offers. We respect your privacy."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Savory Kitchen"
          columns={[
            {
              title: "Hours",
              items: [
                {
                  label: "Lunch: 11:30 AM - 2:30 PM",
                  href: "#"
                },
                {
                  label: "Dinner: 5:00 PM - 11:00 PM",
                  href: "#"
                },
                {
                  label: "Closed Mondays",
                  href: "#"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Phone: (555) 123-4567",
                  href: "#"
                },
                {
                  label: "Email: hello@savory.com",
                  href: "#"
                },
                {
                  label: "Address: 123 Culinary Lane",
                  href: "#"
                }
              ]
            },
            {
              title: "Quick Links",
              items: [
                {
                  label: "Menu",
                  href: "#features"
                },
                {
                  label: "Reserve",
                  href: "#contact"
                },
                {
                  label: "About",
                  href: "#about"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com",
              ariaLabel: "Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com",
              ariaLabel: "Facebook"
            }
          ]}
          copyrightText="© Savory Kitchen, Inc. 2025. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}