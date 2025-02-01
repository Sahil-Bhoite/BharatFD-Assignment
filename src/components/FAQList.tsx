import { useState } from "react";
import { Language, FAQ } from "@/types/faq";
import FAQItem from "./FAQItem";
import SearchBar from "./SearchBar";
import LanguageSelector from "./LanguageSelector";

const mockFAQs: FAQ[] = [
  {
    id: "1",
    question: {
      en: "How do I reset my password?",
      hi: "मैं अपना पासवर्ड कैसे रीसेट करूं?",
      bn: "আমি কিভাবে আমার পাসওয়ার্ড রিসেট করব?",
      es: "¿Cómo restablezco mi contraseña?",
      fr: "Comment réinitialiser mon mot de passe ?",
      ar: "كيف يمكنني إعادة تعيين كلمة المرور الخاصة بي؟",
      zh: "如何重置密码？",
    },
    answer: {
      en: "To reset your password, click on the 'Forgot Password' link on the login page and follow the instructions sent to your email.",
      hi: "पासवर्ड रीसेट करने के लिए, लॉगिन पेज पर 'पासवर्ड भूल गए' लिंक पर क्लिक करें और आपके ईमेल पर भेजे गए निर्देशों का पालन करें।",
      bn: "পাসওয়ার্ড রিসেট করতে, লগইন পেজে 'পাসওয়ার্ড ভুলে গেছেন' লিঙ্কে ক্লিক করুন এবং আপনার ইমেলে পাঠানো নির্দেশাবলী অনুসরণ করুন।",
      es: "Para restablecer su contraseña, haga clic en el enlace 'Olvidé mi contraseña' en la página de inicio de sesión y siga las instrucciones enviadas a su correo electrónico.",
      fr: "Pour réinitialiser votre mot de passe, cliquez sur le lien 'Mot de passe oublié' sur la page de connexion et suivez les instructions envoyées à votre e-mail.",
      ar: "لإعادة تعيين كلمة المرور الخاصة بك، انقر على رابط 'نسيت كلمة المرور' في صفحة تسجيل الدخول واتبع التعليمات المرسلة إلى بريدك الإلكتروني.",
      zh: "要重置密码，请点击登录页面上的'忘记密码'链接，并按照发送到您邮箱的说明进行操作。",
    },
  },
  {
    id: "2",
    question: {
      en: "What payment methods do you accept?",
      hi: "आप कौन से भुगतान विधियों को स्वीकार करते हैं?",
      bn: "আপনি কোন পেমেন্ট পদ্ধতি গ্রহণ করেন?",
      es: "¿Qué métodos de pago aceptan?",
      fr: "Quels modes de paiement acceptez-vous ?",
      ar: "ما هي طرق الدفع التي تقبلونها؟",
      zh: "您接受哪些支付方式？",
    },
    answer: {
      en: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers.",
      hi: "हम सभी प्रमुख क्रेडिट कार्ड (Visa, MasterCard, American Express), PayPal और बैंक ट्रांसफर स्वीकार करते हैं।",
      bn: "আমরা সমস্ত প্রধান ক্রেডিট কার্ড (Visa, MasterCard, American Express), PayPal এবং ব্যাংক ট্রান্সফার গ্রহণ করি।",
      es: "Aceptamos todas las principales tarjetas de crédito (Visa, MasterCard, American Express), PayPal y transferencias bancarias.",
      fr: "Nous acceptons toutes les principales cartes de crédit (Visa, MasterCard, American Express), PayPal et les virements bancaires.",
      ar: "نقبل جميع بطاقات الائتمان الرئيسية (فيزا، ماستركارد، أمريكان إكسبريس)، باي بال، والتحويلات المصرفية.",
      zh: "我们接受所有主要信用卡（Visa、MasterCard、American Express）、PayPal和银行转账。",
    },
  },
  {
    id: "3",
    question: {
      en: "How can I track my order?",
      hi: "मैं अपने ऑर्डर को कैसे ट्रैक कर सकता हूं?",
      bn: "আমি কিভাবে আমার অর্ডার ট্র্যাক করতে পারি?",
      es: "¿Cómo puedo rastrear mi pedido?",
      fr: "Comment puis-je suivre ma commande ?",
      ar: "كيف يمكنني تتبع طلبي؟",
      zh: "我如何跟踪我的订单？",
    },
    answer: {
      en: "You can track your order by logging into your account and visiting the 'Order History' section, or by using the tracking number sent to your email.",
      hi: "आप अपने अकाउंट में लॉग इन करके और 'ऑर्डर हिस्ट्री' सेक्शन पर जाकर, या अपने ईमेल पर भेजे गए ट्रैकिंग नंबर का उपयोग करके अपने ऑर्डर को ट्रैक कर सकते हैं।",
      bn: "আপনি আপনার অ্যাকাউন্টে লগ ইন করে 'অর্ডার হিস্ট্রি' সেকশনে গিয়ে বা আপনার ইমেলে পাঠানো ট্র্যাকিং নম্বর ব্যবহার করে আপনার অর্ডার ট্র্যাক করতে পারেন।",
      es: "Puede rastrear su pedido iniciando sesión en su cuenta y visitando la sección 'Historial de pedidos', o utilizando el número de seguimiento enviado a su correo electrónico.",
      fr: "Vous pouvez suivre votre commande en vous connectant à votre compte et en visitant la section 'Historique des commandes', ou en utilisant le numéro de suivi envoyé à votre e-mail.",
      ar: "يمكنك تتبع طلبك عن طريق تسجيل الدخول إلى حسابك وزيارة قسم 'سجل الطلبات'، أو باستخدام رقم التتبع المرسل إلى بريدك الإلكتروني.",
      zh: "您可以登录您的账户并访问'订单历史'部分，或使用发送到您邮箱的跟踪号码来跟踪您的订单。",
    },
  },
  {
    id: "4",
    question: {
      en: "What is your return policy?",
      hi: "आपकी वापसी नीति क्या है?",
      bn: "আপনার রিটার্ন পলিসি কী?",
      es: "¿Cuál es su política de devoluciones?",
      fr: "Quelle est votre politique de retour ?",
      ar: "ما هي سياسة الإرجاع الخاصة بكم؟",
      zh: "您的退货政策是什么？",
    },
    answer: {
      en: "We offer a 30-day return policy for most items. Products must be unused and in their original packaging. Contact our customer service team to initiate a return.",
      hi: "हम अधिकांश वस्तुओं के लिए 30 दिनों की वापसी नीति प्रदान करते हैं। उत्पाद अप्रयुक्त और उनकी मूल पैकेजिंग में होने चाहिए। वापसी शुरू करने के लिए हमारी ग्राहक सेवा टीम से संपर्क करें।",
      bn: "আমরা বেশিরভাগ আইটেমের জন্য 30-দিনের রিটার্ন পলিসি অফার করি। পণ্যগুলি অব্যবহৃত এবং তাদের মূল প্যাকেজিংয়ে থাকতে হবে। রিটার্ন শুরু করতে আমাদের কাস্টমার সার্ভিস টিমের সাথে যোগাযোগ করুন।",
      es: "Ofrecemos una política de devolución de 30 días para la mayoría de los artículos. Los productos deben estar sin usar y en su embalaje original. Contacte con nuestro equipo de atención al cliente para iniciar una devolución.",
      fr: "Nous offrons une politique de retour de 30 jours pour la plupart des articles. Les produits doivent être inutilisés et dans leur emballage d'origine. Contactez notre service client pour initier un retour.",
      ar: "نقدم سياسة إرجاع لمدة 30 يومًا لمعظم المنتجات. يجب أن تكون المنتجات غير مستخدمة وفي عبواتها الأصلية. اتصل بفريق خدمة العملاء لدينا لبدء عملية الإرجاع.",
      zh: "我们为大多数商品提供30天退货政策。商品必须未使用且保持原包装。请联系我们的客户服务团队发起退货。",
    },
  },
  {
    id: "5",
    question: {
      en: "Do you offer international shipping?",
      hi: "क्या आप अंतर्राष्ट्रीय शिपिंग प्रदान करते हैं?",
      bn: "আপনি কি আন্তর্জাতিক শিপিং অফার করেন?",
      es: "¿Ofrecen envíos internacionales?",
      fr: "Proposez-vous la livraison internationale ?",
      ar: "هل تقدمون الشحن الدولي؟",
      zh: "您是否提供国际运输？",
    },
    answer: {
      en: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. You can check shipping rates during checkout.",
      hi: "हां, हम विश्व के अधिकांश देशों में शिपिंग करते हैं। शिपिंग लागत और डिलीवरी समय स्थान के अनुसार भिन्न होते हैं। आप चेकआउट के दौरान शिपिंग दरों की जांच कर सकते हैं।",
      bn: "হ্যাঁ, আমরা বিশ্বব্যাপী বেশিরভাগ দেশে শিপিং করি। শিপিং খরচ এবং ডেলিভারি সময় অবস্থান অনুযায়ী পরিবর্তিত হয়। আপনি চেকআউটের সময় শিপিং রেট চেক করতে পারেন।",
      es: "Sí, enviamos a la mayoría de los países del mundo. Los costos de envío y los tiempos de entrega varían según la ubicación. Puede verificar las tarifas de envío durante el proceso de pago.",
      fr: "Oui, nous livrons dans la plupart des pays du monde. Les frais d'expédition et les délais de livraison varient selon la destination. Vous pouvez vérifier les tarifs d'expédition lors du paiement.",
      ar: "نعم، نقوم بالشحن إلى معظم دول العالم. تختلف تكاليف الشحن ومواعيد التسليم حسب الموقع. يمكنك التحقق من أسعار الشحن أثناء الدفع.",
      zh: "是的，我们向全球大多数国家提供运输服务。运输费用和交付时间因地点而异。您可以在结账时查看运费。",
    },
  }
];

const FAQList = () => {
  const [language, setLanguage] = useState<Language>("en");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQs = mockFAQs.filter((faq) =>
    faq.question[language].toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F1F0FB] dark:bg-[#221F26]">
      <div className="container mx-auto py-12 px-4 max-w-4xl">
        <div className="mb-12 space-y-6">
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#8B5CF6] bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <LanguageSelector
              currentLanguage={language}
              onLanguageChange={setLanguage}
            />
          </div>
          <SearchBar 
            value={searchQuery} 
            onChange={setSearchQuery}
            className="backdrop-blur-xl bg-white/50 dark:bg-[#403E43]/50 border-0 shadow-lg"
          />
        </div>
        
        <div className="space-y-6">
          {filteredFAQs.map((faq) => (
            <FAQItem key={faq.id} faq={faq} language={language} />
          ))}
          {filteredFAQs.length === 0 && (
            <div className="text-center py-12 text-[#8E9196] dark:text-gray-400">
              No FAQs found matching your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQList;
