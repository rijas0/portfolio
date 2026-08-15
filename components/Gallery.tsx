import Image from "next/image";

export default function Gallery({ images }: { images: string[] }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="mt-20">
      <h2 className="font-display text-2xl md:text-3xl italic font-light text-mutedtext">
        Gallery
      </h2>
      <div className="mt-8 grid grid-cols-3 sm:grid-cols-3 gap-2">
        {images.map((src, index) => (
          <Image
            src={src}
            alt={`Gallery image ${index + 1}`}
            width={400}
            height={400}
            sizes="(min-width: 350px) 20vw, 30vw"
            className="w-90 h-auto object-cover rounded-sm"
            key={`${src}-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
