import React from 'react'
import facebook from'../assets/facebook.png'
import twitter from '../assets/twitter.png'
import insta from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'

const Footer = () => {
  return (
    <div>
      <footer className="p-6 bg-black text-white  mb-auto " >
	<div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
		<div className="flex flex-col space-y-6">
			<h2 className="font-medium">Exclusive</h2>
			<div className="flex flex-col space-y-4 text-sm dark:text-gray-400">
				<a rel="#" href="#">Subscribe</a>
				<a rel="#" href="#">Get 10% off your first order</a>
				<input type="text" placeholder='Enter your e-mail'className="w-60 h-6"/>
			</div>
		</div>
		<div className="flex flex-col space-y-6">
			<h2 className="font-medium">Support</h2>
			<div className="flex flex-col space-y-4 text-sm dark:text-gray-400">
				<a rel="#" href="#">111 Bijoy sarani, Dhaka,<br />DH 1515, Bangladesh.</a>
				<a rel="#" href="#">exclusive@gmail.com</a>
				<a rel="#" href="#">+88015-88888-9999</a>
			</div>
		</div>
		<div className="flex flex-col space-y-6">
			<h2 className="font-medium">Account</h2>
			<div className="flex flex-col space-y-4 text-sm dark:text-gray-400">
				<a rel="#" href="#">My Account</a>
				<a rel="#" href="#">Login / Register</a>
				<a rel="#" href="#">Cart</a>
				<a rel="#" href="#">Wishlist</a>
				<a rel="#" href="#">Shop</a>
			</div>
		</div>
		<div className="flex flex-col space-y-6">
			<h2 className="font-medium">Quick Link</h2>
			<div className="flex flex-col space-y-4 text-sm dark:text-gray-400">
				<a rel="#" href="#">Privacy Policy</a>
				<a rel="#" href="#">Terms Of Use</a>
				<a rel="#" href="#">FAQ</a>
				<a rel="#" href="#">Contact</a>
			</div>
		</div>
        <div className="flex flex-col space-y-6">
			<h2 className="font-medium">Download App</h2>
			<div className="flex flex-col space-y-4 text-sm dark:text-gray-400">
				<a rel="#" href="#">Save $3 with App New User Only</a>
				<a rel="#" href="#" className="flex md:order-2 md:space-x-4" >
					{/* <img src={facebook} alt="" /><img src={twitter} alt="" /><img src={insta} alt="" /><img src={linkedin} alt="" /> */}
					</a>
				
			</div>
		</div>
	</div>
	<div className="flex items-center justify-center px-6 pt-12 text-sm">
		<span className="text-gray-500">© Copyright Rimel 2022. All right reserved</span>
	</div>
</footer>
    </div>
  )
}

export default Footer
