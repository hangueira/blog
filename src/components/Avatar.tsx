import Image from 'next/image';
import avatarImage from '../../public/images/profile.png';
import Link from 'next/link';
export default function Avatar() {
  return (
    <section className='flex flex-col items-center'>
      <Image
        className='mt-2 rounded-3xl'
        src={avatarImage}
        alt='Picture of the author'
        width={300}
        height={300}
      ></Image>
      <h2 className='mt-2 text-3xl font-bold'>{"Hi, I'am Han kyung su"}</h2>
      <h3 className='text-xl font-semibold'>Full-Stack Enginner</h3>
      <p>캠핑을 좋아하는 사람, 캠퍼처럼 코딩하는 사람</p>
      <Link href='/contact'>
        <button className='p-2 m-2 bg-yellow-500 rounded-xl'>Contact Me</button>
      </Link>
    </section>
  );
}
