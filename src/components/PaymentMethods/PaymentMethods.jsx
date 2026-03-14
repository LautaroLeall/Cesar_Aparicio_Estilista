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
    <section className="payment-methods">
      <div className="payment-container">
        <h3 className="payment-title" data-aos="fade-up">
          Métodos de Pago
        </h3>
        <div className="payment-grid">
          {METHODS.map((method, i) => (
            <div key={i} className="payment-item" data-aos="zoom-in" data-aos-delay={method.delay}>
              <div className="payment-icon">{method.icon}</div>
              <span className="payment-label">{method.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
