// src/app/payment/layout.tsx
"use client";
export default function PaymentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* Você pode adicionar uma navbar personalizada aqui */}
      {children}  
    </div>
  );
}
