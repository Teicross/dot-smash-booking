import React from 'react';

const AdminSettingsPage: React.FC = () => {
  const days = ['จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์', 'อาทิตย์'];
  const timeSlots = ['08:00 - 09:00', '09:00 - 10:00', '10:00 - 11:00', '17:00 - 18:00'];

  return (
    <div className="p-6 lg:p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-black tracking-tight mb-1">การตั้งค่าสนามและราคา</h1>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Pricing Table */}
        <div className="xl:col-span-2 bg-white dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-6">ตั้งค่าราคาตามช่วงเวลา</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-center">
              <thead>
                <tr className="bg-background-light dark:bg-background-dark/50">
                  <th className="p-3 text-left font-bold text-subtle min-w-[120px]">ช่วงเวลา</th>
                  {days.map(d => <th key={d} className="p-3 font-bold text-subtle min-w-[80px]">{d}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-border-light dark:divide-border-dark">
                {timeSlots.map((slot, idx) => (
                  <React.Fragment key={idx}>
                    {idx === 2 && (
                       <tr><td colSpan={8} className="py-2 text-subtle tracking-widest">...</td></tr>
                    )}
                    {idx !== 2 && (
                      <tr>
                        <td className="p-3 text-left font-medium whitespace-nowrap">{slot}</td>
                        {days.map((d, dIdx) => (
                          <td key={d} className="p-2">
                            <input 
                              type="text" 
                              defaultValue={(dIdx > 4) ? "200" : (idx === 3 ? "180" : "150")}
                              className={`w-full text-center rounded-md border-gray-200 dark:border-gray-700 bg-background-light dark:bg-background-dark/50 text-sm py-1.5 focus:border-primary focus:ring-primary ${(idx === 3 && dIdx > 4) ? 'text-primary-dark dark:text-primary font-bold' : ''}`}
                            />
                          </td>
                        ))}
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end gap-3 mt-8">
            <button className="px-6 py-2.5 rounded-lg font-bold text-slate-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 bg-gray-50 dark:bg-white/5">ยกเลิก</button>
            <button className="px-6 py-2.5 rounded-lg font-bold bg-primary text-slate-900 hover:opacity-90 shadow-sm">บันทึกการเปลี่ยนแปลง</button>
          </div>
        </div>

        {/* Holiday Management */}
        <div className="xl:col-span-1 space-y-8">
          
          <div className="bg-white dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6 shadow-sm">
             <h2 className="text-xl font-bold mb-6">จัดการวันหยุดและวันปิดทำการ</h2>
             
             {/* Calendar Widget Mock */}
             <div className="bg-background-light dark:bg-background-dark/50 rounded-xl p-4 mb-6">
                <div className="flex justify-between items-center mb-4">
                   <button className="p-1 hover:bg-gray-200 dark:hover:bg-white/10 rounded-full"><span className="material-symbols-outlined">chevron_left</span></button>
                   <span className="font-bold">ธันวาคม 2024</span>
                   <button className="p-1 hover:bg-gray-200 dark:hover:bg-white/10 rounded-full"><span className="material-symbols-outlined">chevron_right</span></button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold text-subtle mb-2">
                  <div>อา</div><div>จ</div><div>อ</div><div>พ</div><div>พฤ</div><div>ศ</div><div>ส</div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-sm">
                  {/* Mock days */}
                  {[...Array(31)].map((_, i) => {
                    const day = i + 1;
                    let className = "size-8 flex items-center justify-center rounded-full mx-auto hover:bg-white dark:hover:bg-white/10 cursor-pointer";
                    if (day === 5) className += " bg-yellow-100 text-yellow-700 ring-2 ring-yellow-400 font-bold";
                    if (day === 4 || day === 25 || day === 31) className += " bg-red-100 text-red-700 font-bold";
                    
                    return <div key={i} className={className}>{day}</div>
                  })}
                </div>
             </div>

             <div className="space-y-4">
               <div>
                 <label className="block text-sm font-medium mb-1.5">ชื่อ/เหตุผลการปิด</label>
                 <input type="text" placeholder="เช่น วันปีใหม่, ปรับปรุงสนาม" className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark text-sm focus:border-primary focus:ring-primary" />
               </div>
               <div>
                 <label className="block text-sm font-medium mb-1.5">วันที่</label>
                 <input type="date" className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark text-sm focus:border-primary focus:ring-primary" />
               </div>
               <button className="w-full py-2.5 bg-primary text-slate-900 font-bold rounded-lg hover:opacity-90 flex items-center justify-center gap-2">
                 <span className="material-symbols-outlined text-lg">add</span>
                 เพิ่มวันหยุด
               </button>
             </div>
          </div>

          <div className="bg-white dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6 shadow-sm">
            <h2 className="text-lg font-bold mb-4">วันหยุดที่กำหนดไว้แล้ว</h2>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-3 rounded-lg bg-background-light dark:bg-background-dark/50">
                <div>
                   <p className="font-bold text-sm">วันแรงงาน</p>
                   <p className="text-xs text-subtle">1 พฤษภาคม 2024</p>
                </div>
                <button className="text-gray-400 hover:text-red-500"><span className="material-symbols-outlined">delete</span></button>
              </div>
               <div className="flex justify-between items-center p-3 rounded-lg bg-background-light dark:bg-background-dark/50">
                <div>
                   <p className="font-bold text-sm">ปรับปรุงสนาม</p>
                   <p className="text-xs text-subtle">15-16 สิงหาคม 2024</p>
                </div>
                <button className="text-gray-400 hover:text-red-500"><span className="material-symbols-outlined">delete</span></button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AdminSettingsPage;