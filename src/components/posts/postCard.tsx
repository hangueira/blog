import { Post } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';

type Props = { post: Post };

export default function PostCard({
  post: { title, description, date, category, path },
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <article className='flex flex-col overflow-hidden rounded-md shadow-lg item-center'>
        <Image
          className='mx-auto'
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        ></Image>
        <div className='flex flex-col items-center py-4'>
          <time className='self-end mr-4 '>{date.toString()}</time>
          <h3 className='text-lg font-bold'>{title}</h3>
          <p className='w-full text-center truncate'>{description}</p>
          <span className='px-2 text-sm bg-green-100 rounded-lg mg-2'>
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
}
