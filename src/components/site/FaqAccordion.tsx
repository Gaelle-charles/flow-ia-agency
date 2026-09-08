import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/content/faq";

type FaqAccordionProps = {
  limit?: number;
  indices?: readonly number[];
};

export function FaqAccordion({ limit, indices }: FaqAccordionProps) {
  const selectedItems = indices
    ? indices.flatMap((index) => (faqItems[index] ? [faqItems[index]] : []))
    : faqItems;
  const items = typeof limit === "number" ? selectedItems.slice(0, limit) : selectedItems;

  return (
    <Accordion type="single" collapsible className="border-t border-border">
      {items.map((item, index) => (
        <AccordionItem key={item.question} value={`question-${index + 1}`}>
          <AccordionTrigger className="py-4 text-left text-base font-bold leading-6 text-foreground hover:no-underline sm:text-lg">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="max-w-3xl pb-5 text-base leading-7 text-muted-foreground">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
