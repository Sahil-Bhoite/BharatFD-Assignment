import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ, Language, FAQTranslation } from "@/types/faq";

interface FAQItemProps {
  faq: FAQ;
  language: Language;
}

const FAQItem = ({ faq, language }: FAQItemProps) => {
  const translation: FAQTranslation = {
    question: faq.question[language] || faq.question.en,
    answer: faq.answer[language] || faq.answer.en,
  };

  return (
    <Accordion type="single" collapsible className="animate-fadeIn">
      <AccordionItem 
        value={faq.id}
        className="backdrop-blur-xl bg-white/50 dark:bg-[#403E43]/50 border border-[#C8C8C9]/10 rounded-xl shadow-lg overflow-hidden"
      >
        <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-[#F1F1F1] dark:hover:bg-[#333333] transition-colors">
          <span className="text-left font-medium text-[#403E43] dark:text-white">
            {translation.question}
          </span>
        </AccordionTrigger>
        <AccordionContent className="px-6 py-4 text-[#555555] dark:text-[#C8C8C9]">
          <div 
            dangerouslySetInnerHTML={{ __html: translation.answer }}
            className="prose prose-sm max-w-none dark:prose-invert"
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQItem;