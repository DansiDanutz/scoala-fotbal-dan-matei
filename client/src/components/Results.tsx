/**
 * Design: Stadium Tunnel — Cinematic Sports Brutalism
 * Results: Scoreboard-style layout with broadcast overlay aesthetics.
 * Completed matches show scores; upcoming matches show "UPCOMING" badge.
 * Dark navy background with cyan/gold accents and diagonal dividers.
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock } from "lucide-react";

const matches = [
  {
    id: 1,
    home: "Dan Matei",
    away: "Chinteni",
    homeScore: null,
    awayScore: null,
    status: "upcoming",
    date: "21 Feb 2026",
  },
  {
    id: 2,
    home: "Dan Matei",
    away: "Luceafărul",
    homeScore: 4,
    awayScore: 4,
    status: "completed",
    date: "21 Feb 2026",
  },
  {
    id: 3,
    home: "Dan Matei",
    away: "Câmpia Turzii",
    homeScore: 1,
    awayScore: 6,
    status: "completed",
    date: "21 Feb 2026",
  },
  {
    id: 4,
    home: "Dan Matei",
    away: "Gilău",
    homeScore: 4,
    awayScore: 1,
    status: "completed",
    date: "21 Feb 2026",
  },
  {
    id: 5,
    home: "Dan Matei",
    away: "U Evolution",
    homeScore: 4,
    awayScore: 1,
    status: "completed",
    date: "21 Feb 2026",
  },
];

function getResult(homeScore: number | null, awayScore: number | null) {
  if (homeScore === null || awayScore === null) return null;
  if (homeScore > awayScore) return "win";
  if (homeScore < awayScore) return "loss";
  return "draw";
}

export default function Results() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const completed = matches.filter((m) => m.status === "completed");
  const wins = completed.filter((m) => getResult(m.homeScore, m.awayScore) === "win").length;
  const draws = completed.filter((m) => getResult(m.homeScore, m.awayScore) === "draw").length;
  const losses = completed.filter((m) => getResult(m.homeScore, m.awayScore) === "loss").length;
  const goalsFor = completed.reduce((acc, m) => acc + (m.homeScore ?? 0), 0);
  const goalsAgainst = completed.reduce((acc, m) => acc + (m.awayScore ?? 0), 0);

  return (
    <section id="rezultate" className="relative py-24 overflow-hidden" ref={ref}>
      {/* Subtle pitch-texture background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, oklch(0.80 0.15 200 / 0.3) 40px, oklch(0.80 0.15 200 / 0.3) 41px)",
        }}
      />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16"
        >
          <div>
            <span className="font-heading text-sm uppercase tracking-[0.3em] text-gold mb-4 block">
              Turneu · 21 Februarie 2026
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[0.95] text-white">
              Rezultate<br />
              <span className="text-gradient-cyan">Meciuri</span>
            </h2>
          </div>

          {/* Summary Stats */}
          <div className="flex items-center gap-6 pb-2">
            {[
              { label: "Victorii", value: wins, color: "text-emerald-400" },
              { label: "Egaluri", value: draws, color: "text-gold" },
              { label: "Înfrângeri", value: losses, color: "text-red-400" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <span className={`font-heading text-3xl font-bold block ${stat.color}`}>
                  {stat.value}
                </span>
                <span className="font-body text-xs uppercase tracking-[0.15em] text-white/40">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Matches List */}
        <div className="space-y-4">
          {matches.map((match, index) => {
            const result = getResult(match.homeScore, match.awayScore);
            const isUpcoming = match.status === "upcoming";

            const resultBorderColor =
              result === "win"
                ? "border-l-emerald-400"
                : result === "loss"
                ? "border-l-red-400"
                : result === "draw"
                ? "border-l-gold"
                : "border-l-white/20";

            const resultBg =
              result === "win"
                ? "from-emerald-500/5"
                : result === "loss"
                ? "from-red-500/5"
                : result === "draw"
                ? "from-amber-500/5"
                : "from-white/3";

            return (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className={`relative bg-gradient-to-r ${resultBg} to-transparent bg-[oklch(0.15_0.025_250)] border border-white/8 border-l-4 ${resultBorderColor} rounded-lg overflow-hidden`}
              >
                <div className="flex items-center gap-4 px-6 py-5">
                  {/* Match Number */}
                  <span className="font-heading text-2xl font-bold text-white/15 w-8 flex-shrink-0 hidden sm:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Teams & Score */}
                  <div className="flex-1 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                    {/* Home Team */}
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-cyan/20 border border-cyan/30 flex items-center justify-center flex-shrink-0">
                        <span className="font-heading text-[10px] font-bold text-cyan">DM</span>
                      </div>
                      <span className="font-heading text-base sm:text-lg uppercase tracking-wide text-white font-semibold">
                        {match.home}
                      </span>
                    </div>

                    {/* Score / Status */}
                    <div className="flex flex-col items-center gap-1">
                      {isUpcoming ? (
                        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded px-4 py-2">
                          <Clock className="w-3.5 h-3.5 text-cyan animate-pulse" />
                          <span className="font-heading text-xs uppercase tracking-[0.2em] text-cyan">
                            Upcoming
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                          <span
                            className={`font-heading text-3xl sm:text-4xl font-bold tabular-nums ${
                              result === "win"
                                ? "text-emerald-400"
                                : result === "loss"
                                ? "text-white/80"
                                : "text-gold"
                            }`}
                          >
                            {match.homeScore}
                          </span>
                          <span className="font-heading text-xl text-white/30">–</span>
                          <span
                            className={`font-heading text-3xl sm:text-4xl font-bold tabular-nums ${
                              result === "loss"
                                ? "text-red-400"
                                : result === "win"
                                ? "text-white/80"
                                : "text-gold"
                            }`}
                          >
                            {match.awayScore}
                          </span>
                        </div>
                      )}
                      {!isUpcoming && (
                        <span
                          className={`font-heading text-[10px] uppercase tracking-[0.2em] px-2 py-0.5 rounded ${
                            result === "win"
                              ? "bg-emerald-400/10 text-emerald-400"
                              : result === "loss"
                              ? "bg-red-400/10 text-red-400"
                              : "bg-amber-400/10 text-gold"
                          }`}
                        >
                          {result === "win" ? "Victorie" : result === "loss" ? "Înfrângere" : "Egal"}
                        </span>
                      )}
                    </div>

                    {/* Away Team */}
                    <div className="flex items-center justify-end gap-3">
                      <span className="font-heading text-base sm:text-lg uppercase tracking-wide text-white/80 text-right">
                        {match.away}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-heading text-[10px] font-bold text-white/40">
                          {match.away.slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="hidden lg:flex items-center gap-1.5 text-white/30 flex-shrink-0 pl-4 border-l border-white/5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="font-body text-xs">{match.date}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Goal Tally Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 pt-8 border-t border-white/8 flex flex-wrap items-center justify-between gap-6"
        >
          <div className="flex items-center gap-8">
            <div>
              <span className="font-heading text-3xl font-bold text-cyan">{goalsFor}</span>
              <span className="block font-body text-xs uppercase tracking-[0.15em] text-white/40 mt-1">
                Goluri Marcate
              </span>
            </div>
            <div>
              <span className="font-heading text-3xl font-bold text-white/50">{goalsAgainst}</span>
              <span className="block font-body text-xs uppercase tracking-[0.15em] text-white/40 mt-1">
                Goluri Primite
              </span>
            </div>
            <div>
              <span className={`font-heading text-3xl font-bold ${goalsFor - goalsAgainst >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                {goalsFor - goalsAgainst > 0 ? "+" : ""}{goalsFor - goalsAgainst}
              </span>
              <span className="block font-body text-xs uppercase tracking-[0.15em] text-white/40 mt-1">
                Diferență Goluri
              </span>
            </div>
          </div>
          <span className="font-body text-xs text-white/30 italic">
            * Rezultatele sunt actualizate pe măsură ce meciurile se joacă
          </span>
        </motion.div>
      </div>
    </section>
  );
}
