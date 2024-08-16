import { VscSend } from "react-icons/vsc";
import qrcode from '../qr.webp'
import googleplay from '../googleplay.webp'
import appstore from '../appstore.webp'
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";


export default function Footer() {
  return (
    <div className='bg-stone-950 mt-4'>
      <div className='max-w-screen-2xl px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto text-white py-10'>

        <div className="*:my-3 text-stone-300">
          <p className="text-2xl text-white">Exclusive</p>
          <p className="text-lg text-white">Subscribe</p>
          <p className="text-sm font-thin">Get 10% off your first order</p>
          <div className="relative w-fit">
            <input type="text" placeholder="Enter your email" className="outline-none py-1 px-3 rounded-sm bg-stone-950 border border-white text-sm" />
            <VscSend className="absolute top-1/2 translate-y-[-50%] right-2.5" />
          </div>
        </div>

        <div className="*:my-3 text-stone-300">
          <p className="text-2xl text-white">Support</p>
          <p className="text-sm font-thin">111 Abdel-Salam aref, Beni-suef, DH 1515, Egypt</p>
          <p className="text-sm font-thin">support@Karim.com</p>
          <p className="text-sm font-thin">+20123456789</p>
        </div>

        <div className="*:my-3 text-stone-300">
          <p className="text-2xl text-white">Account</p>
          <p className="text-sm font-thin">My Account</p>
          <p className="text-sm font-thin">Login / Register</p>
          <p className="text-sm font-thin">Cart</p>
          <p className="text-sm font-thin">Wishlist</p>
          <p className="text-sm font-thin">Shop</p>
        </div>

        <div className="*:my-3 text-stone-300">
          <p className="text-2xl text-white">Quick Link</p>
          <p className="text-sm font-thin">Privacy Policy</p>
          <p className="text-sm font-thin">Terms Of Use</p>
          <p className="text-sm font-thin">FAQ</p>
          <p className="text-sm font-thin">Contact</p>
        </div>

        <div className="*:my-3 text-stone-300">
          <p className="text-2xl text-white">Download App</p>
          <p className="text-xs font-thin text-stone-400">Save $3 with App</p>
          <div className="flex gap-1">
            <img src={qrcode} alt="Qr Code" className="w-16"/>
            <div>
              <img src={googleplay} alt="Google play" className="w-24 mb-1"/>
              <img src={appstore} alt="App store" className="w-24"/>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <FaFacebookSquare className="size-5" />
            <FaLinkedin className="size-5"/>
            <IoLogoInstagram className="size-6"/>
            <CiTwitter className="size-6"/>
          </div>
        </div>

      </div>
    </div>
  )
}
