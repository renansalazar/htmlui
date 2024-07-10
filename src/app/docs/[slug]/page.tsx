import { JSDOM } from 'jsdom';
import DOMPurify from 'dompurify';
import { Embed } from "@/app/components/Embed/Embed";
import { componentsDocs } from "@/app/constants/Contants";


const window = new JSDOM('').window;
const purify = DOMPurify(window);

export async function generateStaticParams() {
  return componentsDocs.map((component) => ({
    slug: component.slug,
  }))
}


export default function Page({ params }: { params: { slug: string } }) {
  const component = componentsDocs.find(component => component.slug === params.slug)
  return (
    <section>
        <h1>{component?.name}</h1>
        {component?.content.map(paragraph => {
          const cleanContent = purify.sanitize(paragraph.description)
          return <section key={'key-' + paragraph.embedId}>
            <section dangerouslySetInnerHTML={{ __html: cleanContent }} />
            <Embed embedId={paragraph.embedId} name={component?.name} />
          </section>
        })}
      </section>
    );
}