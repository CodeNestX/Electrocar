'use client';

import { useState } from 'react';

interface Comment {

  id: string;

  author: string;

  content: string;

  date: string;

}

interface CommentSectionProps {

  articleSlug: string;

}

export default function CommentSection({ articleSlug }: CommentSectionProps) {

  const [comments, setComments] = useState<Comment[]>([

    {

      id: '1',

      author: 'رضا علوی',

      content: 'مقاله بسیار مفیدی بود. ممنون بابت بررسی دقیق باتری‌های نسل جدید خودروهای برقی.',

      date: '۱۰ مهر ۱۴۰۳',

    },

  ]);

  const [author, setAuthor] = useState('');

  const [content, setContent] = useState('');

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    if (!author.trim() || !content.trim()) return;

    const newComment: Comment = {

      id: Date.now().toString(),

      author,

      content,

      date: new Date().toLocaleDateString('fa-IR'),

    };

    setComments([newComment, ...comments]);

    setAuthor('');

    setContent('');

    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 3000);

  };

  return (

    <section className="mt-16 pt-10 border-t border-slate-800 text-right dir-rtl">

      <div className="flex items-center gap-3 mb-8">

        <div className="w-3 h-8 bg-emerald-500 rounded-full" />

        <h3 className="text-2xl font-bold text-white">

          دیدگاه‌ها <span className="text-emerald-400 text-lg font-normal">({comments.length})</span>

        </h3>

      </div>

      {/* فرم ثبت دیدگاه */}

      <form onSubmit={handleSubmit} className="mb-12 bg-slate-900/80 border border-slate-800/80 p-6 sm:p-8 rounded-3xl backdrop-blur-sm space-y-5">

        <h4 className="text-lg font-semibold text-slate-100 flex items-center gap-2">

          <span>ثبت دیدگاه جدید</span>

        </h4>

        {submitted && (

          <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-4 rounded-2xl text-sm">

            دیدگاه شما با موفقیت ثبت شد.

          </div>

        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div>

            <label className="block text-xs font-medium text-slate-400 mb-2">نام و نام خانوادگی</label>

            <input

              type="text"

              value={author}

              onChange={(e) => setAuthor(e.target.value)}

              placeholder="مثلاً: علی محمدی"

              className="w-full bg-slate-950/70 border border-slate-800 focus:border-emerald-500 rounded-2xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all duration-200"

              required

            />

          </div>

        </div>

        <div>

          <label className="block text-xs font-medium text-slate-400 mb-2">متن دیدگاه</label>

          <textarea

            value={content}

            onChange={(e) => setContent(e.target.value)}

            rows={4}

            placeholder="دیدگاه خود را در مورد این مقاله بنویسید..."

            className="w-full bg-slate-950/70 border border-slate-800 focus:border-emerald-500 rounded-2xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all duration-200 resize-none"

            required

          />

        </div>

        <button

          type="submit"

          className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-8 py-3 rounded-2xl text-sm transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95"

        >

          ارسال دیدگاه

        </button>

      </form>

      {/* لیست دیدگاه‌ها */}

      <div className="space-y-4">

        {comments.map((comment) => (

          <div

            key={comment.id}

            className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-3xl space-y-3 transition-all hover:border-slate-700/60"

          >

            <div className="flex justify-between items-center">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-sm">

                  {comment.author.charAt(0)}

                </div>

                <span className="font-semibold text-slate-200 text-sm">{comment.author}</span>

              </div>

              <span className="text-xs text-slate-500">{comment.date}</span>

            </div>

            <p className="text-slate-300 text-sm leading-relaxed pr-13">{comment.content}</p>

          </div>

        ))}

      </div>

    </section>

  );

}

