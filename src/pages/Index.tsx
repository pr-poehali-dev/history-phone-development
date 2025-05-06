
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="bg-white">
      {/* Навигация */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700">ТелефоноЛогия</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#hero" className="font-medium text-gray-800 hover:text-blue-700">Главная</a>
            <a href="#history" className="font-medium text-gray-800 hover:text-blue-700">История</a>
            <a href="#evolution" className="font-medium text-gray-800 hover:text-blue-700">Эволюция</a>
            <a href="#gallery" className="font-medium text-gray-800 hover:text-blue-700">Галерея</a>
            <a href="#facts" className="font-medium text-gray-800 hover:text-blue-700">Факты</a>
          </div>
          <Button variant="outline" className="md:hidden" aria-label="Меню">
            <Icon name="Menu" />
          </Button>
        </div>
      </nav>

      {/* Главный экран */}
      <section id="hero" className="pt-24 md:pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">История <span className="text-blue-700">телефона</span></h1>
              <p className="text-xl text-gray-700 mb-8">От изобретения Александра Белла до современных смартфонов: путешествие сквозь века коммуникаций</p>
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
                Начать путешествие <Icon name="ArrowRight" className="ml-2" />
              </Button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1557180295-76eee20ae8aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Коллаж из телефонов разных эпох" 
                className="rounded-xl shadow-2xl max-w-full h-auto transition-transform hover:scale-105 duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Введение */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-10">Как всё началось</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-16 leading-relaxed">
            История телефона началась в 1876 году, когда Александр Грэхем Белл запатентовал первое устройство, способное передавать человеческую речь. С тех пор телефон прошёл невероятный путь, трансформировавшись из простого средства связи в многофункциональное устройство, которое мы носим в карманах.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <img 
              src="https://images.unsplash.com/photo-1563804447974-5f039817369b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Александр Грэхем Белл" 
              className="w-full md:w-1/3 rounded-xl shadow-lg"
            />
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">Александр Грэхем Белл</h3>
              <p className="text-lg text-gray-700 mb-6">
                В 1876 году Белл произнес по телефону свои знаменитые первые слова: "Мистер Уотсон, пожалуйста, подойдите сюда, вы мне нужны." Это событие ознаменовало начало новой эры в человеческом общении.
              </p>
              <p className="text-lg text-gray-700">
                Изначально телефон был роскошью, доступной лишь избранным. Для соединения требовались операторы, вручную подключавшие абонентов через телефонные коммутаторы.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* История телефона */}
      <section id="history" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Ключевые моменты в истории</h2>
          
          <div className="space-y-20">
            <HistoryItem 
              year="1876" 
              title="Первый телефон" 
              description="Александр Грэхем Белл получает патент на изобретение телефона. 10 марта он совершает первый успешный телефонный звонок."
              imageUrl="https://images.unsplash.com/photo-1577280453331-103fe8353552?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              isReversed={false}
            />
            
            <HistoryItem 
              year="1915" 
              title="Трансконтинентальная телефонная связь" 
              description="Установлено первое трансконтинентальное телефонное соединение между Нью-Йорком и Сан-Франциско, охватившее 5440 километров."
              imageUrl="https://images.unsplash.com/photo-1596558450255-7c0b7be9d56a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              isReversed={true}
            />
            
            <HistoryItem 
              year="1956" 
              title="Первый трансатлантический телефонный кабель" 
              description="Проложен TAT-1 — первый трансатлантический телефонный кабель между Шотландией и Ньюфаундлендом, позволивший совершать до 36 одновременных телефонных разговоров."
              imageUrl="https://images.unsplash.com/photo-1601049676869-704cc7a85561?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              isReversed={false}
            />
            
            <HistoryItem 
              year="1973" 
              title="Первый мобильный телефон" 
              description="Мартин Купер из компании Motorola совершает первый звонок с портативного сотового телефона. Устройство весило 1,1 кг и имело заряд батареи на 20 минут разговора."
              imageUrl="https://images.unsplash.com/photo-1552933529-e359b2477252?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              isReversed={true}
            />
            
            <HistoryItem 
              year="1992" 
              title="Появление SMS" 
              description="Инженер Нил Папворт отправляет первое текстовое сообщение SMS с компьютера на мобильный телефон. Сообщение содержало лишь слова 'Merry Christmas'."
              imageUrl="https://images.unsplash.com/photo-1583568533957-9b36faddfe5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              isReversed={false}
            />
            
            <HistoryItem 
              year="2007" 
              title="Первый iPhone" 
              description="Стив Джобс представляет первый iPhone, объединивший функции телефона, интернет-коммуникатора и медиаплеера. Это событие революционизировало индустрию мобильных устройств."
              imageUrl="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              isReversed={true}
            />
            
            <HistoryItem 
              year="2019-2023" 
              title="Эра складных экранов и 5G" 
              description="Появление смартфонов со складными экранами и распространение сетей 5G, обеспечивающих небывалую скорость и возможности для мобильной связи."
              imageUrl="https://images.unsplash.com/photo-1592890288564-76628a30a657?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              isReversed={false}
            />
          </div>
        </div>
      </section>

      {/* Эволюция телефона */}
      <section id="evolution" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">Эволюция телефона</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-16 text-center">
            От громоздких аппаратов до миниатюрных смартфонов – проследите удивительную трансформацию телефона через десятилетия
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <EvolutionCard 
              period="1870-1900"
              title="Первые телефоны"
              imageUrl="https://images.unsplash.com/photo-1516035955531-003dc3ef09a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              description="Деревянные корпуса, отдельные трубки и рычаги. Требовали ручного соединения через оператора."
            />
            
            <EvolutionCard 
              period="1900-1950"
              title="Дисковые телефоны"
              imageUrl="https://images.unsplash.com/photo-1584378687113-533244aaa323?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              description="Появление дискового набора номера. Телефоны становятся доступнее для среднего класса."
            />
            
            <EvolutionCard 
              period="1950-1990"
              title="Кнопочные аппараты"
              imageUrl="https://images.unsplash.com/photo-1596521361659-5b5d3ef64754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              description="Замена дисков на кнопки. Начало массового распространения телефонов в домах."
            />
            
            <EvolutionCard 
              period="1990-наши дни"
              title="Сотовые телефоны"
              imageUrl="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              description="От первых 'кирпичей' до современных смартфонов с сенсорными экранами и многоядерными процессорами."
            />
          </div>
        </div>
      </section>

      {/* Галерея */}
      <section id="gallery" className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">Галерея телефонов</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-16 text-center">
            Взгляните на удивительное разнообразие телефонных аппаратов, которые использовались на протяжении истории
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1568706407142-cafe0c91e5a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1559860779-9d23b4e78568?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1596558450255-7c0b7be9d56a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1505739998589-00fc191ce01d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1583573636246-18934f8d8a44?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            ].map((imageUrl, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105 duration-300">
                <img 
                  src={imageUrl} 
                  alt={`Исторический телефон ${index + 1}`} 
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Интересные факты */}
      <section id="facts" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">Интересные факты</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FactCard 
              number="35 лет" 
              title="До массового распространения"
              description="Потребовалось 35 лет, чтобы телефон достиг 25% населения США. Для сравнения, смартфонам потребовалось всего 4 года."
              icon="Clock"
            />
            
            <FactCard 
              number="50 млрд" 
              title="Сообщений в день"
              description="Ежедневно в мире отправляется более 50 миллиардов сообщений через различные мессенджеры."
              icon="MessageSquare"
            />
            
            <FactCard 
              number="6 млрд" 
              title="Пользователей"
              description="В мире насчитывается более 6 миллиардов пользователей мобильных телефонов, что составляет около 78% населения Земли."
              icon="Users"
            />
          </div>
        </div>
      </section>

      {/* Подписка */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Узнайте больше об истории телефона</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Подпишитесь на нашу рассылку, чтобы получать интересные факты и новости из мира телефонной связи
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Ваш email" 
              className="px-4 py-3 rounded-lg text-gray-900 flex-grow"
            />
            <Button className="bg-white text-blue-700 hover:bg-gray-100">
              Подписаться
            </Button>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">ТелефоноЛогия</h2>
              <p className="mt-2 text-gray-400">История телефонной связи в деталях</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 ТелефоноЛогия. Все права защищены.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Компонент элемента истории
const HistoryItem = ({ year, title, description, imageUrl, isReversed }: { 
  year: string, 
  title: string, 
  description: string, 
  imageUrl: string,
  isReversed: boolean 
}) => {
  return (
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}>
      <div className="md:w-1/2 relative">
        <span className="absolute -top-2 -left-2 bg-blue-700 text-white text-lg font-bold py-1 px-3 rounded-lg">{year}</span>
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full rounded-xl shadow-xl transition-transform hover:scale-105 duration-300" 
        />
      </div>
      <div className="md:w-1/2">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-700">{title}</h3>
        <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

// Компонент карточки эволюции
const EvolutionCard = ({ period, title, imageUrl, description }: { 
  period: string, 
  title: string, 
  imageUrl: string, 
  description: string 
}) => {
  return (
    <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-110 duration-300" 
        />
      </div>
      <div className="p-6">
        <span className="text-sm font-medium text-blue-700">{period}</span>
        <h3 className="text-xl font-bold mt-1 mb-3">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

// Компонент карточки факта
const FactCard = ({ number, title, description, icon }: { 
  number: string, 
  title: string, 
  description: string,
  icon: string 
}) => {
  return (
    <Card className="text-center hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name={icon} size={32} className="text-blue-700" />
        </div>
        <CardTitle className="text-4xl font-bold text-blue-700">{number}</CardTitle>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default Index;
