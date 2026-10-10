"use client";

import { useCallback, useEffect, useState } from "react";

interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
}

interface CommentSectionEnProps {
  articleSlug: string;
}

const AUTO_MS = 6000;

// English comments section (testimonial carousel). Persian version: components/CommentSection.tsx
export default function CommentSectionEn({ articleSlug }: CommentSectionEnProps) {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      author: "Reza Alavi",
      content:
        "A very useful article. Thank you for the thorough review of next-generation electric car batteries.",
      date: "October 1, 2024",
    },
    {
      id: "2",
      author: "Sara Ahmadi",
      content:
        "The explanation of fast charging was clear and practical. I finally understand the difference between AC and DC.",
      date: "September 29, 2024",
    },
    {
      id: "3",
      author: "Mehdi Karimi",
      content:
        "Accurate and up-to-date content. I hope you publish more articles about electric cars.",
      date: "September 26, 2024",
    },
  ]);

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const total = comments.length;
  const current = comments[Math.min(index, total - 1)];

  const go = useCallback(
    (next: number) => setIndex(((next % total) + total) % total),
    [total]
  );

  // Auto-rotate
  useEffect(() => {
    if (paused || total < 2) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % total), AUTO_MS);
    return () => clearInterval(timer);
  }, [paused, total, index]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !content.trim()) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      author: author.trim(),
      content: content.trim(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
    };

    setComments([newComment, ...comments]);
    setIndex(0);
    setAuthor("");
    setContent("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section dir="ltr" className="mt-16 border-t border-slate-800 pt-10 text-left" data-article={articleSlug}>
      <div className="mb-8 flex items-center gap-3">
        <div className="h-8 w-3 rounded-full bg-emerald-500" />
        <h3 className="text-2xl font-bold text-white">
          Comments{" "}
          <span className="text-lg font-normal text-emerald-400">({total})</span>
        </h3>
      </div>

      {/* Testimonial carousel */}
      <div
        className="relative mb-12"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-emerald-500/10 blur-3xl" />

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-950/90 p-7 shadow-2xl sm:p-10">
          {/* Big quote mark */}
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="absolute end-6 top-6 h-14 w-14 text-emerald-400/15 sm:h-20 sm:w-20"
            fill="currentColor"
          >
            <path d="M9.6 5C6.5 6.3 4 9 4 13v6h6v-6H7c0-2 1.1-3.6 2.9-4.5L9.6 5Zm10 0c-3.1 1.3-5.6 4-5.6 8v6h6v-6h-3c0-2 1.1-3.6 2.9-4.5L19.6 5Z" />
          </svg>

          <div key={current.id} className="comment-slide relative min-h-[150px]">
            <p className="max-w-3xl text-base leading-9 text-slate-200 sm:text-lg">
              {current.content}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-lg font-bold text-emerald-300">
                {current.author.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-white">{current.author}</div>
                <div className="text-xs text-slate-500">{current.date}</div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center">
            <div className="flex items-center gap-2" role="tablist" aria-label="Comments">
              {comments.map((c, i) => (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Comment ${i + 1}`}
                  onClick={() => go(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-emerald-400" : "w-2 bg-slate-600 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Comment form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-3xl border border-slate-800/80 bg-slate-900/80 p-6 backdrop-blur-sm sm:p-8"
      >
        <h4 className="text-lg font-semibold text-slate-100">Leave a comment</h4>

        {submitted && (
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-400">
            Your comment was submitted successfully.
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-xs font-medium text-slate-400">Full name</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="e.g. John Smith"
              className="w-full rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition-all duration-200 placeholder:text-slate-600 focus:border-emerald-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs font-medium text-slate-400">Your comment</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            placeholder="Write your thoughts about this article..."
            className="w-full resize-none rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition-all duration-200 placeholder:text-slate-600 focus:border-emerald-500"
            required
          />
        </div>

        <button
          type="submit"
          className="rounded-2xl bg-emerald-500 px-8 py-3 text-sm font-bold text-slate-950 transition-all duration-200 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95"
        >
          Submit comment
        </button>
      </form>

      <style>{`
        .comment-slide { animation: commentIn .5s ease both; }
        @keyframes commentIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
        @media (prefers-reduced-motion: reduce) { .comment-slide { animation: none; } }
      `}</style>
    </section>
  );
}
