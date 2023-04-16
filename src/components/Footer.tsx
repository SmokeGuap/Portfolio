import SocialMedia from './SocialMedia';

function Footer() {
  return (
    <footer className='h-64 bg-red pt-10'>
      <div className='w-5/6 mx-auto'>
        <SocialMedia />
        <div className='md:flex justify-center md:justify-between text-center '>
          <p className='font-semibold text-2xl text-yellow'>Kirill Ryzhkov</p>
          <p className='text-md text-yellow'>
            ©2023 KIRILL. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
