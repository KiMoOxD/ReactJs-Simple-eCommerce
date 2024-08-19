import { DateFormater } from "../../helper/utils";
import image from "../../images/pngwing.png";
import { useEffect, useState } from "react";

export default function ProductReviews({ product }) {
  let [content, setContent] = useState(product.description);

  useEffect(() => {
    setContent(product.description);
  }, [product]);

  if (typeof content !== "string") {
    content = content.map((review) => {
      return (
        <div
          key={review.reviewerName + review.comment}
          className="flex my-4 gap-2"
        >
          <img className="size-10" src={image} alt="" />
          <div className="flex w-full bg-stone-100 p-2 flex-col gap-2">
            <div className="flex text-sm">
              <div className="flex-grow">
                <p>{review.reviewerName}</p>
                <p className="text-xs">{review.reviewerEmail}</p>
              </div>
              <p>{DateFormater(review.date)}</p>
            </div>
            <p className="text-sm">{review.comment}</p>
          </div>
        </div>
      );
    });
  }

  return (
    <>
      <div className="flex *:flex-1 *:text-center *:cursor-pointer">
        <div
          className={`border-b-2 py-1 hover:border-slate-500 hover:border-b ${
            content === product.description && "border-slate-500"
          }`}
          onClick={() => setContent(product.description)}
        >
          Product Details
        </div>
        <div
          className={`border-b-2 py-1 hover:border-slate-500 hover:border-b ${
            content === product.reviews && "border-slate-500"
          }`}
          onClick={() => setContent(product.reviews)}
        >
          Reviews
        </div>
      </div>
      <div
        className={`h-[200px] overflow-x-hidden overflow-y-auto ${
          typeof content === "string" ? "p-4 bg-slate-50" : ""
        }`}
      >
        {content}
      </div>
    </>
  );
}
