import React from 'react';

const AdminDashboardPage: React.FC = () => {
  // Mock Data for grid
  const courts = ['Court 1', 'Court 2', 'Court 3', 'Court 4'];
  const hours = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];

  return (
    <div className="p-6 lg:p-8 flex flex-col lg:flex-row gap-8 h-full">
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-1">ภาพรวมการจอง (Booking Overview)</h1>
            <p className="text-subtle">View and manage all court bookings for the selected day.</p>
          </div>
          <button className="flex items-center gap-2 bg-primary text-slate-900 font-bold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-xl">add</span>
            Add New Booking
          </button>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
           <div className="flex bg-white dark:bg-surface-dark rounded-lg p-1 border border-border-light dark:border-border-dark">
             <button className="px-4 py-1.5 rounded-md bg-primary/20 text-primary-dark dark:text-primary font-medium text-sm shadow-sm">Daily (วันนี้)</button>
             <button className="px-4 py-1.5 rounded-md text-subtle hover:text-slate-900 dark:hover:text-white font-medium text-sm transition-colors">Weekly (สัปดาห์นี้)</button>
           </div>

           <div className="flex items-center gap-2 bg-white dark:bg-surface-dark px-2 py-1 rounded-lg border border-border-light dark:border-border-dark">
             <button className="p-1 rounded hover:bg-gray-100 dark:hover:bg-white/10"><span className="material-symbols-outlined">chevron_left</span></button>
             <span className="font-bold px-2">July 5, 2024</span>
             <button className="p-1 rounded hover:bg-gray-100 dark:hover:bg-white/10"><span className="material-symbols-outlined">chevron_right</span></button>
           </div>

           <div className="ml-auto relative">
              <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-subtle text-xl">filter_list</span>
              <select className="pl-9 pr-4 py-2 rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark text-sm focus:ring-primary focus:border-primary">
                <option>All Courts</option>
                <option>Court 1</option>
                <option>Court 2</option>
              </select>
           </div>
        </div>

        {/* Dashboard Grid */}
        <div className="flex-1 overflow-x-auto border border-border-light dark:border-border-dark rounded-xl bg-white dark:bg-surface-dark shadow-sm">
           <table className="w-full border-collapse">
             <thead>
               <tr className="bg-background-light dark:bg-background-dark/50">
                 <th className="sticky left-0 z-10 bg-background-light dark:bg-[#12261b] p-4 text-left border-b border-r border-border-light dark:border-border-dark min-w-[100px]">Court</th>
                 {hours.map(h => (
                   <th key={h} className="p-4 text-left border-b border-border-light dark:border-border-dark min-w-[140px] text-sm font-bold text-subtle">{h}</th>
                 ))}
               </tr>
             </thead>
             <tbody>
               {courts.map((court, idx) => (
                 <tr key={court} className="border-b border-border-light dark:border-border-dark last:border-0 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                   <td className="sticky left-0 z-10 bg-white dark:bg-surface-dark p-4 border-r border-border-light dark:border-border-dark font-bold text-primary-dark dark:text-primary">{court}</td>
                   {hours.map((h, hIdx) => {
                     // Mock logic for cells
                     if (idx === 0 && hIdx === 0) {
                       return (
                         <td key={h} colSpan={2} className="p-1">
                           <div className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-200 p-2 rounded-lg h-16 text-xs flex flex-col justify-center border-l-4 border-blue-500">
                             <span className="font-bold text-sm">John D.</span>
                             <span>ID: BK-101 (Paid)</span>
                           </div>
                         </td>
                       )
                     }
                     if (idx === 0 && hIdx === 1) return null; // Spanned

                     if (idx === 0 && hIdx === 3) {
                        return (
                         <td key={h} colSpan={2} className="p-1">
                           <div className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 p-2 rounded-lg h-16 text-xs flex flex-col justify-center border-l-4 border-gray-500">
                             <span className="font-bold text-sm">Maintenance</span>
                             <span>(Blocked)</span>
                           </div>
                         </td>
                       )
                     }
                     if (idx === 0 && hIdx === 4) return null;

                     if (idx === 2 && hIdx === 4) {
                        return (
                         <td key={h} colSpan={3} className="p-1">
                           <div className="bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-200 p-2 rounded-lg h-16 text-xs flex flex-col justify-center border-l-4 border-orange-500">
                             <span className="font-bold text-sm">Tom B.</span>
                             <span>ID: BK-105 (Pending)</span>
                           </div>
                         </td>
                       )
                     }
                     if (idx === 2 && (hIdx === 5 || hIdx === 6)) return null;


                     return (
                       <td key={h} className="p-1 text-center relative group cursor-pointer">
                         <div className="h-16 rounded-lg border border-dashed border-border-light dark:border-border-dark flex items-center justify-center text-gray-300 hover:bg-primary/5 hover:border-primary hover:text-primary transition-all">
                           <span className="material-symbols-outlined opacity-0 group-hover:opacity-100">add</span>
                         </div>
                       </td>
                     )
                   })}
                 </tr>
               ))}
             </tbody>
           </table>
        </div>
        
        <div className="flex gap-6 mt-4 text-xs font-medium text-subtle px-1">
           <div className="flex items-center gap-2"><span className="size-3 rounded-full bg-blue-500"></span> Paid</div>
           <div className="flex items-center gap-2"><span className="size-3 rounded-full bg-orange-500"></span> Pending</div>
           <div className="flex items-center gap-2"><span className="size-3 rounded-full bg-gray-500"></span> Blocked</div>
        </div>
      </div>

      {/* Right Sidebar Stats */}
      <aside className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-6 border-l border-border-light dark:border-border-dark lg:pl-8">
        <h2 className="text-lg font-bold">Today's Summary</h2>
        
        <div className="grid gap-4">
          <div className="bg-primary/10 rounded-xl p-4 border border-primary/20">
            <div className="flex items-center gap-3 text-primary-dark dark:text-primary mb-2">
              <span className="material-symbols-outlined">confirmation_number</span>
              <span className="text-sm font-bold">Total Bookings</span>
            </div>
            <p className="text-3xl font-black">12</p>
          </div>
          <div className="bg-primary/10 rounded-xl p-4 border border-primary/20">
            <div className="flex items-center gap-3 text-primary-dark dark:text-primary mb-2">
              <span className="material-symbols-outlined">payments</span>
              <span className="text-sm font-bold">Total Revenue</span>
            </div>
            <p className="text-3xl font-black">฿5,400</p>
          </div>
           <div className="bg-primary/10 rounded-xl p-4 border border-primary/20">
            <div className="flex items-center gap-3 text-primary-dark dark:text-primary mb-2">
              <span className="material-symbols-outlined">pie_chart</span>
              <span className="text-sm font-bold">Occupancy</span>
            </div>
            <p className="text-3xl font-black">68%</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 flex-1">
           <h2 className="text-lg font-bold mt-2">Upcoming Bookings</h2>
           <div className="space-y-3">
             {[
               { time: '14:00', name: 'Jane S.', court: 'Court 1', id: 'BK-102' },
               { time: '14:00', name: 'Tom B.', court: 'Court 3', id: 'BK-105' },
               { time: '16:00', name: 'Emily K.', court: 'Court 2', id: 'BK-107' },
             ].map((item, i) => (
               <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm">
                 <div className="flex items-center justify-center bg-background-light dark:bg-background-dark rounded-lg w-14 h-12 font-bold text-sm text-primary-dark dark:text-primary">
                   {item.time}
                 </div>
                 <div>
                   <p className="font-bold text-sm">{item.name} ({item.court})</p>
                   <p className="text-xs text-subtle">ID: {item.id}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>

        <button className="w-full mt-auto flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 text-slate-800 dark:text-gray-200 font-bold py-2.5 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
          <span className="material-symbols-outlined">block</span>
          Block Court
        </button>

      </aside>

    </div>
  );
};

export default AdminDashboardPage;