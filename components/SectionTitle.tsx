type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold text-stone-900 md:text-3xl">
        {title}
      </h2>

      {subtitle ? (
        <p className="mt-2 text-sm leading-6 text-stone-600 md:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}