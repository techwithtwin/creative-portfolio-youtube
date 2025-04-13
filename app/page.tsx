import {
  AboutMe,
  Blogs,
  Brands,
  Hero,
  Projects,
  Testimonials,
} from "@/components/home";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Brands />
      <Projects />
      <Testimonials />
      <Blogs />
    </>
  );
}
