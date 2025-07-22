export default async function SlugForCommonPages({
  params,
}: {
  params: { slug: string };
}) {
  const SlugId = await params;
  return (
    <h1 className="w-full h-full bg-teal-300 grid place-items-center text-9xl font-sans tracking-widest">
      Welcome {SlugId.slug}
    </h1>
  );
}
