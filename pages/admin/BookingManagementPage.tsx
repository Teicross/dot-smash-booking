import React from 'react';

const AdminBookingManagementPage: React.FC = () => {
  const bookings = [
    { id: 'BK-202401', name: 'สมชาย ใจดี', date: '25/07/2024 18:00', court: 'สนามที่ 1', status: 'Confirmed', statusLabel: 'ยืนยันแล้ว', statusClass: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' },
    { id: 'BK-202402', name: 'สมศรี มีสุข', date: '25/07/2024 19:00', court: 'สนามที่ 3', status: 'Pending', statusLabel: 'รอดำเนินการ', statusClass: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300' },
    { id: 'BK-202403', name: 'มานี ชูใจ', date: '26/07/2024 10:00', court: 'สนามที่ 2', status: 'Confirmed', statusLabel: 'ยืนยันแล้ว', statusClass: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' },
    { id: 'BK-202404', name: 'John Doe', date: '26/07/2024 11:00', court: 'สนามที่ 4', status: 'Cancelled', statusLabel: 'ยกเลิก', statusClass: 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300' },
  ];

  return (
    <div className="p-6 lg:p-8 flex flex-col lg:flex-row gap-8 h-[calc(100vh-64px)]">
      
      {/* Left: Table List */}
      <div className="flex-1 flex flex-col gap-6 min-w-0 overflow-hidden">
        <header>
          <h1 className="text-3xl font-black tracking-tight mb-1">จัดการการจอง</h1>
          <p className="text-subtle">ดู, เพิ่ม, แก้ไข หรือลบรายการจองของลูกค้า</p>
        </header>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
             <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-subtle">
                <span className="material-symbols-outlined">search</span>
             </div>
             <input 
               type="text" 
               placeholder="ค้นหาจากชื่อ, รหัสการจอง..." 
               className="block w-full rounded-lg border-border-light dark:border-border-dark bg-white dark:bg-surface-dark p-3 pl-10 text-sm focus:border-primary focus:ring-primary"
             />
          </div>
          <button className="flex items-center justify-center gap-2 bg-primary text-slate-900 font-bold px-6 py-3 rounded-lg hover:opacity-90 whitespace-nowrap">
            <span className="material-symbols-outlined text-xl">add_circle</span>
            <span>เพิ่มการจองใหม่</span>
          </button>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-1.5 bg-primary/10 text-primary-dark dark:text-primary font-medium text-sm rounded-lg flex items-center gap-2">
            สถานะ: ทั้งหมด <span className="material-symbols-outlined text-sm">expand_more</span>
          </button>
          <button className="px-4 py-1.5 bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark text-slate-700 dark:text-gray-300 font-medium text-sm rounded-lg flex items-center gap-2">
            สนาม: ทั้งหมด <span className="material-symbols-outlined text-sm">expand_more</span>
          </button>
           <button className="px-4 py-1.5 bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark text-slate-700 dark:text-gray-300 font-medium text-sm rounded-lg flex items-center gap-2">
            ช่วงวันที่ <span className="material-symbols-outlined text-sm">expand_more</span>
          </button>
        </div>

        <div className="flex-1 overflow-hidden bg-white dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark flex flex-col shadow-sm">
          <div className="overflow-x-auto overflow-y-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-background-light dark:bg-background-dark/50 text-subtle uppercase text-xs">
                <tr>
                  <th className="px-6 py-3 font-bold">รหัสการจอง</th>
                  <th className="px-6 py-3 font-bold">ลูกค้า</th>
                  <th className="px-6 py-3 font-bold">วันที่/เวลา</th>
                  <th className="px-6 py-3 font-bold">สนาม</th>
                  <th className="px-6 py-3 font-bold">สถานะ</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-light dark:divide-border-dark">
                {bookings.map((b, i) => (
                  <tr 
                    key={b.id} 
                    className={`group hover:bg-primary/5 transition-colors cursor-pointer ${i === 1 ? 'bg-primary/5' : ''}`}
                  >
                    <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white whitespace-nowrap">{b.id}</td>
                    <td className="px-6 py-4 text-slate-700 dark:text-gray-300">{b.name}</td>
                    <td className="px-6 py-4 text-slate-700 dark:text-gray-300">{b.date}</td>
                    <td className="px-6 py-4 text-slate-700 dark:text-gray-300">{b.court}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${b.statusClass}`}>
                        {b.statusLabel}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1 text-gray-400 hover:text-primary"><span className="material-symbols-outlined text-lg">edit</span></button>
                        <button className="p-1 text-gray-400 hover:text-red-500"><span className="material-symbols-outlined text-lg">delete</span></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-auto p-4 border-t border-border-light dark:border-border-dark flex justify-between items-center">
            <span className="text-xs text-subtle">Showing 1-4 of 10</span>
            <div className="flex gap-1">
              <button className="px-3 py-1 text-xs border border-border-light dark:border-border-dark rounded-l-md hover:bg-gray-100 dark:hover:bg-white/5">Previous</button>
              <button className="px-3 py-1 text-xs border-t border-b border-border-light dark:border-border-dark bg-primary/10 text-primary-dark dark:text-primary font-bold">1</button>
              <button className="px-3 py-1 text-xs border border-border-light dark:border-border-dark rounded-r-md hover:bg-gray-100 dark:hover:bg-white/5">Next</button>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Details Panel */}
      <div className="w-full lg:w-[400px] flex-shrink-0">
        <div className="bg-white dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6 shadow-sm lg:sticky lg:top-6">
           <div className="flex justify-between items-start mb-6">
             <div>
               <h3 className="text-2xl font-bold">รายละเอียดการจอง</h3>
               <p className="text-subtle text-sm mt-1">รหัสการจอง #BK-202402</p>
             </div>
             <button className="text-gray-400 hover:text-slate-900 dark:hover:text-white"><span className="material-symbols-outlined">close</span></button>
           </div>

           <div className="space-y-6">
             <div className="flex justify-between items-center p-4 bg-background-light dark:bg-background-dark/50 rounded-lg">
               <span className="text-sm font-medium text-subtle">สถานะ</span>
               <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300">รอดำเนินการ</span>
             </div>

             <div>
               <h4 className="text-lg font-bold mb-3">ข้อมูลลูกค้า</h4>
               <div className="space-y-3 text-sm">
                 <div className="flex justify-between">
                   <span className="text-subtle">ชื่อ</span>
                   <span className="font-medium">สมศรี มีสุข</span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-subtle">เบอร์โทรศัพท์</span>
                   <span className="font-medium">081-234-5678</span>
                 </div>
               </div>
             </div>

             <div className="border-t border-dashed border-border-light dark:border-border-dark"></div>

             <div>
               <h4 className="text-lg font-bold mb-3">รายละเอียดการจอง</h4>
               <div className="space-y-3 text-sm">
                 <div className="flex justify-between">
                   <span className="text-subtle">สนาม</span>
                   <span className="font-medium">สนามที่ 3</span>
                 </div>
                  <div className="flex justify-between">
                   <span className="text-subtle">วันที่</span>
                   <span className="font-medium">25 กรกฎาคม 2024</span>
                 </div>
                  <div className="flex justify-between">
                   <span className="text-subtle">เวลา</span>
                   <span className="font-medium">19:00 - 20:00</span>
                 </div>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-border-light dark:border-border-dark">
                   <span className="text-base font-bold">ราคา</span>
                   <span className="text-xl font-black text-primary-dark dark:text-primary">250 บาท</span>
                 </div>
               </div>
             </div>

             <div className="grid grid-cols-2 gap-3 mt-6">
               <button className="flex items-center justify-center gap-2 bg-primary text-slate-900 font-bold py-3 rounded-lg hover:opacity-90">
                 <span className="material-symbols-outlined text-lg">edit</span>
                 แก้ไข
               </button>
               <button className="flex items-center justify-center gap-2 bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400 font-bold py-3 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/40">
                 <span className="material-symbols-outlined text-lg">delete</span>
                 ลบ
               </button>
             </div>

           </div>
        </div>
      </div>

    </div>
  );
};

export default AdminBookingManagementPage;