"use client";
import Link from "next/link";
import SwiperCarousel from "@/components/ui/SwiperCarousel";

const blogPosts = [
  {
    img: "/assets/images/blog/grid/1.jpg",
    alt: "6 tips to protect your mental health when sick",
    categories: ["mental health", "wellness"],
    author: "martin king",
    title: "6 tips to protect your mental health when sick",
    bio: "It's normal to feel anxiety, worry and grief any time you're diagnosed with a condition that's certainly true if you test positive for COVID-19, or...",
  },
  {
    img: "/assets/images/blog/grid/2.jpg",
    alt: "Unsure About Wearing a Face Mask? How and Why",
    categories: ["infectious", "tips"],
    author: "John Ezak",
    title: "Unsure About Wearing a Face Mask? How and Why",
    bio: "That means that you should still be following any shelter-in-place orders in your community. But when you're venturing out to the grocery store, pharmacy or...",
  },
  {
    img: "/assets/images/blog/grid/3.jpg",
    alt: "Tips for Eating Healthy When Working From Home",
    categories: ["lifestyle", "nutrition"],
    author: "Saul Wade",
    title: "Tips for Eating Healthy When Working From Home",
    bio: "You're on a conference call and somehow wandered into the kitchen. Next thing know you're eating crackers and dry cereal out of the box. Or...",
  },
  {
    img: "/assets/images/blog/grid/4.jpg",
    alt: "Why Coronavirus Cases Among Adults Is Bad News",
    categories: ["mental health", "wellness"],
    author: "Mark Ezak",
    title: "Why Coronavirus Cases Among Adults Is Bad News",
    bio: "A new surge of coronavirus cases has spread across the country and while there's still so much to learn about the virus, how it's transmitted...",
  },
  {
    img: "/assets/images/blog/grid/5.jpg",
    alt: "Why Do People Get Kidney Stones in the Summer?",
    categories: ["infectious", "tips"],
    author: "Janette Baker",
    title: "Why Do People Get Kidney Stones in the Summer?",
    bio: "Summer may have just officially started, but kidney stone season began a couple of weeks ago. Doctors see an increase in kidney stone cases when...",
  },
  {
    img: "/assets/images/blog/grid/6.jpg",
    alt: "Do Any Drugs Really Work to Treat Coronavirus?",
    categories: ["lifestyle", "nutrition"],
    author: "Marie Black",
    title: "Do Any Drugs Really Work to Treat Coronavirus?",
    bio: "While most people who get COVID-19 are able to recover at home, the rush is on to find a treatment that's safe and effective against...",
  },
];

export default function BlogCarousel() {
  return (
    <section className="blog blog-grid blog-grid-3" id="blog-2">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 offset-lg-3">
            <div className="heading heading-7 text-center">
              <p className="heading-subtitle">health essentials</p>
              <h2 className="heading-title">recent articles</h2>
            </div>
          </div>
        </div>
        <SwiperCarousel
          slidesPerView={3}
          slidesPerViewMd={2}
          pagination
          autoplay
          loop
          spaceBetween={30}
          speed={200}
        >
          {blogPosts.map((post, i) => (
            <div key={i}>
              <div className="blog-entry" data-hover="">
                <div className="entry-img">
                  <div className="entry-date">
                    <div className="entry-content">
                      <span className="day">20</span>
                      <span className="month">jan</span>
                      <span className="year">2021</span>
                    </div>
                  </div>
                  <Link href="/blog-single-sidebar">
                    <img src={post.img} alt={post.alt} />
                  </Link>
                </div>
                <div className="entry-content">
                  <div className="entry-meta">
                    <div className="entry-category">
                      {post.categories.map((cat, j) => (
                        <a key={j} href="#" onClick={(e) => e.preventDefault()}>{cat}</a>
                      ))}
                    </div>
                    <div className="divider"></div>
                    <div className="entry-author">
                      <p>{post.author}</p>
                    </div>
                  </div>
                  <div className="entry-title">
                    <h4><Link href="/blog-single-sidebar">{post.title}</Link></h4>
                  </div>
                  <div className="entry-bio">
                    <p>{post.bio}</p>
                  </div>
                  <div className="entry-more">
                    <Link className="btn btn--white btn-line btn-line-before btn-line-inversed" href="/blog-single-sidebar">
                      <div className="line"><span></span></div>
                      <span>read more</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </SwiperCarousel>
      </div>
    </section>
  );
}
