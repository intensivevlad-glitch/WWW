import { useState, useEffect } from 'react'

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1606761568499-6e67f3f33c18',
    text: 'Кожна крапля доброти може наповнити океан надії.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600959907703-5421cbbd89b8',
    text: 'Дарувати — це не просто зробити пожертву, а зробити різницю.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1581093588401-22c8a5c2294e',
    text: 'Разом ми сильніші. Разом ми можемо більше.'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309',
    text: 'Надія — це найсильніша зброя проти хвороби.'
  }
]

export default function Carousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]

  return (
    <div className="w-full h-80 bg-gray-200 rounded-lg relative overflow-hidden">
      {/* Фонове зображення */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${slide.image})` }}
      />
      
      {/* Темний оверлей */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      {/* Текст */}
      <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 p-4 rounded">
        <p className="text-gray-800 font-medium">{slide.text}</p>
      </div>
      
      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full ${
              i === current ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
      
      {/* Debug */}
      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs">
        {current + 1}/{slides.length}
      </div>
    </div>
  )
}