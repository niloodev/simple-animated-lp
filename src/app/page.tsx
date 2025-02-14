import { Button, Heading } from "@/components/atoms";
import { RevealSection, Mockup, StarContainer } from "@/components/organisms";
import { Flex, Sticky, Wrapper } from "@/components/templates";
import { Metadata } from "next";

export const metadata: Metadata = {
  keywords: [
    "Next.js",
    "React",
    "Cheesecake Labs",
    "Animated",
    "Framer Motion",
  ],
  authors: [{ name: "Ezequiel Nilo", url: "https://github.com/niloodev" }],
  creator: "Ezequiel Nilo",
  publisher: "@niloodev",
  robots: "index, follow",
  openGraph: {
    title: "Simple Animated Landing Page",
    description:
      "Animated Landing Page created for the Cheesecake Dev Challenge! Created in 13/02/2025.",
    url: "https://seusite.com/pagina",
    siteName: "https://github.com/niloodev",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ezeqnilo",
    creator: "@ezeqnilo",
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://simple-animated-lp.vercel.app/",
    languages: {
      "pt-BR": "https://simple-animated-lp.vercel.app/",
    },
  },
};

export default function Home() {
  return (
    <>
      <StarContainer />
      <Wrapper as="main">
        <Flex
          as="div"
          flex={{ default: "column" }}
          gap={{ default: "6.4rem", desktop: "8.8rem" }}
          align={{ default: "stretch" }}
        >
          <Heading
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Lorem ipsum dolor sit amet: consectetur adipiscing elit' nullam
            convallis nunc lectus posuere et vestibulum integer pharetra.
          </Heading>
          <Flex
            as="section"
            flex={{ default: "column-reverse", desktop: "row" }}
            gap={{ default: "6.3rem" }}
            justify={{ default: "flex-start", desktop: "space-between" }}
            align={{ default: "center", desktop: "stretch" }}
          >
            <RevealSection
              elements={[
                {
                  title: "Lorem ipsum",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus real-time nunc, sed egestas dictum massa id, feugiat euismod.",
                },
                {
                  title: "Lorem ipsum dolor sit",
                  description:
                    "Nulla lorem tincidunt. Pulvinar et sapien sit amet blandit odio lectus euismod quam ut justo. Integer ornare.",
                },
                {
                  title: "Lorem ipsum dolor sit",
                  description:
                    "Nulla lorem tincidunt. Pulvinar et sapien sit amet blandit odio lectus euismod quam ut justo. Integer ornare.",
                  isAccordion: true,
                },
              ]}
              footerElement={
                <Button
                  as="a"
                  $buttonStyle="ButtonA"
                  href="https://cheesecakelabs.com/br/"
                >
                  LEARN MORE
                </Button>
              }
            />
            <Sticky>
              <Mockup />
            </Sticky>
          </Flex>
        </Flex>
      </Wrapper>
    </>
  );
}
