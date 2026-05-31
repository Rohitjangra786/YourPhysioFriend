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
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#0d9488] text-sm font-semibold uppercase tracking-widest">
            Patient Reviews
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#1b3a6b] mt-3 mb-4">
            What Our Patients Say
          </h2>
          {/* Google rating summary */}
          <div className="inline-flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-2xl px-6 py-3 mt-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              alt="Google"
              className="h-5 object-contain"
            />
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-bold text-[#1b3a6b]">5.0</span>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </div>
              <span className="text-gray-500 text-sm">· Google Reviews</span>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
            >
              {/* Reviewer info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0d9488] text-white flex items-center justify-center text-sm font-bold shrink-0">
                  {r.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[#1b3a6b] text-sm truncate">{r.name}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <StarRating rating={r.rating} />
                    <span className="text-gray-400 text-xs">{r.date}</span>
                  </div>
                </div>
                {/* Google icon */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                  alt="Google"
                  className="w-5 h-5 shrink-0"
                />
              </div>

              {/* Review text */}
              <p className="text-gray-600 text-sm leading-relaxed">&ldquo;{r.review}&rdquo;</p>
            </div>
          ))}
        </div>

        {/* CTA to Google Business */}
        <div className="text-center mt-12">
          <a
            href="https://share.google/M4qNPpCJKM7jRp8NK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[#0d9488] text-[#0d9488] hover:bg-[#0d9488] hover:text-white font-semibold px-7 py-3 rounded-full transition-all duration-200"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google"
              className="w-5 h-5"
            />
            View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
