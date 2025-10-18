import { motion } from "framer-motion";

// 🌟 Качественные изображения для страницы "Про нас"
const team = "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&q=80";
const heart = "https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=1200&q=80";
const lab = "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&q=80";

export default function About() {
  return (
    <main className="pt-24 pb-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Главная секция */}
      <section className="container max-w-7xl mx-auto px-6">
        {/* Заголовок и описание */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6"
          >
            Про наш благодійний фонд
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl leading-relaxed"
          >
            Наш фонд об'єднує людей, які прагнуть перемогти рак крові. Ми допомагаємо пацієнтам,
            підтримуємо медичні заклади, організовуємо донорські ініціативи та фінансуємо закупівлю
            сучасного обладнання. <span className="text-red-600 font-semibold">Разом ми доводимо, що добро лікує.</span>
          </motion.p>
        </div>

        {/* Три основных блока */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {[
            { 
              img: team, 
              title: "Наша команда", 
              desc: "Команда лікарів, волонтерів та координаторів, які щодня працюють, щоб рятувати життя.",
              icon: "👥"
            },
            { 
              img: lab, 
              title: "Ми допомагаємо клінікам", 
              desc: "Фонд підтримує лікарні, закуповуючи реактиви, препарати та необхідне обладнання.",
              icon: "🏥"
            },
            { 
              img: heart, 
              title: "Довіра і прозорість", 
              desc: "Ми відкрито звітуємо про кожну пожертву та результат нашої діяльності.",
              icon: "✅"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Иконка */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg">
                  {item.icon}
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <h3 className="font-bold text-xl md:text-2xl mb-3 text-gray-800 group-hover:text-red-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Миссия и ценности */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Наша місія
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Ми прагнемо створити світ, де кожен пацієнт з раком крові має доступ до якісного лікування,
                підтримки та надії на одужання.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Кожна пожертва, кожен волонтер і кожен донор — це частина великої мети: 
                <span className="text-red-600 font-semibold"> подарувати життя тим, хто бореться з хворобою</span>.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: "💪", title: "Сила єдності", desc: "Разом ми можемо більше" },
                { icon: "❤️", title: "Співчуття", desc: "Ми розуміємо біль і надаємо підтримку" },
                { icon: "🌟", title: "Надія", desc: "Віримо в перемогу над хворобою" }
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 + idx * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="text-3xl flex-shrink-0">{value.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA секция */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 text-center p-10 rounded-2xl bg-gradient-to-r from-red-50 to-pink-50 border border-red-100"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Приєднуйтесь до нас
          </h3>
          <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
            Кожен внесок має значення. Станьте частиною руху, який рятує життя.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/donate"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Підтримати фонд
            </a>
            <a
              href="/contact"
              className="inline-block bg-white hover:bg-gray-50 text-red-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl border-2 border-red-600 hover:scale-105 transition-all duration-300"
            >
              Зв'язатися з нами
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

