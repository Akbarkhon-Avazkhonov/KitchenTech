import Image from "next/image"
import Link from "next/link"
import { ChefHat } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
         
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold text-gray-900">KitchenTech</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-orange-500">
              Home
            </Link>

            <Link href="/about" className="text-gray-600 hover:text-orange-500">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-orange-500">
              Contact
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-orange-500">
              Privacy Policy
            </Link>
            <Link href="/faq" className="text-gray-900 hover:text-orange-500">
              FAQ
            </Link>
          </nav>
          <Button className="bg-orange-500 hover:bg-orange-600">Shop Now</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-red-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Welcome to KitchenTech. These Terms of Service govern your use of our website and services. By accessing our site, you agree to these terms.
          </p>
          <div className="mt-12">
            <Image
              src="https://justkitchendoors.co.uk/wp-content/uploads/2021/05/Smart-Kitchen-scaled.jpeg"
              alt="Modern kitchen with appliances"
              width={800}
              height={400}
              className="mx-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Terms</h2>
          <p className="text-gray-600 mb-8">
            These Terms of Service (“Terms”) govern your use of https://kitchen-technology.com (the “Site”), operated by KitchenTech (“we,” “us,” or “our”). By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, please do not use the Site.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Use of the Site</h3>
          <p className="text-gray-600 mb-4">
            The Site provides reviews, recommendations, and affiliate links to kitchen appliances available on Amazon. You agree to use the Site only for lawful purposes and in a manner consistent with these Terms.
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
            <li>You must be at least 13 years old to use the Site.</li>
            <li>You agree not to use the Site to engage in any illegal or unauthorized activity.</li>
            <li>You may not attempt to interfere with the Site’s functionality or security.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Affiliate Links and Third-Party Purchases</h3>
          <p className="text-gray-600 mb-4">
            KitchenTech is a participant in the Amazon Services LLC Associates Program. We earn commissions from qualifying purchases made through affiliate links on our Site. These links do not affect the price you pay.
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
            <li>All purchases are subject to Amazon’s terms, conditions, and return policies.</li>
            <li>We are not responsible for the quality, availability, or delivery of products purchased through third-party sites like Amazon.</li>
            <li>Product prices and availability are subject to change and are controlled by Amazon.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Content Accuracy</h3>
          <p className="text-gray-600 mb-8">
            We strive to provide accurate and up-to-date reviews and information about kitchen appliances. However, we do not guarantee the accuracy, completeness, or timeliness of any content on the Site. You rely on our content at your own risk.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h3>
          <p className="text-gray-600 mb-4">
            All content on the Site, including text, images, and logos, is the property of KitchenTech or its licensors and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or modify any content without our prior written consent.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">5. User Submissions</h3>
          <p className="text-gray-600 mb-4">
            If you submit information through our contact form, newsletter, or other features, you grant us a non-exclusive, royalty-free license to use, reproduce, and publish such submissions for purposes related to the Site’s operation.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h3>
          <p className="text-gray-600 mb-4">
            To the fullest extent permitted by law, KitchenTech is not liable for any damages arising from your use of the Site, including but not limited to direct, indirect, incidental, or consequential damages. The Site is provided “as is” without warranties of any kind.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">7. Indemnification</h3>
          <p className="text-gray-600 mb-8">
            You agree to indemnify and hold KitchenTech harmless from any claims, losses, or damages arising from your use of the Site or violation of these Terms.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to These Terms</h3>
          <p className="text-gray-600 mb-8">
            We may update these Terms from time to time. Changes will be posted on this page with an updated “Last Updated” date. Your continued use of the Site constitutes acceptance of the updated Terms.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">9. Governing Law</h3>
          <p className="text-gray-600 mb-8">
            These Terms are governed by the laws of the State of California, USA, without regard to its conflict of law principles. Any disputes arising from these Terms will be resolved in the courts of San Francisco, California.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h3>
          <p className="text-gray-600 mb-8">
            If you have questions about these Terms of Service, contact us at:
            <br />
            <a href="mailto:support@kitchen-technology.com" className="text-orange-500 hover:underline">support@kitchen-technology.com</a>
            <br />
            KitchenTech
            <br />
            123 Kitchen Lane, Suite 100
            <br />
            San Francisco, CA 94105, USA
          </p>
          <p className="text-gray-600">
            Last Updated: August 7, 2025
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Get the Best Deals First</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new reviews, discounts, and special offers
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-md bg-white text-gray-900 focus:outline-none"
              />
              <Button className="bg-white text-orange-500 hover:bg-gray-100">Subscribe</Button>
            </div>
            <p className="text-sm text-orange-100 mt-2">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ChefHat className="h-8 w-8 text-orange-500" />
                <span className="text-2xl font-bold">KitchenTech</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted guide in the world of kitchen appliances. Honest reviews and the best deals.
              </p>
            </div>
       
            <div>
              <h3 className="font-semibold mb-4">Information</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  Facebook
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  Instagram
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  YouTube
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p className="mb-2">© 2024 KitchenTech. All rights reserved.</p>
            <p className="text-sm">
              kitchen-technology.com is a participant in the Amazon Services LLC Associates Program, an affiliate
              advertising program designed to provide a means for sites to earn advertising fees by advertising and
              linking to Amazon.com. Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or one of its
              affiliates.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
