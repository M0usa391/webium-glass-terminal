
import React, { useEffect } from "react";
import {
  Code2,
  Server,
  Database,
  MonitorSmartphone,
  BrainCircuit,
  Globe,
  Blocks,
  Code
} from "lucide-react";
import Navbar from "../components/Navbar";
import Terminal from "../components/Terminal";
import ServiceCard from "../components/ServiceCard";

const Index = () => {
  const services = [
    {
      title: "تطوير الواجهات الأمامية",
      description: "تصميم وتطوير واجهات مستخدم سريعة وسهلة الاستخدام باستخدام أحدث التقنيات مثل React وVue وAngular.",
      icon: <Code2 className="w-10 h-10" />,
      delay: 100
    },
    {
      title: "تطوير الواجهات الخلفية",
      description: "بناء خدمات ويب قوية وقابلة للتوسع باستخدام Node.js وExpress وNestJS وقواعد البيانات المختلفة.",
      icon: <Server className="w-10 h-10" />,
      delay: 200
    },
    {
      title: "تطبيقات الويب التفاعلية",
      description: "إنشاء تطبيقات ويب تفاعلية وديناميكية تتجاوب مع جميع أحجام الشاشات والأجهزة.",
      icon: <MonitorSmartphone className="w-10 h-10" />,
      delay: 300
    },
    {
      title: "حلول الذكاء الاصطناعي",
      description: "دمج خدمات الذكاء الاصطناعي وتعلم الآلة لتعزيز قدرات تطبيقات الويب والخدمات.",
      icon: <BrainCircuit className="w-10 h-10" />,
      delay: 400
    },
    {
      title: "قواعد البيانات والتخزين",
      description: "تصميم وتنفيذ حلول قواعد البيانات المناسبة لاحتياجات عملك، من SQL إلى NoSQL.",
      icon: <Database className="w-10 h-10" />,
      delay: 500
    },
    {
      title: "تحسين محركات البحث",
      description: "تحسين موقعك للحصول على مرتبة أفضل في نتائج البحث وزيادة الوصول إلى جمهورك.",
      icon: <Globe className="w-10 h-10" />,
      delay: 600
    },
  ];

  // Apply animation classes to elements as they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
            entry.target.classList.add("opacity-100");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      el.classList.add("opacity-0");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950 text-right">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 space-y-6 reveal">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              نحول <span className="text-gradient">أفكارك</span> إلى
              <br /> تطبيقات ويب <span className="text-gradient">متطورة</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              فريق متخصص في تطوير الويب والذكاء الاصطناعي يساعدك على تحقيق رؤيتك التقنية
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                استكشف خدماتنا
              </a>
              <a
                href="#terminal"
                className="px-6 py-3 glass-panel font-medium rounded-lg transition-all hover:shadow-xl flex items-center justify-center"
              >
                <Code className="w-5 h-5 ml-2" />
                جرب Terminal
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 reveal">
            <div className="glass-panel p-5 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 z-0"></div>
              <div className="relative z-10">
                <pre className="font-mono text-sm text-left overflow-x-auto p-4 bg-gray-900 bg-opacity-80 rounded-lg">
                  <code className="language-javascript text-gray-100">
                    {`// تيكنولوجي تيم
const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    // Fetch innovative projects
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const data = await api.getProjects();
        setProjects(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchProjects();
  }, []);
  
  return (
    <div className="app-container">
      <Header />
      <main>
        {isLoading ? <Loader /> : <ProjectsList projects={projects} />}
      </main>
      <Footer />
    </div>
  );
};

export default App;`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold">خدماتنا</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            نقدم مجموعة متكاملة من الخدمات لتلبية احتياجات مشروعك التقني
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="reveal">
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={service.delay}
              />
            </div>
          ))}
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="glass-panel p-8 rounded-2xl reveal">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">من نحن</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="text-lg">
              نحن فريق من المطورين والمصممين المتحمسين الذين يسعون إلى تقديم حلول تقنية مبتكرة. 
              نؤمن بأن التكنولوجيا يمكن أن تحل المشكلات المعقدة وتحسن حياة الناس.
            </p>
            <p className="text-lg">
              منذ تأسيسنا، عملنا مع العديد من الشركات والمؤسسات لتحويل أفكارهم إلى واقع رقمي. 
              نحن نفخر بالجودة العالية لعملنا والعلاقات طويلة الأمد التي بنيناها مع عملائنا.
            </p>
            <p className="text-lg">
              فلسفتنا بسيطة: الاستماع بعناية لاحتياجات العميل، وتقديم حلول مخصصة، والالتزام بأعلى معايير الجودة.
            </p>
          </div>
          
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <div className="glass-panel p-6 rounded-xl w-full sm:w-auto text-center space-y-2 hover:shadow-xl transition-all">
              <div className="text-blue-600 dark:text-blue-400 font-bold text-3xl">+50</div>
              <div className="text-gray-600 dark:text-gray-300">مشروع منجز</div>
            </div>
            <div className="glass-panel p-6 rounded-xl w-full sm:w-auto text-center space-y-2 hover:shadow-xl transition-all">
              <div className="text-blue-600 dark:text-blue-400 font-bold text-3xl">5+</div>
              <div className="text-gray-600 dark:text-gray-300">سنوات خبرة</div>
            </div>
            <div className="glass-panel p-6 rounded-xl w-full sm:w-auto text-center space-y-2 hover:shadow-xl transition-all">
              <div className="text-blue-600 dark:text-blue-400 font-bold text-3xl">+20</div>
              <div className="text-gray-600 dark:text-gray-300">عميل سعيد</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Terminal Section */}
      <section id="terminal" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-10 reveal">
          <h2 className="text-3xl md:text-4xl font-bold">جرب Terminal</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            استخدم طرفية ماك أو إس المحاكاة للتعرف أكثر على خدماتنا وفريقنا
          </p>
        </div>
        
        <div className="reveal">
          <Terminal />
        </div>
        
        <div className="mt-8 text-center text-gray-600 dark:text-gray-400 text-sm reveal">
          <p>اكتب "help" لمعرفة الأوامر المتاحة</p>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="glass-panel p-8 sm:p-12 rounded-2xl text-center space-y-6 reveal">
          <h2 className="text-3xl md:text-4xl font-bold">جاهز لتحويل فكرتك إلى واقع؟</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            نحن هنا لمساعدتك في تحقيق رؤيتك التقنية. تواصل معنا اليوم لبدء رحلتك نحو النجاح الرقمي.
          </p>
          <div className="pt-4">
            <a
              href="mailto:contact@techteam.com"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl inline-block"
            >
              تواصل معنا
            </a>
          </div>
        </div>
      </section>
      
      {/* Simple Footer */}
      <div className="border-t border-gray-200 dark:border-gray-800 py-8 text-center text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} تيكنولوجي تيم. جميع الحقوق محفوظة.</p>
      </div>
    </div>
  );
};

export default Index;
