
import Image from "next/image"
import Link from "next/link"
import { ChefHat } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
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

            <Link href="/about" className="text-gray-900 font-semibold">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-orange-500">
              Contact
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-orange-500">
              Privacy Policy
            </Link>
            <Link href="/faq" className="text-gray-600 ">
              FAQ
            </Link>
          </nav>
          <Button className="bg-orange-500 hover:bg-orange-600">Shop Now</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-red-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About KitchenTech</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We are a team of culinary and technology enthusiasts dedicated to helping you find the best kitchen appliances for your home.
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

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 mb-8">
              At KitchenTech, our mission is to simplify your search for the perfect kitchen appliances. We combine our passion for cooking and technology to provide honest, detailed reviews and recommendations, ensuring you make informed decisions for your home.
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-xl text-gray-600 mb-8">
              Founded by a group of culinary experts and tech enthusiasts, KitchenTech has been helping customers choose reliable and high-quality kitchen appliances for over five years. We test every product thoroughly to ensure it meets our high standards for performance, durability, and ease of use.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center mt-12">
              <div>
                <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
                <p className="text-gray-600">Products Tested</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-500 mb-2">50K+</div>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-500 mb-2">5</div>
                <p className="text-gray-600">Years of Experience</p>
              </div>
            </div>
          </div>
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
