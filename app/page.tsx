import Image from "next/image"
import Link from "next/link"
import { Star, Zap, Shield, Truck, Award, ChefHat, Clock, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function KitchenTechLanding() {
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
            <Link href="#products" className="text-gray-600 hover:text-orange-500">
              Products
            </Link>
            <Link href="#reviews" className="text-gray-600 hover:text-orange-500">
              Reviews
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-orange-500">
              About
            </Link>
            <Link href="#faq" className="text-gray-600 hover:text-orange-500">
              FAQ
            </Link>
          </nav>
          <Button className="bg-orange-500 hover:bg-orange-600">Shop Now</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-red-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Best Kitchen Appliances for Your Home</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover premium electric kitchen appliances. Professional reviews, honest ratings, and the best prices on
            Amazon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-3">
              Browse Catalog
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent">
              Read Reviews
            </Button>
          </div>
          <div className="mt-12">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Kitchen Appliances"
              width={800}
              height={400}
              className="mx-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600 text-sm">Only verified brands and reliable products</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">Amazon Prime shipping worldwide</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="font-semibold mb-2">Expert Reviews</h3>
              <p className="text-gray-600 text-sm">Detailed testing by professionals</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600 text-sm">Current discounts and special offers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Categories</h2>
            <p className="text-xl text-gray-600">Choose the right kitchen appliance category for you</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Blenders and Mixers"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">Blenders & Mixers</CardTitle>
                <CardDescription className="mb-4">
                  Powerful blenders for smoothies, soups, and cocktails. Professional mixers for baking.
                </CardDescription>
                <Badge variant="secondary">15+ products</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Coffee Machines"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">Coffee Machines</CardTitle>
                <CardDescription className="mb-4">
                  Espresso machines, drip coffee makers, French presses, and premium coffee grinders.
                </CardDescription>
                <Badge variant="secondary">25+ products</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Multi-cookers"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">Multi-cookers & Pressure Cookers</CardTitle>
                <CardDescription className="mb-4">
                  Smart multi-cookers, Instant Pot pressure cookers, and slow cookers for healthy cooking.
                </CardDescription>
                <Badge variant="secondary">20+ products</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Toasters and Grills"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">Toasters & Grills</CardTitle>
                <CardDescription className="mb-4">
                  Modern toasters, contact grills, and sandwich makers for quick breakfasts.
                </CardDescription>
                <Badge variant="secondary">12+ products</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Food Processors"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">Food Processors</CardTitle>
                <CardDescription className="mb-4">
                  Multi-functional processors for chopping, grinding, and dough preparation.
                </CardDescription>
                <Badge variant="secondary">18+ products</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Microwaves"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">Microwave Ovens</CardTitle>
                <CardDescription className="mb-4">
                  Modern microwaves with convection, grill, and smart cooking functions.
                </CardDescription>
                <Badge variant="secondary">10+ products</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Best Sellers</h2>
            <p className="text-xl text-gray-600">Most popular products this month</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=250&width=300"
                  alt="Vitamix Professional"
                  width={300}
                  height={250}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-4 left-4 bg-red-500">Best Seller</Badge>
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">Vitamix Professional Series 750</CardTitle>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">(1,247 reviews)</span>
                </div>
                <CardDescription className="mb-4">
                  Professional blender with 2.2 HP motor. Perfect for smoothies, soups, and nut butters.
                </CardDescription>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-green-600">$449.95</span>
                    <span className="text-sm text-gray-500 line-through ml-2">$579.95</span>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600">Buy on Amazon</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=250&width=300"
                  alt="Breville Barista Express"
                  width={300}
                  height={250}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-4 left-4 bg-blue-500">Editor's Choice</Badge>
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">Breville Barista Express</CardTitle>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">(2,891 reviews)</span>
                </div>
                <CardDescription className="mb-4">
                  Espresso machine with built-in grinder. Professional quality for home use.
                </CardDescription>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-green-600">$699.95</span>
                    <span className="text-sm text-gray-500 line-through ml-2">$799.95</span>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600">Buy on Amazon</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=250&width=300"
                  alt="Instant Pot Duo"
                  width={300}
                  height={250}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-4 left-4 bg-green-500">New</Badge>
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">Instant Pot Duo 7-in-1</CardTitle>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">(89,432 reviews)</span>
                </div>
                <CardDescription className="mb-4">
                  7-in-1 multi-cooker: pressure cooker, slow cooker, rice cooker, steamer, and more.
                </CardDescription>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-green-600">$79.95</span>
                    <span className="text-sm text-gray-500 line-through ml-2">$99.95</span>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600">Buy on Amazon</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
            <p className="text-xl text-gray-600">What our customers say about their purchases</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Excellent website with detailed reviews! Bought the Vitamix blender based on their recommendation -
                  very satisfied with the purchase. Fast Amazon delivery."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-500 font-semibold">M</span>
                  </div>
                  <div>
                    <p className="font-semibold">Maria K.</p>
                    <p className="text-sm text-gray-500">New York</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Professional reviews helped me choose the perfect coffee machine. Now every morning starts with
                  perfect espresso!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-500 font-semibold">A</span>
                  </div>
                  <div>
                    <p className="font-semibold">Alex P.</p>
                    <p className="text-sm text-gray-500">Los Angeles</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Instant Pot changed my life! Cooking is now fast and delicious. Thanks for the honest review and
                  great price."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-500 font-semibold">E</span>
                  </div>
                  <div>
                    <p className="font-semibold">Emma S.</p>
                    <p className="text-sm text-gray-500">Chicago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">Benefits of shopping through KitchenTech</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expert Evaluation</h3>
                    <p className="text-gray-600">
                      Every product undergoes thorough testing by our experts. We test performance, build quality, and
                      ease of use.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Save Time</h3>
                    <p className="text-gray-600">
                      Don't spend hours searching and comparing. We've already done it for you, providing detailed
                      reviews and ratings of the best products.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Amazon Guarantee</h3>
                    <p className="text-gray-600">
                      All purchases are protected by Amazon's guarantee. Fast shipping, easy returns, and reliable
                      customer support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Modern kitchen with appliances"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Answers to popular questions about buying kitchen appliances</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>How do you test kitchen appliances?</AccordionTrigger>
                <AccordionContent>
                  We conduct comprehensive testing of each device for a minimum of 2 weeks. We evaluate performance,
                  build quality, ease of use, energy consumption, and value for money. All tests are conducted under
                  real-world usage conditions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Do you receive commission from sales?</AccordionTrigger>
                <AccordionContent>
                  Yes, we participate in Amazon's affiliate program and receive a small commission from sales. This
                  doesn't affect the price of products for you, but helps us maintain the site and create quality
                  reviews. Our recommendations are always honest and independent.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How often are reviews updated?</AccordionTrigger>
                <AccordionContent>
                  We regularly update our reviews when new models appear or prices change. Main reviews are revised
                  every 6 months, and price and availability information is updated daily.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What if the product doesn't fit?</AccordionTrigger>
                <AccordionContent>
                  Amazon provides a generous return policy. Most products can be returned within 30 days for a full
                  refund. For some product categories, the return period may be extended. Always check the return
                  conditions on the product page.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Do you ship to other countries?</AccordionTrigger>
                <AccordionContent>
                  We don't handle shipping directly - all purchases are made through Amazon. Amazon ships to many
                  countries worldwide, but shipping conditions and costs may vary depending on the region. Check
                  shipping availability to your country on Amazon's website.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
              <Input type="email" placeholder="Your email address" className="bg-white" />
              <Button className="bg-white text-orange-500 hover:bg-gray-100">Subscribe</Button>
            </div>
            <p className="text-sm text-orange-100 mt-2">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About KitchenTech</h2>
            <p className="text-xl text-gray-600 mb-8">
              We are a team of culinary and technology enthusiasts who help people choose the best kitchen appliances
              for their homes.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
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
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Blenders
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Coffee Machines
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Multi-cookers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Toasters
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Information</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
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
