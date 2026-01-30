import CTA from "../CTA";

const data = {
  title: "Edit Markdown together. Without leaving GitHub.",
  subheading: (<>
    <span className="font-semibold text-primary">
      Colibri is a collaborative Markdown editor for GitHub repositories.
    </span>
    <br/>
    Open any <span className="bg-border rounded-md px-1 mx-0.5 py-0.5 text-primary/90">.md</span> file, edit in real time with your team, and merge it back as a clean pull request.
  </>),
};

const Hero = () => {
  return (
    <div className="w-full lg:grid grid-cols-12 gap-4 mt-16 lg:mt-44">
      <h1 className="col-span-10 col-start-2 text-4xl lg:text-6xl font-bold lg:text-center leading-tight">{data.title}</h1>
      <h2 className="mb-16 lg:mb-4 col-span-8 col-start-3 pt-4 px-0 lg:px-12 text-lg lg:text-md font-regular lg:text-center leading-relaxed text-muted-foreground">{data.subheading}</h2>
      <div className="col-span-6 col-start-4">
        <CTA />
      </div>
    </div>
  );
};

export default Hero;