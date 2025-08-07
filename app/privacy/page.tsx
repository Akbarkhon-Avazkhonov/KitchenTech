import Image from "next/image"
import Link from "next/link"
import { ChefHat } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
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
            <Link href="/privacy" className="text-gray-900 font-semibold">
              Privacy Policy
            </Link>
            <Link href="/faq" className="text-gray-600 font-semibold">
              FAQ
            </Link>
          </nav>
          <Button className="bg-orange-500 hover:bg-orange-600">Shop Now</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-red-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            At KitchenTech, we value your privacy and are committed to protecting your personal information. Learn how we collect, use, and safeguard your data.
          </p>
     
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Privacy Commitment</h2>
          <p className="text-gray-600 mb-8">
            KitchenTech (“we,” “us,” or “our”) operates https://kitchen-technology.com (the “Site”). This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit our Site, subscribe to our newsletter, or interact with us through our contact form. By using our Site, you agree to the terms of this Privacy Policy.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h3>
          <p className="text-gray-600 mb-4">
            We may collect the following types of information:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
            <li><strong>Personal Information:</strong> When you subscribe to our newsletter or submit a contact form, we may collect your name, email address, and any other information you provide.</li>
            <li><strong>Usage Data:</strong> We collect information about your interactions with the Site, such as pages visited, links clicked, and time spent on the Site, using cookies and similar technologies.</li>
            <li><strong>Device Information:</strong> We may collect information about your device, including IP address, browser type, and operating system.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h3>
          <p className="text-gray-600 mb-4">
            We use your information to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
            <li>Send you newsletters with product reviews, discounts, and special offers.</li>
            <li>Respond to inquiries submitted through our contact form.</li>
            <li>Improve our Site’s content and user experience.</li>
            <li>Analyze Site usage and trends to enhance our services.</li>
            <li>Comply with legal obligations.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Sharing Your Information</h3>
          <p className="text-gray-600 mb-4">
            We do not sell your personal information. We may share your information with:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
            <li><strong>Service Providers:</strong> Third-party vendors who assist with Site operations, such as email marketing platforms or analytics providers.</li>
            <li><strong>Affiliate Partners:</strong> As part of the Amazon Services LLC Associates Program, we may share data with Amazon for affiliate tracking purposes, but this does not include personal information.</li>
            <li><strong>Legal Authorities:</strong> If required by law or to protect our rights and users.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Cookies and Tracking Technologies</h3>
          <p className="text-gray-600 mb-8">
            We use cookies to enhance your experience, analyze Site traffic, and serve personalized content. You can manage cookie preferences through your browser settings. By continuing to use our Site, you consent to our use of cookies as described in this policy.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Choices</h3>
          <p className="text-gray-600 mb-4">
            You have the following rights regarding your personal information:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
            <li><strong>Opt-Out:</strong> Unsubscribe from our newsletter at any time using the “Unsubscribe” link in our emails.</li>
            <li><strong>Access or Delete:</strong> Contact us at <a href="mailto:support@kitchen-technology.com" className="text-orange-500 hover:underline">support@kitchen-technology.com</a> to request access to or deletion of your personal information.</li>
            <li><strong>Cookies:</strong> Adjust your browser settings to disable cookies, though this may affect Site functionality.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Security</h3>
          <p className="text-gray-600 mb-8">
            We implement reasonable security measures to protect your information from unauthorized access or disclosure. However, no online platform can guarantee complete security, and you share information at your own risk.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">7. Third-Party Links</h3>
          <p className="text-gray-600 mb-8">
            Our Site contains links to third-party websites, such as Amazon.com. We are not responsible for the privacy practices of these sites. Please review their privacy policies before sharing personal information.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">8. Children’s Privacy</h3>
          <p className="text-gray-600 mb-8">
            Our Site is not intended for individuals under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have such information, please contact us immediately.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to This Privacy Policy</h3>
          <p className="text-gray-600 mb-8">
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated “Last Updated” date. Please check periodically for updates.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h3>
          <p className="text-gray-600 mb-8">
            If you have questions about this Privacy Policy, contact us at:
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
