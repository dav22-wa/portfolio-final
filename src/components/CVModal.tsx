import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import { X, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CVModal({ isOpen, onClose }: CVModalProps) {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-[500] flex items-center justify-center bg-black/90 p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onContextMenu={(e) => e.preventDefault()} // Block right-click
        >
          <div className="absolute inset-0" onClick={onClose} />
          
          <motion.div 
            className="relative w-full max-w-4xl h-full flex flex-col bg-[#111318] rounded-xl overflow-hidden shadow-2xl border border-white/10 select-none"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#0b0b0b]">
              <h3 className="text-white font-display font-medium tracking-wide">David Waihenya - CV</h3>
              <button 
                onClick={onClose}
                className="text-white/50 hover:text-brand-gold transition-colors p-1"
                aria-label="Close CV"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Document Viewer */}
            <div className="flex-1 overflow-auto bg-[#1a1c23] p-4 flex justify-center custom-scrollbar">
              <Document
                file="/david-waihenya-cv.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
                loading={
                  <div className="flex flex-col items-center justify-center h-64 text-brand-gold">
                    <Loader2 className="w-8 h-8 animate-spin mb-4" />
                    <p className="text-sm font-medium tracking-widest uppercase">Loading CV...</p>
                  </div>
                }
                error={
                  <div className="flex flex-col items-center justify-center h-64 text-red-400">
                    <p className="text-sm font-medium tracking-widest uppercase mb-2">Failed to load CV</p>
                    <p className="text-xs opacity-70 text-center max-w-sm">
                      Please make sure you have uploaded "david-waihenya-cv.pdf" into the public folder.
                    </p>
                  </div>
                }
                className="select-none"
              >
                <Page 
                  pageNumber={pageNumber} 
                  renderTextLayer={false} 
                  renderAnnotationLayer={false}
                  className="shadow-xl"
                  width={Math.min(window.innerWidth - 64, 800)}
                />
              </Document>
            </div>

            {/* Pagination Controls */}
            {numPages && numPages > 1 && (
              <div className="flex items-center justify-between p-4 border-t border-white/10 bg-[#0b0b0b]">
                <button 
                  onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
                  disabled={pageNumber <= 1}
                  className="flex items-center gap-2 text-white/70 hover:text-brand-gold disabled:opacity-30 disabled:hover:text-white/70 transition-colors text-sm font-medium uppercase tracking-wider"
                >
                  <ChevronLeft className="w-5 h-5" /> Prev
                </button>
                <span className="text-white/50 text-sm font-mono tracking-widest">
                  {pageNumber} / {numPages}
                </span>
                <button 
                  onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages))}
                  disabled={pageNumber >= numPages}
                  className="flex items-center gap-2 text-white/70 hover:text-brand-gold disabled:opacity-30 disabled:hover:text-white/70 transition-colors text-sm font-medium uppercase tracking-wider"
                >
                   Next <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
