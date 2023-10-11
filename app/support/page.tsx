import Script from "next/script";

const Support = () => {
    return (
        <div>
            <p className="text-white">Support</p>
            <div className="w-[20%]">
                <iframe
                    data-tally-src="https://tally.so/embed/3xDyqG?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                    loading="lazy"
                    width="100%"
                    height="381"
                    // frameborder="0"
                    // marginheight="0"
                    // marginwidth="0"
                    title="We'd love to help"
                ></iframe>
            </div>

            <Script
                id="tally-js"
                src="https://tally.so/widgets/embed.js"
                // onLoad={() => {
                //     Tally.loadEmbeds();
                // }}
            />
        </div>
    );
};

export default Support;
