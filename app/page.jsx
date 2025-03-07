
export default function Home() {
  return (
    <div className="w-full flex flex-col items-end justify-center pr-20 text-right min-h-screen pb-20">
      <h1 className="head_text">
        Find Your Future
        <br className="max-md:hidden" />
        <span className="orange_gradient"> Build your Career</span>
      </h1>
      <p className="desc m-10">
        An AI-based application that suggests the best career roles and opportunities based on the student’s interests.
      </p>
    </div>
  );
}
