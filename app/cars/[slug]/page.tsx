import CarDetail from "@/components/CarDetail";
import { cars } from "@/data/cars";
import { notFound } from "next/navigation";

interface CarDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CarDetailPage({
  params,
}: CarDetailPageProps) {

  const { slug } = await params;

  const car = cars.find(
    (item) => item.slug === slug
  );

  if (!car) {
    notFound();
  }

  // The page itself stays a server component (data lookup + 404).
  // The bilingual UI lives in the client component below.
  return <CarDetail slug={slug} />;
}
