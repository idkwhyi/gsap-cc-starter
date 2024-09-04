import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all"; // Scroll Trigger is a plugin
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

const GsapScrollTrigger = () => {
  // TODO: Implement the gsap scroll trigger

  const scrollRef = useRef()

  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children) // to get the 2 boxes by using it's parend

    boxes.forEach(box => {
      gsap.to(box, {
        x: 150 * (boxes.indexOf(box) + 1),
        y: 150 * (boxes.indexOf(box) + 1),
        rotation: 360,
        borderRadius: 100,
        scale: 1.5,
        scrollTrigger: {
          trigger: box, // if box is on viewport then the animation begin
          start: 'bottom bottom', // this mean the animation will begin after the bottom of the box hit the bottom of the viewport
          end: 'top 50%', // the animation will end if the top of the box hit 20% of the viewport
          scrub: true // to make the animation smoother
        },
        ease: 'power1.inOut'
      })
    });
  }, {scope: scrollRef}) // by adding a scope: scrollRef it will know when the animation is happend

  return (
    <main>
      <h1>GsapScrollTrigger</h1>

      <p className="mt-5 text-gray-500">
        Gsap Scroll Trigger is a plugin that allows you to create animations
        that are triggered by the scroll position of the page.
      </p>

      <p className="mt-5 text-gray-500">
        With ScrollTrigger, you can define various actions to be triggered at
        specific scroll points, such as starting or ending an animation,
        scrubbing through animations as the user scrolls, pinning elements to
        the screen, and more.{" "}
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap scroll trigger
        </a>{" "}
        method.
      </p>

      <div className="w-full h-[70vh] flex justify-center items-center flex-col">
        <p className="text-center text-gray-500">
          Scroll down to see the animation
        </p>

        <svg
          className="animate-bounce mt-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7 7 7-7" />
        </svg>
      </div>

      <div className="mt-20 w-full h-screen" ref={scrollRef}>
        <div
          id="scroll-pink"
          className="scroll-box w-20 h-20 rounded-lg bg-pink-500"
        />
        <div
          id="scroll-orange"
          className="scroll-box w-20 h-20 rounded-lg bg-orange-500"
        />
      </div>
    </main>
  );
};

export default GsapScrollTrigger;
