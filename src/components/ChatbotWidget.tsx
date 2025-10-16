import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const guidedQuestions = [
  '¿Qué tipo de proyecto tienes?',
  '¿Cuál es el tamaño estimado?',
  '¿En qué sector opera tu empresa?',
  '¿Cuándo planeas iniciar el proyecto?',
];

const projectTypes = [
  'Construcción Residencial',
  'Proyecto Industrial',
  'Telecomunicaciones',
  'Oil & Gas',
  'Otro',
];

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState<string[]>([]);
  const [customInput, setCustomInput] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSelectOption = (option: string) => {
    const newResponses = [...responses, option];
    setResponses(newResponses);
    
    if (currentStep < guidedQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setCurrentStep(0);
        setResponses([]);
      }, 3000);
    }
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customInput.trim()) {
      handleSelectOption(customInput);
      setCustomInput('');
    }
  };

  const resetChat = () => {
    setCurrentStep(0);
    setResponses([]);
    setShowSuccess(false);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#f4bb23] rounded-full shadow-lg flex items-center justify-center text-[#232323] hover:bg-[#d9a820] transition-colors"
        aria-label="Abrir chatbot"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        
        {!isOpen && (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"
          />
        )}
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#232323] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#f4bb23] rounded-full flex items-center justify-center">
                  <MessageCircle size={20} className="text-[#232323]" />
                </div>
                <div>
                  <h3 className="text-white">Asistente LADCOM</h3>
                  <p className="text-white/70 text-sm">Estamos aquí para ayudarte</p>
                </div>
              </div>
              <button
                onClick={resetChat}
                className="text-white/70 hover:text-white text-sm"
              >
                Reiniciar
              </button>
            </div>

            {/* Content */}
            <div className="p-4 max-h-[400px] overflow-y-auto bg-gray-50">
              {showSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-[#232323] mb-2">¡Gracias por tu información!</h3>
                  <p className="text-[#232323]/70">Un especialista te contactará pronto.</p>
                </motion.div>
              ) : (
                <>
                  {/* Welcome Message */}
                  <div className="mb-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <p className="text-[#232323]">
                        ¡Hola! Soy el asistente virtual de LADCOM. Te haré algunas preguntas para entender mejor tu proyecto.
                      </p>
                    </div>
                  </div>

                  {/* Previous Questions & Answers */}
                  {responses.map((response, index) => (
                    <div key={index} className="mb-4">
                      <div className="bg-white p-3 rounded-lg shadow-sm mb-2">
                        <p className="text-[#232323]/70 text-sm">{guidedQuestions[index]}</p>
                      </div>
                      <div className="bg-[#f4bb23] p-3 rounded-lg ml-8">
                        <p className="text-[#232323]">{response}</p>
                      </div>
                    </div>
                  ))}

                  {/* Current Question */}
                  {currentStep < guidedQuestions.length && (
                    <div className="mb-4">
                      <div className="bg-white p-3 rounded-lg shadow-sm mb-3">
                        <p className="text-[#232323]">{guidedQuestions[currentStep]}</p>
                      </div>

                      {/* Options for first question */}
                      {currentStep === 0 && (
                        <div className="space-y-2">
                          {projectTypes.map((type) => (
                            <button
                              key={type}
                              onClick={() => handleSelectOption(type)}
                              className="w-full text-left p-3 bg-white hover:bg-[#f4bb23]/10 border border-gray-200 hover:border-[#f4bb23] rounded-lg transition-all"
                            >
                              <span className="text-[#232323]">{type}</span>
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Custom input for other questions */}
                      {currentStep > 0 && (
                        <form onSubmit={handleCustomSubmit} className="flex gap-2">
                          <input
                            type="text"
                            value={customInput}
                            onChange={(e) => setCustomInput(e.target.value)}
                            placeholder="Escribe tu respuesta..."
                            className="flex-1 px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#f4bb23]"
                          />
                          <button
                            type="submit"
                            className="bg-[#f4bb23] text-[#232323] px-4 py-2 rounded-lg hover:bg-[#d9a820] transition-colors"
                          >
                            <Send size={20} />
                          </button>
                        </form>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Footer */}
            <div className="bg-white border-t border-gray-200 p-3 text-center">
              <p className="text-[#232323]/60 text-sm">Potenciado por IA</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
