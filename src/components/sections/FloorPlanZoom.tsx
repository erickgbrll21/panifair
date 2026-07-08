"use client";

import Image from "next/image";
import { Maximize2, Minus, Plus, RotateCcw, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const MIN_ZOOM = 1;
const MAX_ZOOM = 5;
const STEP = 0.35;

function clampScale(value: number) {
  return Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, value));
}

function ZoomControls({
  onZoomIn,
  onZoomOut,
  onReset,
}: {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={onZoomOut}
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/95 text-[#3a2716] shadow-sm ring-1 ring-[rgba(122,85,50,0.2)] transition hover:bg-white"
        aria-label="Diminuir zoom"
      >
        <Minus className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={onZoomIn}
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/95 text-[#3a2716] shadow-sm ring-1 ring-[rgba(122,85,50,0.2)] transition hover:bg-white"
        aria-label="Aumentar zoom"
      >
        <Plus className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={onReset}
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/95 text-[#3a2716] shadow-sm ring-1 ring-[rgba(122,85,50,0.2)] transition hover:bg-white"
        aria-label="Restaurar zoom"
      >
        <RotateCcw className="h-4 w-4" />
      </button>
    </div>
  );
}

function clampPosition(
  pos: { x: number; y: number },
  scale: number,
  viewport: HTMLDivElement,
  content: HTMLDivElement,
) {
  const viewportW = viewport.clientWidth;
  const viewportH = viewport.clientHeight;
  const contentW = content.offsetWidth * scale;
  const contentH = content.offsetHeight * scale;
  const maxX = Math.max(0, (contentW - viewportW) / 2);
  const maxY = Math.max(0, (contentH - viewportH) / 2);

  return {
    x: Math.min(maxX, Math.max(-maxX, pos.x)),
    y: Math.min(maxY, Math.max(-maxY, pos.y)),
  };
}

function FloorPlanViewer({
  fullscreen = false,
  onClose,
}: {
  fullscreen?: boolean;
  onClose?: () => void;
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [canPan, setCanPan] = useState(false);
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, posX: 0, posY: 0 });

  const measurePan = useCallback(() => {
    const viewport = viewportRef.current;
    const content = contentRef.current;
    if (!viewport || !content) return;

    const overflows =
      content.offsetWidth > viewport.clientWidth + 1 ||
      content.offsetHeight > viewport.clientHeight + 1;

    setCanPan(overflows || scale > 1);
  }, [scale]);

  const applyClampedPosition = useCallback(
    (pos: { x: number; y: number }, nextScale = scale) => {
      const viewport = viewportRef.current;
      const content = contentRef.current;
      if (!viewport || !content) return pos;
      return clampPosition(pos, nextScale, viewport, content);
    },
    [scale],
  );

  const resetView = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  const zoomIn = useCallback(() => {
    setScale((current) => clampScale(current + STEP));
  }, []);

  const zoomOut = useCallback(() => {
    setScale((current) => {
      const next = clampScale(current - STEP);
      setPosition((pos) => applyClampedPosition(pos, next));
      return next;
    });
  }, [applyClampedPosition]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      const delta = event.deltaY > 0 ? -STEP : STEP;
      setScale((current) => {
        const next = clampScale(current + delta);
        setPosition((pos) => applyClampedPosition(pos, next));
        return next;
      });
    };

    viewport.addEventListener("wheel", onWheel, { passive: false });
    return () => viewport.removeEventListener("wheel", onWheel);
  }, [applyClampedPosition]);

  useEffect(() => {
    const media = window.matchMedia("(pointer: coarse)");
    const updatePointerType = () => setIsCoarsePointer(media.matches);
    updatePointerType();
    media.addEventListener("change", updatePointerType);
    return () => media.removeEventListener("change", updatePointerType);
  }, []);

  useEffect(() => {
    measurePan();
    const viewport = viewportRef.current;
    const content = contentRef.current;
    if (!viewport || !content) return;

    const observer = new ResizeObserver(measurePan);
    observer.observe(viewport);
    observer.observe(content);
    return () => observer.disconnect();
  }, [measurePan]);

  useEffect(() => {
    setPosition((pos) => applyClampedPosition(pos, scale));
  }, [scale, applyClampedPosition]);

  useEffect(() => {
    if (!fullscreen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [fullscreen]);

  const allowPan = canPan;

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!allowPan) return;
    setIsDragging(true);
    dragStart.current = {
      x: event.clientX,
      y: event.clientY,
      posX: position.x,
      posY: position.y,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setPosition(
      applyClampedPosition({
        x: dragStart.current.posX + (event.clientX - dragStart.current.x),
        y: dragStart.current.posY + (event.clientY - dragStart.current.y),
      }),
    );
  };

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const zoomLabel = `${Math.round(scale * 100)}%`;
  const panHint = isCoarsePointer
    ? "Arraste com o dedo ou use os botões para explorar a planta."
    : "Use a roda do mouse, os botões ou arraste para explorar a planta.";

  return (
    <>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <p className={`text-xs ${fullscreen ? "text-white/70" : "text-[#7a5532]"}`}>{panHint}</p>
        <div className="flex items-center gap-3">
          <span
            className={`text-xs font-semibold tabular-nums ${
              fullscreen ? "text-white/90" : "text-[#3a2716]"
            }`}
          >
            {zoomLabel}
          </span>
          <ZoomControls onZoomIn={zoomIn} onZoomOut={zoomOut} onReset={resetView} />
          {fullscreen && onClose && (
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/20"
              aria-label="Fechar visualização ampliada"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      <div
        ref={viewportRef}
        className={`relative overflow-hidden rounded-xl bg-white ring-1 ring-[rgba(122,85,50,0.15)] ${
          fullscreen ? "h-[calc(100dvh-8rem)]" : "h-[min(70vh,720px)]"
        }`}
        style={{ touchAction: allowPan ? "none" : "pan-y" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div
          className={`flex h-full w-full items-center justify-center ${
            allowPan ? (isDragging ? "cursor-grabbing" : "cursor-grab") : "cursor-default"
          }`}
        >
          <div
            ref={contentRef}
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              transformOrigin: "center center",
              transition: isDragging ? "none" : "transform 120ms ease-out",
            }}
          >
            <Image
              src="/planta.jpg"
              alt="Planta baixa oficial da PaniFair com estandes categorizados por cor"
              width={1600}
              height={900}
              priority={!fullscreen}
              className={`h-auto w-auto max-w-none select-none ${
                fullscreen ? "max-h-[calc(100dvh-10rem)]" : "max-h-[min(68vh,680px)]"
              }`}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export function FloorPlanZoom() {
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <>
      <div className="rounded-2xl bg-[#fbf6ea] p-3 sm:p-4 ring-1 ring-[rgba(122,85,50,0.15)]">
        <div className="mb-3 flex justify-end">
          <button
            type="button"
            onClick={() => setFullscreen(true)}
            className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-white/95 px-3 text-xs font-semibold text-[#3a2716] shadow-sm ring-1 ring-[rgba(122,85,50,0.2)] transition hover:bg-white"
          >
            <Maximize2 className="h-4 w-4" />
            Tela cheia
          </button>
        </div>
        <FloorPlanViewer />
      </div>

      {fullscreen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[rgba(26,18,10,0.92)] p-4 sm:p-6">
          <div className="mb-4">
            <p className="text-sm font-semibold text-white">Planta da feira</p>
            <p className="text-xs text-white/70">Visualização ampliada</p>
          </div>
          <FloorPlanViewer fullscreen onClose={() => setFullscreen(false)} />
        </div>
      )}
    </>
  );
}
