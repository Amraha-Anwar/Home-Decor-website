import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function AboutPage() {
  return (
    <>
      <Navbar />
      {/* about */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-lg">
            <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
              About Haven & Hues
            </h2>
            {/* 
      <!-- Story Section --> */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Story
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Welcome to <strong>Haven & Hues</strong>, where home decor meets
                artistry and style. What started as a passion for transforming
                spaces into warm, inviting havens has grown into a collection of
                thoughtfully curated pieces that elevate the look and feel of
                any room. Our journey began with a simple belief: that your home
                should be a reflection of who you are, and decorating it should
                be a joyful experience. From modern elegance to timeless
                classics, each product at Haven & Hues is selected with the goal
                of turning houses into homes.
              </p>
            </div>

            {/* <!-- Mission Section --> */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                At <strong>Haven & Hues</strong>, we are dedicated to offering
                beautiful, high-quality decor that complements every style and
                personality. We believe that home is where life happens, and our
                mission is to bring you timeless pieces that enhance your space
                without compromising on comfort or quality. Whether you’re
                looking to add a subtle touch of elegance or make a bold
                statement, our curated collections are designed to inspire.
              </p>
            </div>

            {/* <!-- Why Choose Us Section --> */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Why Choose Us
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                What sets <strong>Haven & Hues</strong> apart is our commitment
                to excellence and craftsmanship. We work with skilled artisans
                and designers who share our passion for creating pieces that are
                not only visually stunning but built to last. Our focus on
                sustainability means that we choose materials and processes that
                are kinder to the planet, ensuring that your home is as mindful
                as it is beautiful.
              </p>
            </div>

            {/* <!-- Values Section --> */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Values
              </h3>
              <ul className="list-disc pl-5 text-lg text-gray-700">
                <li>
                  <strong>Quality</strong>: Every item is handpicked to ensure
                  it meets the highest standards of design and durability.
                </li>
                <li>
                  <strong>Sustainability</strong>: We prioritize environmentally
                  responsible materials and ethical sourcing to minimize our
                  footprint.
                </li>
                <li>
                  <strong>Uniqueness</strong>: Our collections feature exclusive
                  designs that blend modern trends with timeless elegance,
                  ensuring your home stands out.
                </li>
              </ul>
            </div>

            {/* <!-- Meet the Founder Section --> */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Meet the Founder
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Amraha</strong>, the founder of Haven & Hues, has always
                had an eye for design and a love for creating spaces that feel
                like home. With a background in interior styling and a passion
                for helping others express their unique tastes, Sara launched
                Haven & Hues to bring her vision to life. Her goal is to offer
                decor that inspires and resonates with people, making home decor
                both accessible and exciting.
              </p>
            </div>

            {/* <!-- Join Us Section --> */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Join Us</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ready to transform your home into a haven? Explore our
                collections and discover the perfect pieces to elevate your
                space. Stay connected by subscribing to our newsletter for the
                latest updates and exclusive offers!
              </p>
              <a
                href="/shop"
                className="inline-block bg-slate-800 text-white font-semibold py-3 px-6 rounded-lg hover:bg-slate-800 transition"
              >
                Explore Our Collections
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
export default AboutPage;
