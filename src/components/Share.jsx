import { FaShare, FaWhatsapp } from "react-icons/fa6";

const Share = () => {
  
const handleShare = () => {
  if (navigator.share) {
    navigator.share({
      title: "Myanmar Books Hub",
      text: "မည်သူမဆို စနစ်သစ် ကျောင်းသုံးစာအုပ်များ၊ အဖြေစုံများ ပထမတန်း မှ ဒွါဒသမတန်း အထိ၊ အစ္စလာမ်ဘာသာစာအုပ်များနှင့် အခြားစာအုပ်များကို လေ့လာရန် *Myanmar Books Hub* တွင်  အလွယ်တကူ ဒေါင်းလုဒ်လုပ်နိုင်ပါသည်။",
      url: window.location.href,
    })
      .then(() => console.log("Shared successfully!"))
      .catch((error) => console.error("Error sharing:", error));
  } else {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => alert("Link copied to clipboard!"))
      .catch((error) => console.error("Error copying link:", error));
  }
};

return (
  <>
  <p className="text-gray-700 text-center my-4 ">
  Help others discover free PDF books by sharing this site!
</p>
  <div className="flex flex-row justify-center items-center gap-6 my-4 justify-center">
    {/* Web Share / Copy Link */}
    <button
    aria-label='Share this website'
      onClick={handleShare}
      className="rounded-md bg-green-500 text-white py-1 px-4 transition duration-300 hover:bg-green-700">
      <FaShare size='20'/>
    </button>

    {/* Social Media Links */}
    <div>
      <a
      aria-label='Share this website on Whatsapp'
        href={`https://wa.me/?text=${encodeURIComponent(
          "မည်သူမဆို စနစ်သစ် ကျောင်းသုံးစာအုပ်များ၊ အဖြေစုံများ ပထမတန်း မှ ဒွါဒသမတန်း အထိ၊ အစ္စလာမ်ဘာသာစာအုပ်များနှင့် အခြားစာအုပ်များကို လေ့လာရန် *Myanmar Books Hub* တွင်  အလွယ်တကူ ဒေါင်းလုဒ်လုပ်နိုင်ပါသည်။ : " + window.location.href
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center rounded-md bg-zinc-200 text-white py-1 px-4 transition duration-300 hover:bg-zinc-300">
        <FaWhatsapp size='20' className='text-green-600'/>
      </a>
    </div>
  </div>
  </>
);
}

export default Share;