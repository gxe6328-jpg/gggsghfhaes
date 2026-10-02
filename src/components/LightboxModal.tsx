import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn, ZoomOut } from "lucide-react";

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  zoomLevel: number;
  setZoomLevel: React.Dispatch<React.SetStateAction<number>>;
}

export default function LightboxModal({
  isOpen,
  onClose,
  imageSrc,
  zoomLevel,
  setZoomLevel,
}: LightboxModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black/90 p-4 backdrop-blur-md select-none"
          onClick={onClose}
          id="photo-lightbox-backdrop"
        >
          {/* Modal Controls */}
          <div
            className="absolute top-4 right-4 flex items-center gap-2 z-[210]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setZoomLevel((prev) => Math.min(3, prev + 0.5))}
              disabled={zoomLevel >= 3}
              className="p-3 bg-white/10 hover:bg-white/20 active:scale-95 text-white rounded-full transition-all duration-200 disabled:opacity-30 cursor-pointer"
              title="Приблизить"
              id="btn-lightbox-zoomin"
            >
              <ZoomIn className="h-5 w-5" />
            </button>
            <button
              onClick={() => setZoomLevel((prev) => Math.max(1, prev - 0.5))}
              disabled={zoomLevel <= 1}
              className="p-3 bg-white/10 hover:bg-white/20 active:scale-95 text-white rounded-full transition-all duration-200 disabled:opacity-30 cursor-pointer"
              title="Отдалить"
              id="btn-lightbox-zoomout"
            >
              <ZoomOut className="h-5 w-5" />
            </button>
            <button
              onClick={onClose}
              className="p-3 bg-white/15 hover:bg-white/25 active:scale-95 text-white rounded-full transition-all duration-200 cursor-pointer"
              title="Закрыть"
              id="btn-lightbox-close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Main Image Container */}
          <motion.div
            initial={{ scale: 0.95, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-full max-h-[80vh] overflow-hidden rounded-2xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              drag={zoomLevel > 1}
              dragConstraints={{ left: -150, right: 150, top: -150, bottom: 150 }}
              dragElastic={0.1}
              className={zoomLevel > 1 ? "cursor-grab active:cursor-grabbing" : ""}
            >
              <motion.img
                src={imageSrc}
                alt="Врач-психотерапевт Веляев Павел Александрович"
                animate={{ scale: zoomLevel }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl max-h-[70vh] object-contain rounded-xl shadow-2xl cursor-zoom-in"
                onClick={() => {
                  setZoomLevel((prev) => (prev === 1 ? 2 : 1));
                }}
              />
            </motion.div>
          </motion.div>

          {/* Instruction Footer */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs font-sans tracking-wide bg-white/10 border border-white/10 px-5 py-2 rounded-full backdrop-blur-md text-center pointer-events-none">
            {zoomLevel > 1
              ? "Перетаскивайте изображение или нажмите для сброса"
              : "Нажмите на изображение для увеличения"}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
