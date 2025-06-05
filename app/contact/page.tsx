import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, HelpCircle, ArrowRight, CheckCircle2 } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="py-12 relative overflow-hidden rounded-2xl mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 rounded-2xl"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

        <div className="relative z-10 text-center px-4 py-16 max-w-3xl mx-auto">
          <MessageSquare className="h-16 w-16 text-white/90 mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            We'd love to hear from you. Our team is always ready to assist with your travel inquiries and help plan your
            next adventure.
          </p>
        </div>
      </section>

      {/* Contact Information and Form Section */}
      <section className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center text-foreground">
                <span className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mr-3">
                  <Phone className="h-5 w-5 text-primary" />
                </span>
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start p-6 bg-gray-50 dark:bg-gray-800 rounded-xl transition-all hover:shadow-md">
                  <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-foreground">Email Us</h3>
                    <p className="text-muted-foreground mb-1">For general inquiries:</p>
                    <p className="font-medium text-foreground">dennisopoola@gmail.com</p>
                    <p className="text-muted-foreground mb-1 mt-2">For support:</p>
                    <p className="font-medium text-foreground">support@infinitejourneys.com</p>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-gray-50 dark:bg-gray-800 rounded-xl transition-all hover:shadow-md">
                  <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-foreground">Call Us</h3>
                    <p className="text-muted-foreground mb-1">Main office:</p>
                    <p className="font-medium text-foreground">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground mb-1 mt-2">Customer service:</p>
                    <p className="font-medium text-foreground">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-gray-50 dark:bg-gray-800 rounded-xl transition-all hover:shadow-md">
                  <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-foreground">Visit Us</h3>
                    <p className="text-muted-foreground mb-1">Headquarters:</p>
                    <p className="font-medium text-foreground">123 Travel Street</p>
                    <p className="font-medium text-foreground">New York, NY 10001</p>
                    <p className="font-medium text-foreground">United States</p>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-gray-50 dark:bg-gray-800 rounded-xl transition-all hover:shadow-md">
                  <Clock className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-foreground">Business Hours</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <p className="text-muted-foreground">Monday - Friday:</p>
                      <p className="font-medium text-foreground">9:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Saturday:</p>
                      <p className="font-medium text-foreground">10:00 AM - 4:00 PM</p>
                      <p className="text-muted-foreground">Sunday:</p>
                      <p className="font-medium text-foreground">Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6 flex items-center text-foreground">
              <span className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mr-3">
                <Send className="h-5 w-5 text-primary" />
              </span>
              Send Us a Message
            </h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block font-medium text-foreground">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    placeholder="first & last"
                    className="border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block font-medium text-foreground">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="@example.com"
                    className="border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block font-medium text-foreground">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="How can we help you?"
                  className="border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Please provide details about your inquiry..."
                  rows={5}
                  className="border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary"
                />
              </div>

              <Button type="submit" className="w-full group">
                Send Message
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 mt-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-2">
              <HelpCircle className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Find quick answers to common questions about our services and booking process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl transition-all hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">How do I book a property?</h3>
                  <p className="text-muted-foreground">
                    You can book a property by creating an account, searching for your desired destination, selecting a
                    property, and completing the booking process with your payment details.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl transition-all hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">What is the cancellation policy?</h3>
                  <p className="text-muted-foreground">
                    Cancellation policies vary by property. You can find the specific cancellation policy for each
                    property on its listing page before you book.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl transition-all hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">How do I become a member?</h3>
                  <p className="text-muted-foreground">
                    You can become a member by visiting our Digital Membership page, selecting a plan that suits your
                    needs, and completing the registration process.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl transition-all hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Do you offer group bookings?</h3>
                  <p className="text-muted-foreground">
                    Yes, we offer group bookings for larger parties. Please contact our customer service team directly
                    for assistance with group reservations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" className="group">
              View All FAQs
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 relative overflow-hidden rounded-2xl mt-8">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 rounded-2xl"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

        <div className="relative z-10 text-center px-4 py-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who have discovered their dream destinations through Infinite Journeys.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="group">
              Explore Destinations
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 group"
            >
              Join Membership
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

