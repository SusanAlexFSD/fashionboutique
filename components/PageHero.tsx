type PageHeroProps = {
  title: string;
  subtitle?: string;
};

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="border-b border-stone-200 bg-[#f3e8dc]">
      <div className="mx-auto max-w-7xl px-6 py-14 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
          {title}
        </h1>

        {subtitle ? (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-stone-600 md:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}