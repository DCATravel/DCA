import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, TrendingUp, ArrowLeftRight, Plus, Minus } from 'lucide-react';


interface ExchangeRateModalProps {
  buttonClassName?: string;
}

export default function ExchangeRateModal({ buttonClassName }: ExchangeRateModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState<string>('100');
  const [isUsdToMxn, setIsUsdToMxn] = useState<boolean>(true);

  // Valores de la agencia DCA
  const agencyRates = {
    Precio: 17.95,
    lastUpdate: 'Hoy, 09:00 AM',
  };

  const handleConvert = () => {
    const numAmount = parseFloat(amount) || 0;
    return isUsdToMxn 
      ? (numAmount * agencyRates.Precio).toFixed(2) 
      : (numAmount / agencyRates.Precio).toFixed(2);
  };

  return (
    <>
      {/* Botón Trigger (Se queda en el Navbar) */}
      <button
        onClick={() => setIsOpen(true)}
        className={`
          flex items-center gap-2 px-3 py-1.5 
          bg-muted/50 border border-border/50 rounded-xl 
          text-sm font-medium text-foreground 
          transition-colors hover:bg-muted hover:border-primary/50
          ${buttonClassName || ''}
        `}
        aria-label="Ver tipo de cambio"
      >
        <TrendingUp className="w-4 h-4 text-primary" />
        <span className="hidden sm:inline">
          <span className="text-muted-foreground mr-1">USD</span>
          ${agencyRates.Precio.toFixed(2)}
        </span>
      </button>

      {/* Modal / Popup */}
      {isOpen && typeof document !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* Contenedor del Modal */}
          <div className="relative w-full max-w-md bg-background border border-border/50 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            {/* Header del Modal */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border/50 bg-muted/20">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Tipo de Cambio DCA</h3>
                <p className="text-xs text-muted-foreground">Actualizado: {agencyRates.lastUpdate}</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Contenido del Modal */}
            <div className="p-6 space-y-6">
              
              {/* Tasas de Compra/Venta */}
                <div className="bg-primary/5 p-4 rounded-xl border border-primary/20 text-center">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary block mb-1">Precio</span>
                  <span className="text-2xl font-bold text-foreground">${agencyRates.Precio.toFixed(2)}</span>
                </div>
              </div>

              {/* Calculadora */}
              <div className="bg-muted/30 p-5 rounded-xl border border-border/50">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-medium text-foreground">Calculadora rápida</h4>
                  <button 
                    onClick={() => setIsUsdToMxn(!isUsdToMxn)}
                    className="p-1.5 rounded-full bg-background border border-border shadow-sm hover:bg-muted text-foreground transition-colors"
                  >
                    <ArrowLeftRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="space-y-4">
                  {/* Input de Monto */}
                  <div className="relative flex items-center">
                    <span className="absolute left-3 flex items-center text-muted-foreground text-sm">$</span> 
                    {/* El input nativo con los estilos ocultos */}
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="
                        w-full bg-background border border-border rounded-lg 
                        pl-7 pr-24 py-2.5 text-sm text-foreground
                        focus:outline-none focus:ring-2 focus:ring-primary/50 
                        appearance-none 
                        [&::-webkit-inner-spin-button]:appearance-none 
                        [&::-webkit-outer-spin-button]:appearance-none
                        [-moz-appearance:textfield]
                      "
                      placeholder="0.00"
                    />
                    
                    {/* Controles personalizados */}
                    <div className="absolute right-2 flex items-center gap-1.5">
                      <span className="text-xs font-semibold text-muted-foreground mr-1">
                        {isUsdToMxn ? 'USD' : 'MXN'}
                      </span>
                      
                      {/* Botón de Menos */}
                      <button 
                        onClick={() => setAmount(String(Math.max(0, (parseFloat(amount) || 0) - 1)))}
                        className="p-1 rounded-md bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors border border-transparent hover:border-border/50"
                        title="Disminuir"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>

                      {/* Botón de Más */}
                      <button 
                        onClick={() => setAmount(String((parseFloat(amount) || 0) + 1))}
                        className="p-1 rounded-md bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors border border-transparent hover:border-border/50"
                        title="Aumentar"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Resultado */}
                  <div className="flex justify-between items-end pt-1">
                    <span className="text-xs text-muted-foreground">Equivale a:</span>
                    <div className="text-xl font-bold text-primary">
                      ${handleConvert()}{' '}
                      <span className="text-sm font-medium text-foreground/70">
                        {isUsdToMxn ? 'MXN' : 'USD'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
        </div>,
        document.body
      )}
    </>
  );
}