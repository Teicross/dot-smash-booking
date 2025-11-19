import React, { useState } from 'react';

const UserPaymentPage: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<'promptpay' | 'card'>('promptpay');

  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-4xl font-black leading-tight tracking-tight mb-2">Booking Summary</h1>
        <p className="text-subtle">Please review your booking details below before proceeding to payment.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Left Column: Details */}
        <div className="lg:col-span-3 space-y-8">
          
          {/* Booking Details Card */}
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6 md:p-8 shadow-sm">
            <div className="flex justify-between items-center border-b border-border-light dark:border-border-dark pb-6 mb-6">
              <h2 className="text-2xl font-bold">Booking Details</h2>
              <button className="text-primary font-medium text-sm hover:underline">Edit Booking</button>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary-dark dark:text-primary shrink-0">
                   <span className="material-symbols-outlined">calendar_month</span>
                </div>
                <div>
                  <p className="text-sm text-subtle font-medium mb-1">Date</p>
                  <p className="text-lg font-medium">Saturday, 28 September 2024</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary-dark dark:text-primary shrink-0">
                   <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <p className="text-sm text-subtle font-medium mb-1">Time</p>
                  <p className="text-lg font-medium">18:00 - 20:00 (2 Hours)</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary-dark dark:text-primary shrink-0">
                   <span className="material-symbols-outlined">sports_tennis</span>
                </div>
                <div>
                  <p className="text-sm text-subtle font-medium mb-1">Courts</p>
                  <p className="text-lg font-medium">Court 3, Court 4</p>
                </div>
              </div>
            </div>
          </div>

          {/* Price Summary Card */}
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold border-b border-border-light dark:border-border-dark pb-6 mb-6">Price Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-subtle">Court Fee (2 courts x 2 hours)</span>
                <span className="font-medium">฿720.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-subtle">Service Fee</span>
                <span className="font-medium">฿20.00</span>
              </div>
              <div className="border-t border-dashed border-border-light dark:border-border-dark my-2"></div>
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total Price</span>
                <span className="text-primary-dark dark:text-primary">฿740.00</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Payment */}
        <div className="lg:col-span-2">
           <div className="sticky top-28 bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6 shadow-sm">
             <h2 className="text-xl font-bold mb-6">Choose Payment Method</h2>
             
             <div className="space-y-4">
               {/* PromptPay Option */}
               <label 
                 className={`flex cursor-pointer items-center gap-4 rounded-xl border-2 p-4 transition-all ${paymentMethod === 'promptpay' ? 'border-primary bg-primary/5' : 'border-border-light dark:border-border-dark hover:border-primary/50'}`}
               >
                 <input 
                   type="radio" 
                   name="payment" 
                   value="promptpay" 
                   checked={paymentMethod === 'promptpay'} 
                   onChange={() => setPaymentMethod('promptpay')}
                   className="size-5 text-primary focus:ring-primary border-gray-300"
                 />
                 <div className="flex-1">
                   <p className="font-semibold">QR PromptPay</p>
                   <p className="text-xs text-subtle">Scan QR with any banking app</p>
                 </div>
                 <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/PromptPay-logo.png" alt="PromptPay" className="h-6 object-contain" />
               </label>

               {/* Card Option */}
               <label 
                 className={`flex cursor-pointer items-center gap-4 rounded-xl border-2 p-4 transition-all ${paymentMethod === 'card' ? 'border-primary bg-primary/5' : 'border-border-light dark:border-border-dark hover:border-primary/50'}`}
               >
                 <input 
                   type="radio" 
                   name="payment" 
                   value="card" 
                   checked={paymentMethod === 'card'} 
                   onChange={() => setPaymentMethod('card')}
                   className="size-5 text-primary focus:ring-primary border-gray-300"
                 />
                 <div className="flex-1">
                   <p className="font-semibold">Credit / Debit Card</p>
                   <p className="text-xs text-subtle">Visa, Mastercard</p>
                 </div>
                 <div className="flex gap-2">
                   <div className="h-5 w-8 bg-blue-900 rounded flex items-center justify-center text-white text-[8px] font-bold italic">VISA</div>
                   <div className="h-5 w-8 bg-gray-800 rounded flex items-center justify-center text-white text-[8px] font-bold">MC</div>
                 </div>
               </label>
             </div>

             {paymentMethod === 'promptpay' && (
               <div className="mt-8 text-center bg-background-light dark:bg-background-dark/50 p-6 rounded-xl border border-dashed border-border-light dark:border-border-dark">
                 <p className="font-semibold mb-4">Scan to Pay</p>
                 <div className="bg-white p-3 rounded-lg inline-block shadow-sm">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=00020101021129370016A000000677010111011300660000000005802TH53037645406740.0063041F5E" alt="QR Code" className="size-40" />
                 </div>
                 <p className="text-xs text-subtle mt-4">QR expires in 09:59 minutes</p>
               </div>
             )}

             <button className="w-full mt-8 bg-primary hover:bg-primary-dark hover:opacity-90 text-slate-900 font-bold py-3 px-6 rounded-xl transition-colors shadow-lg shadow-primary/20">
               Confirm & Pay ฿740.00
             </button>

           </div>
        </div>
      </div>
    </div>
  );
};

export default UserPaymentPage;