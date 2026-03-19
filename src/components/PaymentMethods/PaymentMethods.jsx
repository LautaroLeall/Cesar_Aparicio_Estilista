import { FaMoneyBillWave, FaCreditCard, FaMobileScreen } from 'react-icons/fa6'
import './PaymentMethods.css'

const METHODS = [
  {
    icon: <FaMoneyBillWave />,
    label: 'Efectivo',
    delay: 0
  },
  {
    icon: <FaCreditCard />,
    label: 'Débito / Crédito',
    delay: 100
  },
  {
    icon: <FaMobileScreen />,
    label: 'Transferencia',
    delay: 200
  },
]

export default function PaymentMethods() {
  return (
    <section className="payment-methods relative">
      <div className="payment-container relative text-center">
        <h3 className="payment-title mb-8" data-aos="fade-up">
          Métodos de Pago
        </h3>
        <div className="payment-grid flex flex-col items-center gap-8">
          {METHODS.map((method, i) => (
            <div key={i} className="payment-item flex flex-col items-center gap-3" data-aos="zoom-in" data-aos-delay={method.delay}>
              <div className="payment-icon flex items-center justify-center">{method.icon}</div>
              <span className="payment-label text-center">{method.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
