"use client";

import { useState } from "react";
import { CalendarDays, Clock, MapPin, Mic2 } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionSideDecor } from "@/components/ui/section-side-decor";
import {
  EDICAO_2026_PROGRAMACAO_DIAS,
  EDICAO_2026_PROGRAMACAO_FILTROS,
  EDICAO_2026_PROGRAMACAO_POR_DIA,
} from "@/lib/edicao-2026";

type ProgramacaoDate = keyof typeof EDICAO_2026_PROGRAMACAO_POR_DIA;
type StageFilterId = (typeof EDICAO_2026_PROGRAMACAO_FILTROS)[number]["id"];

export function Edicao2026Programacao() {
  const [selectedDate, setSelectedDate] = useState<ProgramacaoDate>(
    EDICAO_2026_PROGRAMACAO_DIAS[0].date,
  );
  const [stageFilter, setStageFilter] = useState<StageFilterId>("todos");

  const selectedDay = EDICAO_2026_PROGRAMACAO_DIAS.find((day) => day.date === selectedDate)!;
  const stages = EDICAO_2026_PROGRAMACAO_POR_DIA[selectedDate];
  const selectedStageName =
    stageFilter === "todos"
      ? null
      : EDICAO_2026_PROGRAMACAO_FILTROS.find(
          (item): item is Extract<(typeof EDICAO_2026_PROGRAMACAO_FILTROS)[number], { stage: string }> =>
            item.id === stageFilter && "stage" in item,
        )?.stage ?? null;

  const filteredStages =
    selectedStageName === null
      ? stages
      : stages.filter((stage) => stage.stage === selectedStageName);

  const totalTalks = filteredStages.reduce((acc, stage) => acc + stage.talks.length, 0);
  const activePalcos = filteredStages.length;

  function handleDateChange(date: ProgramacaoDate) {
    setSelectedDate(date);
    setStageFilter("todos");
  }

  return (
    <section className="section-cream section-padding relative overflow-hidden">
      <SectionSideDecor />

      <div className="container-panifair">
        {/* Cabeçalho: painel escuro + menu de dias */}
        <div className="mb-12 grid gap-5 lg:grid-cols-12 lg:gap-6">
          <Reveal className="lg:col-span-7">
            <div className="flex h-full flex-col justify-center rounded-[1.75rem] bg-gradient-to-br from-[#452816] via-[#4a2c18] to-[#3a2010] p-8 text-[#f8f3ee] shadow-[0_20px_50px_rgba(69,40,22,0.25)] md:p-10">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(232,200,122,0.3)] bg-[rgba(22,15,8,0.35)] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#e8c87a]">
                <CalendarDays className="h-3 w-3" aria-hidden="true" />
                Panifair 2026
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                A programação que marcou a edição
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#ddcfaa] md:text-base">
                Foram três dias de conteúdo sobre panificação, confeitaria,
                gestão, varejo, inovação, liderança e negócios — reviva o que
                aconteceu em cada dia e palco.
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-4 lg:col-span-5">
            {EDICAO_2026_PROGRAMACAO_DIAS.map((day) => {
              const selected = day.date === selectedDate;
              return (
                <div key={day.date} className="flex-1">
                  <button
                    type="button"
                    onClick={() => handleDateChange(day.date)}
                    aria-pressed={selected}
                    className={`flex h-full w-full items-center justify-between gap-4 rounded-2xl border bg-[rgba(255,252,245,0.7)] p-5 text-left transition-all duration-300 ${
                      selected
                        ? "border-[#b08450] shadow-[0_10px_32px_rgba(122,85,50,0.16)]"
                        : "border-[rgba(122,85,50,0.15)] hover:border-[rgba(122,85,50,0.4)]"
                    }`}
                  >
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a67c52]">
                        {day.date}
                      </p>
                      <p className="mt-1 text-xl font-bold text-[#452816] md:text-2xl">
                        {day.day}
                      </p>
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#7a6b5c]">
                        <Clock className="h-3 w-3" aria-hidden="true" />
                        {day.hours}
                      </p>
                    </div>
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                        selected
                          ? "bg-[rgba(176,132,80,0.18)] text-[#7a5532]"
                          : "bg-[rgba(176,132,80,0.08)] text-[#b08450]"
                      }`}
                    >
                      <CalendarDays className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Resumo do dia + filtro por palco */}
        {stages.length > 0 ? (
          <div key={selectedDate}>
            <Reveal>
              <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a67c52]">
                    {selectedDay.date}
                  </p>
                  <h3 className="fg-primary mt-2 text-2xl font-bold tracking-tight md:text-3xl">
                    {selectedDay.fullTitle}
                  </h3>
                  <p className="fg-muted mt-3 text-sm leading-relaxed md:text-base">
                    {selectedDay.description}
                  </p>
                </div>

                <div
                  className="flex flex-wrap gap-2 lg:max-w-md lg:justify-end"
                  role="group"
                  aria-label="Filtrar por palco"
                >
                  {EDICAO_2026_PROGRAMACAO_FILTROS.map((filter) => {
                    const active = stageFilter === filter.id;
                    return (
                      <button
                        key={filter.id}
                        type="button"
                        onClick={() => setStageFilter(filter.id)}
                        aria-pressed={active}
                        className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                          active
                            ? "border-[#b08450] bg-[rgba(255,252,245,0.95)] text-[#452816] shadow-[0_4px_16px_rgba(122,85,50,0.12)]"
                            : "border-[rgba(122,85,50,0.2)] bg-transparent text-[#5c4d3e] hover:border-[rgba(122,85,50,0.45)]"
                        }`}
                      >
                        {filter.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="mb-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-[rgba(122,85,50,0.15)] bg-[rgba(255,252,245,0.7)] px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#7a6b5c]">
                    Palestras e talks
                  </p>
                  <p className="fg-primary mt-1 text-3xl font-extrabold tabular-nums">
                    {totalTalks}
                  </p>
                </div>
                <div className="rounded-2xl border border-[rgba(122,85,50,0.15)] bg-[rgba(255,252,245,0.7)] px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#7a6b5c]">
                    Palcos ativos
                  </p>
                  <p className="fg-primary mt-1 text-3xl font-extrabold tabular-nums">
                    {activePalcos}
                  </p>
                </div>
                <div className="rounded-2xl border border-[rgba(122,85,50,0.15)] bg-[rgba(255,252,245,0.7)] px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#7a6b5c]">
                    Horário da feira
                  </p>
                  <p className="fg-primary mt-1 text-2xl font-extrabold md:text-3xl">
                    {selectedDay.fairHours}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Palcos filtrados */}
            <div className="space-y-10">
              {filteredStages.length > 0 ? (
                filteredStages.map((stage) => (
                  <div key={stage.stage}>
                      <div className="mb-5 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <h3 className="fg-primary flex items-center gap-2.5 text-xl font-bold md:text-2xl">
                          <Mic2 className="h-5 w-5 text-[#a67c52]" aria-hidden="true" />
                          {stage.stage}
                        </h3>
                        <p className="fg-muted text-sm">{stage.description}</p>
                      </div>

                      <div className="divide-y divide-[rgba(122,85,50,0.15)] rounded-2xl border border-[rgba(122,85,50,0.18)] bg-[rgba(255,252,245,0.55)]">
                        {stage.talks.map((talk) => (
                          <div
                            key={`${talk.time}-${talk.speaker}`}
                            className="hover-row flex flex-col gap-2 p-5 transition-colors duration-300 sm:flex-row sm:items-center sm:gap-6"
                          >
                            <span className="fg-accent shrink-0 text-xs font-bold uppercase tabular-nums tracking-wider sm:w-32">
                              {talk.time}
                            </span>

                            <div className="min-w-0 flex-1">
                              {"highlight" in talk && talk.highlight ? (
                                <span className="mb-1 inline-block rounded-full border border-[rgba(122,85,50,0.3)] bg-[rgba(176,132,80,0.12)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#7a5532]">
                                  {talk.highlight}
                                </span>
                              ) : null}
                              <p className="fg-primary text-sm font-bold md:text-base">
                                {talk.speaker}
                              </p>
                              <p className="fg-muted mt-0.5 text-sm leading-snug">{talk.title}</p>
                              <p className="fg-subtle mt-1 flex items-center gap-1.5 text-xs">
                                <MapPin className="h-3 w-3" aria-hidden="true" />
                                {talk.origin}
                              </p>
                              <details className="group/bio mt-2">
                                <summary className="inline-flex cursor-pointer list-none items-center gap-1 text-xs font-semibold text-[#a67c52] transition-colors hover:text-[#7a5532] [&::-webkit-details-marker]:hidden">
                                  Mini currículo
                                  <span
                                    aria-hidden
                                    className="text-[10px] transition-transform duration-200 group-open/bio:rotate-180"
                                  >
                                    ▾
                                  </span>
                                </summary>
                                <p className="fg-muted mt-2 max-w-2xl rounded-xl border border-[rgba(122,85,50,0.15)] bg-[rgba(176,132,80,0.06)] p-4 text-xs leading-relaxed">
                                  {talk.bio}
                                </p>
                              </details>
                            </div>

                            <span className="fg-muted shrink-0 self-start rounded-full border border-[rgba(122,85,50,0.25)] bg-[rgba(176,132,80,0.08)] px-3 py-1 text-[11px] font-medium sm:self-center">
                              {talk.tag}
                            </span>
                          </div>
                        ))}
                      </div>
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-[rgba(122,85,50,0.3)] bg-[rgba(255,252,245,0.5)] p-10 text-center">
                  <p className="fg-primary text-lg font-semibold">
                    Nenhuma palestra neste palco para este dia
                  </p>
                  <p className="fg-muted mt-2 text-sm">
                    Selecione outro filtro ou confira a programação completa em
                    &quot;Todos&quot;.
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-[rgba(122,85,50,0.3)] bg-[rgba(255,252,245,0.5)] p-10 text-center">
            <p className="fg-primary text-lg font-semibold">
              Programação detalhada em breve
            </p>
            <p className="fg-muted mt-2 text-sm">
              As palestras deste dia serão anunciadas em breve. Confira a
              programação de sexta (15/05) e sábado (16/05).
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
