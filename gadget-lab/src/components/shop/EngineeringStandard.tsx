export function EngineeringStandard() {
  return (
    <section className="mt-16 border-t border-zinc-100 pt-12">
      <p className="text-[9px] tracking-[0.3em] uppercase text-zinc-400 mb-8">The Engineering Standard</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold mb-3">GaN V.3 Technology</h3>
          <p className="text-[12px] text-zinc-500 leading-relaxed max-w-sm">
            Our third-generation Gallium Nitride semiconductors allow for higher efficiency and lower heat
            dissipation in a 45% smaller footprint compared to traditional silicon chargers.
          </p>
          <div className="flex gap-8 mt-8">
            <div>
              <p className="text-3xl font-bold">98%</p>
              <p className="text-[10px] text-zinc-400 tracking-wider uppercase mt-1">Efficiency</p>
            </div>
            <div>
              <p className="text-3xl font-bold">-24°C</p>
              <p className="text-[10px] text-zinc-400 tracking-wider uppercase mt-1">Heat Reduction</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 text-white p-8 flex flex-col items-start gap-3">
          <div className="w-8 h-8 bg-red-700 flex items-center justify-center mb-2">
            <span className="text-white text-xs font-bold">GL</span>
          </div>
          <p className="text-sm font-semibold">Lab Certified</p>
          <p className="text-[11px] text-zinc-400 leading-relaxed">
            Every component undergoes a 72-hour stress test at peak voltage to ensure accurate reliability in
            mission-critical environments.
          </p>
        </div>
      </div>
    </section>
  );
}
