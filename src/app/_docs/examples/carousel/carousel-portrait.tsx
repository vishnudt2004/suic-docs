import { Fa1, Fa2, Fa3 } from "react-icons/fa6";
import Carousel, { type Slide } from "suic/components/carousel";

function SlideContent({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 px-10 text-center text-balance *:text-gray-800">
      <h1 className="text-xl font-bold tracking-widest">{title}</h1>
      <p className="text-gray-600">{children}</p>
    </div>
  );
}

function SlideVisual({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-full place-items-center text-gray-800">
      {children}
    </div>
  );
}

export default function CarouselPortrait() {
  const slides: Slide[] = [
    {
      content: (
        <SlideContent title="Slide 01">
          This is example content for slide 01.
          <br />
          <span className="text-violet-700">
            Tip: You can modify the container style through props.
          </span>
        </SlideContent>
      ),
      visual: (
        <SlideVisual>
          <Fa1 size={100} />
        </SlideVisual>
      ),
      accentColor: "var(--color-violet-300)",
    },
    {
      content: (
        <SlideContent title="Slide 02">
          This is example content for slide 02.
          <br />
          <span className="text-blue-700">
            Tip: Use larger width and height on big screens (e.g., 1200×500).
          </span>
        </SlideContent>
      ),
      visual: (
        <SlideVisual>
          <Fa2 size={100} />
        </SlideVisual>
      ),
      accentColor: "var(--color-blue-300)",
    },
    {
      content: (
        <SlideContent title="Slide 03">
          This is example content for slide 03.
          <br />
          <span className="text-orange-700">
            Tip: You can change the decoration pattern for each slide.
          </span>
        </SlideContent>
      ),
      visual: (
        <SlideVisual>
          <Fa3 size={100} />
        </SlideVisual>
      ),
      accentColor: "var(--color-orange-300)",
    },
  ];

  return (
    <Carousel
      slides={slides}
      variant="portrait"
      config={{
        emblaOptions: { loop: true },
      }}
    />
  );
}
