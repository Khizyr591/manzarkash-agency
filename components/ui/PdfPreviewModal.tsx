"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiDownload, FiExternalLink, FiMaximize2, FiFileText, FiFilm } from "react-icons/fi";
import SafeVideo from "./SafeVideo";

interface PdfPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
  websiteUrl?: string;
  mediaType?: "pdf" | "video";
}

export default function PdfPreviewModal({
  isOpen,
  onClose,
  pdfUrl,
  title,
  websiteUrl,
  mediaType,
}: PdfPreviewModalProps) {
  const isVideo = mediaType === "video" || pdfUrl.toLowerCase().endsWith(".mp4");

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl h-[85vh] bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950/80">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  {isVideo ? <FiFilm className="w-5 h-5" /> : <FiFileText className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="font-michroma text-sm sm:text-base font-bold text-white uppercase tracking-wide">
                    {title}
                  </h3>
                  <p className="text-[11px] font-mono text-zinc-400">
                    {isVideo ? "Official Campaign Production Media" : "Official Brand & Architecture Document"}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                {websiteUrl && (
                  <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-colors"
                  >
                    <span>Visit Website</span>
                    <FiExternalLink className="w-3.5 h-3.5 text-primary" />
                  </a>
                )}
                <a
                  href={pdfUrl}
                  download
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono bg-primary hover:bg-orange-600 text-white font-semibold shadow-md shadow-primary/25 transition-colors"
                >
                  <FiDownload className="w-3.5 h-3.5" />
                  <span>Download {isVideo ? "Video" : "PDF"}</span>
                </a>
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open in new tab"
                  className="p-2 rounded-xl text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 transition-colors"
                >
                  <FiMaximize2 className="w-4 h-4" />
                </a>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 transition-colors ml-1"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Media Body */}
            <div className="flex-1 bg-zinc-950 relative overflow-hidden flex items-center justify-center">
              {isVideo ? (
                <SafeVideo
                  src={pdfUrl}
                  controls
                  className="w-full h-full object-contain bg-black"
                />
              ) : (
                <iframe
                  src={`${pdfUrl}#toolbar=1&navpanes=0&view=FitH`}
                  className="w-full h-full border-0"
                  title={title}
                />
              )}
            </div>

            {/* Footer info bar */}
            <div className="px-6 py-3 border-t border-zinc-800 bg-zinc-950 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-400">
              <div className="flex items-center gap-2 font-mono text-[11px]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Media Asset • Architected & Produced by Manzarkash</span>
              </div>
              {websiteUrl && (
                <div className="font-mono text-[11px]">
                  Live Site:{" "}
                  <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {websiteUrl}
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
