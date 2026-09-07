type ServiceCardProps = {
  image: string;
  alt: string;
  number: string;
  title: string;
  description: string;
};

export default function ServiceCard({
  image,
  alt,
  number,
  title,
  description,
}: ServiceCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
      <img
        src={image}
        alt={alt}
        className="h-56 w-full object-cover"
      />

      <div className="p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-lg font-black text-blue-600">
          {number}
        </div>

        <h3 className="mt-6 text-2xl font-black">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-zinc-600">
          {description}
        </p>
      </div>
    </article>
  );
}