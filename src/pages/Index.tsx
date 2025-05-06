
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100">
      {/* Хедер */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700">История Телефона</h1>
          <nav className="space-x-4">
            <Button variant="ghost">Главная</Button>
            <Button variant="ghost">Хронология</Button>
            <Button variant="ghost">Галерея</Button>
          </nav>
        </div>
      </header>

      {/* Главный баннер */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">От Белла до iPhone</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Удивительная история развития телефонной связи: от первых проводных аппаратов до современных смартфонов
        </p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          Исследовать историю
        </Button>
      </section>

      {/* Временная шкала */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Ключевые моменты истории телефона</h2>
        
        <div className="space-y-12">
          <TimelineItem 
            year="1876" 
            title="Первый телефон Александра Белла" 
            description="10 марта 1876 года Александр Грэхем Белл совершил первый телефонный звонок своему помощнику Томасу Уотсону, произнеся знаменитую фразу: «Мистер Уотсон, пожалуйста, подойдите сюда, вы мне нужны»."
            isLeft={true}
          />
          
          <TimelineItem 
            year="1915" 
            title="Первый трансконтинентальный звонок" 
            description="Компания AT&T завершила первую телефонную линию, пересекающую Соединённые Штаты, позволив выполнить звонок между Нью-Йорком и Сан-Франциско."
            isLeft={false}
          />
          
          <TimelineItem 
            year="1947" 
            title="Изобретение транзистора" 
            description="В Bell Labs был изобретён транзистор, что стало революционным событием для развития электроники и будущих мобильных устройств."
            isLeft={true}
          />
          
          <TimelineItem 
            year="1973" 
            title="Первый мобильный телефон" 
            description="Мартин Купер из Motorola совершил первый звонок с портативного мобильного телефона. Устройство весило около 1,1 кг."
            isLeft={false}
          />
          
          <TimelineItem 
            year="1983" 
            title="Коммерческий запуск мобильных телефонов" 
            description="Motorola выпустила DynaTAC 8000X - первый коммерческий мобильный телефон, стоимостью около 4000 долларов."
            isLeft={true}
          />
          
          <TimelineItem 
            year="1993" 
            title="Появление SMS" 
            description="Технология коротких сообщений (SMS) становится популярной, изменив способ коммуникации между людьми."
            isLeft={false}
          />
          
          <TimelineItem 
            year="2007" 
            title="Запуск iPhone" 
            description="Стив Джобс представил первый iPhone, объединивший телефон, интернет-коммуникатор и музыкальный плеер в одном устройстве с сенсорным экраном."
            isLeft={true}
          />
          
          <TimelineItem 
            year="2019-2023" 
            title="Эра складных смартфонов и 5G" 
            description="Появление складных смартфонов и широкое распространение сетей 5G, открывающих новые возможности для мобильных технологий."
            isLeft={false}
          />
        </div>
      </section>

      {/* Секция фактов */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Интересные факты</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FactCard 
              title="35 лет" 
              description="Потребовалось 35 лет, чтобы телефон достиг 25% населения США. Для сравнения, смартфонам потребовалось всего 4 года для такого же охвата."
            />
            <FactCard 
              title="50 миллиардов" 
              description="Ежедневно в мире отправляется более 50 миллиардов сообщений через различные мессенджеры."
            />
            <FactCard 
              title="6 миллиардов" 
              description="В мире насчитывается более 6 миллиардов пользователей мобильных телефонов, что составляет около 78% населения земли."
            />
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 История Телефона. Все права защищены.</p>
          <p className="mt-2 text-gray-400">Создано с любовью к истории технологий</p>
        </div>
      </footer>
    </div>
  );
};

// Компонент элемента временной шкалы
const TimelineItem = ({ year, title, description, isLeft }: { year: string, title: string, description: string, isLeft: boolean }) => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className={`hidden md:block ${isLeft ? 'order-1' : 'order-2'} w-1/2 ${isLeft ? 'pr-8 text-right' : 'pl-8'}`}>
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      
      <div className="mx-auto md:mx-0 order-1 md:order-2 relative">
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10 border-4 border-white">
          {year.slice(-2)}
        </div>
        <div className="hidden md:block absolute top-0 -z-10 left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
      </div>
      
      <div className={`md:hidden mt-4 mb-8 order-3 w-full ${isLeft ? 'text-right' : ''}`}>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-2">{title} ({year})</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      
      <div className={`hidden md:block ${isLeft ? 'order-3' : 'order-1'} w-1/2 ${isLeft ? 'pl-8' : 'pr-8 text-right'}`}></div>
    </div>
  );
};

// Компонент карточки факта
const FactCard = ({ title, description }: { title: string, description: string }) => {
  return (
    <Card className="hover:shadow-lg transition duration-300">
      <CardHeader>
        <CardTitle className="text-xl text-blue-600">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default Index;
