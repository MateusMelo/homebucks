export default function Container() {
  return (
    <div className="my-[3.2rem] px-0 mx-auto max-w-[1440px]">
      <div className="md:flex mx-auto bg-[#d4e9e2]">
        <div className="flex justify-center items-center md:w-[calc(100%*(6/12))]">
          <img
            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-79280.jpg"
            alt="Pumpkin Spice Latte pictured with a phone featuring the Starbucks app surrounded by gold stars."
          ></img>
        </div>
        <div className="p-[3.2rem] flex items-center justify-center text-center md:w-[calc(100%*(6/12))] bg-[#d4e9e2]">
          <div className="max-w-[73%]">
            <h1 className="font-semibold text-4xl mb-10">
              Fall at your fingertips
            </h1>
            <div className="sm:text-[19px]">
              Ordering your fall favorites is a snap with the app. Join
              Starbucks® Rewards and tap into fall.
            </div>
            <button className="bg-transparent font-semibold py-2 px-7 border border-black rounded-full min-w-35 min-h-35 mt-10 hover:bg-black/[.1]">
              Join now
            </button>
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-row-reverse mx-auto my-[3.2rem] px-0 bg-[#006241]">
        <div className="flex justify-center items-center md:w-[calc(100%*(6/12))]">
          <img
            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-79282.jpg"
            alt="Clear mug contains a coffee drink with foamy top, sitting next to layered iced coffee drink in a tall glass."
          ></img>
        </div>
        <div className="py-[3.2rem] flex items-center justify-center text-center md:w-[calc(100%*(6/12))]">
          <div className="max-w-[73%]">
            <h1 className="sm:text-5xl lg:text-8xl font-semibold text-white mb-10">
              Layers of baked apple yum
            </h1>
            <div className="sm:text-[24px] text-white">
              Try the Apple Crisp Oatmilk Macchiato, now nondairy and with
              Starbucks® Blonde Espresso.
            </div>
            <button className="bg-transparent font-semibold py-2 px-7 border border-white text-white rounded-full min-w-35 min-h-35 mt-10 hover:bg-white/[.12]">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="md:flex mx-auto my-[3.2rem] px-0 bg-[#006241]">
        <div className="flex justify-center items-center md:w-[calc(100%*(6/12))]">
          <img
            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-79281.jpg"
            alt="A coffee drink with whip cream topping in a clear mug next to a marbled coffee drink in a tall, clear glass with thick foam topping."
          ></img>
        </div>
        <div className="py-[3.2rem] flex items-center justify-center text-center md:w-[calc(100%*(6/12))]">
          <div className="max-w-[73%]">
            <h1 className="sm:text-5xl lg:text-8xl font-semibold mb-10 text-white">
              Welcome home, pumpkin
            </h1>
            <div className="sm:text-[24px] text-white">
              Fall favorites return with the blissful Pumpkin Spice Latte and
              smooth Pumpkin Cream Cold Brew.
            </div>
            <button className="bg-transparent font-semibold py-2 px-7 border border-white text-white rounded-full min-w-35 min-h-35 mt-10 hover:bg-white/[.12]">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-row-reverse mx-auto my-[3.2rem] px-0 bg-[#006241]">
        <div className="flex justify-center items-center md:w-[calc(100%*(6/12))]">
          <img
            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-79283.jpg"
            alt="Three baked items form a triangular shape: Muffin with creamy center, slice of a loaf cake and frosted scone."
          ></img>
        </div>
        <div className="py-[3.2rem] flex items-center justify-center text-center md:w-[calc(100%*(6/12))]">
          <div className="max-w-[73%]">
            <h1 className="sm:text-5xl lg:text-8xl font-semibold mb-10 text-white">
              Picks of the patch
            </h1>
            <div className="sm:text-[24px] text-white">
              Choose a comforting classic: Pumpkin Cream Cheese Muffin, Pumpkin
              & Pepita Loaf or Pumpkin Scone.
            </div>
            <button className="bg-transparent font-semibold py-2 px-7 border border-white text-white rounded-full min-w-35 min-h-35 mt-10 hover:bg-white/[.12]">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="md:flex mx-auto my-[3.2rem] px-0 bg-[#006241]">
        <div className="flex justify-center items-center md:w-[calc(100%*(6/12))]">
          <img
            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-79389.jpg"
            alt="A colorfully illustrated coffee bag with plants in the foreground and a mountain in the background."
          ></img>
        </div>
        <div className="py-[3.2rem] flex items-center justify-center text-center md:w-[calc(100%*(6/12))]">
          <div className="max-w-[73%]">
            <h1 className="sm:text-5xl lg:text-8xl font-semibold mb-10 text-white">
              It’s back—and oh, so lovely
            </h1>
            <div className="sm:text-[20px] text-white">
              Fill your cup with Guatemala Casi Cielo®, a medium roast coffee
              with notes of Meyer lemon and cocoa nibs.
            </div>
            <button className="bg-transparent font-semibold py-2 px-7 border border-white text-white rounded-full min-w-35 min-h-35 mt-10 hover:bg-white/[.12]">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
