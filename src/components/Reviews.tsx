import { Star } from "lucide-react";

const reviews = [
  {
    name: "Priya Sharma",
    rating: 5,
    date: "2 weeks ago",
    avatar: "PS",
    review:
      "Dr. Deven is an exceptional physiotherapist! I had severe lower back pain for months and after just 6 sessions I'm completely pain-free. His approach is very systematic and personalized. Highly recommended!",
  },
  {
    name: "Rahul Verma",
    rating: 5,
    date: "1 month ago",
    avatar: "RV",
    review:
      "Excellent clinic! Went for knee pain after a sports injury. Dr. Deven explained everything clearly and the dry needling treatment was very effective. Back to playing cricket in 3 weeks!",
  },
  {
    name: "Sunita Agarwal",
    rating: 5,
    date: "3 weeks ago",
    avatar: "SA",
    review:
      "Best physiotherapy experience in Gurugram. Dr. Deven came to our office for a corporate wellness session and the posture correction exercises were a game changer for our team. Very professional!",
  },
  {
    name: "Amit Khanna",
    rating: 5,
    date: "1 month ago",
    avatar: "AK",
    review:
      "After my knee surgery, Dr. Deven guided me through the entire rehabilitation process. His post-surgery rehab program is outstanding. I regained full mobility faster than expected!",
  },
  {
    name: "Deepika Singh",
    rating: 5,
    date: "2 months ago",
    avatar: "DS",
    review:
      "I had cervical spondylosis and was in constant pain. Dr. Deven's manual therapy and targeted exercises gave me relief within a week. Very knowledgeable and patient doctor.",
  },
  {
    name: "Vikram Malhotra",
    rating: 5,
    date: "3 months ago",
    avatar: "VM",
    review:
      "Wonderful experience! Dr. Deven treated my frozen shoulder with great expertise. The clinic has a warm atmosphere and the treatment was absolutely effective. 5 stars without any doubt!",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "fill-[#FBBC05] text-[#FBBC05]" : "text-gray-200 fill-gray-200"}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-10 md:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 md:mb-10">
          <span className="text-[#0d9488] text-xs font-semibold uppercase tracking-widest">Patient Reviews</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b3a6b] mt-2 mb-3" style={{ fontFamily: "var(--font-space)" }}>
            What Our Patients in Gurgaon Say
          </h2>
          {/* Google rating summary */}
          <div className="inline-flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-2xl px-4 py-2.5 mt-1">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-4 object-contain" />
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold text-[#1b3a6b]">5.0</span>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </div>
              <span className="text-gray-500 text-xs">· Google Reviews</span>
            </div>
          </div>
        </div>

        {/* Mobile: full-width snap carousel (1 card at a time); Desktop: grid */}
        <div className="flex gap-4 overflow-x-auto pb-3 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-visible md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5 snap-x snap-mandatory scroll-smooth">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3 w-[calc(100vw-2rem)] shrink-0 md:w-auto md:shrink snap-center"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0d9488] text-white flex items-center justify-center text-sm font-bold shrink-0">
                  {r.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[#1b3a6b] text-sm">{r.name}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <StarRating rating={r.rating} />
                    <span className="text-gray-400 text-xs">{r.date}</span>
                  </div>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-4 h-4 shrink-0" />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">&ldquo;{r.review}&rdquo;</p>
            </div>
          ))}
        </div>

        {/* Swipe hint on mobile */}
        <p className="text-center text-gray-400 text-xs mt-3 md:hidden">← Swipe to read more reviews →</p>

        <div className="text-center mt-6">
          <a href="https://share.google/M4qNPpCJKM7jRp8NK" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-[#0d9488] text-[#0d9488] hover:bg-[#0d9488] hover:text-white font-semibold px-6 py-2.5 rounded-full transition-all text-sm">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-4 h-4" />
            View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
