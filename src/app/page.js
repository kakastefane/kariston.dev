import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full flex flex-col lg:flex-row gap-12 items-center justify-between">
      <div className="order-2 px-4 lg:px-0 lg:order-none flex flex-col items-center lg:items-start justify-center">
        <h3 className="text-2xl lg:text-3xl leading-normal mb-8 text-center lg:text-left">
          Hello 👋,
          <br />
          I’m an Front-End Developer,
          <br />
          <strong>Shopify Expert and WordPress Specialist</strong>,
          <br />
          based in Florianópolis - Brazil.
        </h3>
        <p className="text-xl leading-normal text-center lg:text-left max-w-4xl">
          I currently work at{" "}
          <a
            href="https://checkstore.com.br"
            title="Checkstore"
            className="hover:underline hover:text-black dark:hover:text-white underline-offset-4"
          >
            Checkstore
          </a>{" "}
          with several brands and retailers from Brazil and the world developing
          e-commerces and providing support for their stores.
        </p>
      </div>
      <div className="w-full max-w-lg order-1 lg:order-none">
        <Image
          className="md:rounded-full w-full h-auto"
          src="/profile.jpeg"
          alt="Kariston Stefane da Silva"
          width="1000"
          height="1000"
        />
      </div>
    </section>
  );
}
