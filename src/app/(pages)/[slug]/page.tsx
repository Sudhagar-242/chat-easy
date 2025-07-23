export default async function SlugForCommonPages({
  params,
}: {
  params: { slug: string };
}) {
  const SlugId = await params;
  return <h1 className="pages-default">Welcome {SlugId.slug}</h1>;
}
