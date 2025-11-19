import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserBookingPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState('วันพฤหัสบดี, 11 ตุลาคม 2567');
  
  // Mock grid data
  const hours = ['16:00', '17:00', '18:00', '19:00', '20:00', '21:00'];
  const courts = [1, 2, 3, 4, 5, 6];
  
  // State for selected slots (simplified as strings "courtId-hourIndex")
  const [selectedSlots, setSelectedSlots] = useState<Set<string>>(new Set(['3-2', '3-3']));

  const toggleSlot = (courtId: number, hourIndex: number) => {
    const key = `${courtId}-${hourIndex}`;
    const newSlots = new Set(selectedSlots);
    if (newSlots.has(key)) {
      newSlots.delete(key);
    } else {
      newSlots.add(key);
    }
    setSelectedSlots(newSlots);
  };

  const isSelected = (courtId: number, hourIndex: number) => selectedSlots.has(`${courtId}-${hourIndex}`);
  
  // Mock unavailable logic
  const isUnavailable = (courtId: number, hourIndex: number) => {
    // Random logic for demo
    if (courtId === 2) return true; 
    if (courtId === 5) return true;
    if (courtId === 6 && hourIndex < 2) return true;
    return false;
  };

  return (
    <div className="container mx-auto max-w-7xl p-4 md:p-8 pb-24">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar Controls */}
        <aside className="w-full lg:w-1/3 lg:max-w-sm flex-shrink-0 space-y-6">
          <div className="sticky top-24 space-y-6">
            <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
              <h2 className="text-xl font-bold mb-6">เลือกวันที่และจำนวน</h2>
              <div className="space-y-4">
                <div className="relative group">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-subtle">
                    <span className="material-symbols-outlined">calendar_today</span>
                  </div>
                  <input 
                    type="text" 
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="block w-full rounded-lg border-border-light bg-background-light dark:bg-background-dark/50 dark:border-border-dark p-2.5 pl-10 text-sm font-semibold focus:border-primary focus:ring-primary cursor-pointer"
                  />
                </div>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-subtle">
                    <span className="material-symbols-outlined">sports_tennis</span>
                  </div>
                  <select className="block w-full rounded-lg border-border-light bg-background-light dark:bg-background-dark/50 dark:border-border-dark p-2.5 pl-10 text-sm font-semibold focus:border-primary focus:ring-primary appearance-none cursor-pointer">
                    <option>1 สนาม</option>
                    <option>2 สนาม</option>
                    <option>3 สนาม</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-subtle">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 p-6 rounded-xl border border-primary/30">
              <h3 className="text-xl font-bold mb-4">สรุปการจอง</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-subtle">วันที่</span>
                  <span className="font-semibold">พฤหัสบดี, 11 ตุลาคม 2567</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-subtle">เวลา</span>
                  <span className="font-semibold">18:00 - 20:00 (2 ชั่วโมง)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-subtle">สนาม</span>
                  <span className="font-semibold">สนามที่ 3</span>
                </div>
                <div className="border-t border-primary/30 my-3"></div>
                <div className="flex justify-between items-baseline">
                  <span className="text-base text-subtle">ราคารวม (โดยประมาณ)</span>
                  <span className="text-2xl font-black text-slate-900 dark:text-white">฿360</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Grid */}
        <main className="w-full lg:w-2/3 flex-1">
          <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
              <h1 className="text-2xl font-bold">เลือกช่วงเวลา</h1>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="size-4 rounded border border-slate-200 bg-white"></div>
                  <span>ว่าง</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-4 rounded bg-primary"></div>
                  <span>ที่คุณเลือก</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-4 rounded bg-slate-200 dark:bg-slate-700"></div>
                  <span>ไม่ว่าง</span>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto pb-2">
              <div className="grid gap-px bg-slate-200 dark:bg-slate-700 min-w-[700px] border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden" style={{ gridTemplateColumns: `60px repeat(${courts.length}, 1fr)` }}>
                {/* Header Row */}
                <div className="bg-slate-50 dark:bg-slate-800 p-3 text-center text-sm font-bold sticky left-0 z-10">เวลา</div>
                {courts.map(c => (
                  <div key={`h-${c}`} className="bg-slate-50 dark:bg-slate-800 p-3 text-center text-sm font-bold">สนาม {c}</div>
                ))}

                {/* Rows */}
                {hours.map((time, hIndex) => (
                  <React.Fragment key={time}>
                     {/* Time Label */}
                    <div className="bg-slate-50 dark:bg-slate-800 p-3 text-xs text-subtle flex items-center justify-center sticky left-0 z-10 border-t border-slate-100 dark:border-slate-700">
                      {time}
                    </div>
                    
                    {/* Cells */}
                    {courts.map(court => {
                      const unavailable = isUnavailable(court, hIndex);
                      const selected = isSelected(court, hIndex);

                      return (
                        <button
                          key={`${court}-${hIndex}`}
                          onClick={() => !unavailable && toggleSlot(court, hIndex)}
                          disabled={unavailable}
                          className={`
                            h-14 w-full transition-all duration-200 relative
                            ${unavailable 
                              ? 'bg-slate-200 dark:bg-slate-700 cursor-not-allowed' 
                              : selected 
                                ? 'bg-primary z-10 ring-2 ring-primary ring-offset-1 dark:ring-offset-surface-dark' 
                                : 'bg-white dark:bg-surface-dark hover:bg-emerald-50 dark:hover:bg-emerald-900/20'}
                          `}
                        >
                          {selected && <span className="material-symbols-outlined text-white text-lg">check</span>}
                        </button>
                      )
                    })}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </main>

      </div>

      {/* Bottom Bar */}
      <footer className="fixed bottom-0 left-0 w-full bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-md border-t border-border-light dark:border-border-dark py-4 px-6 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-sm text-subtle">ราคารวม</span>
            <p className="text-xl font-bold">฿360.00</p>
          </div>
          <button 
            onClick={() => navigate('/payment')}
            className="flex min-w-[140px] items-center justify-center rounded-lg h-12 px-6 bg-primary text-slate-900 font-bold text-base hover:opacity-90 transition-all shadow-lg shadow-primary/20"
          >
            ดำเนินการต่อ
          </button>
        </div>
      </footer>
    </div>
  );
};

export default UserBookingPage;