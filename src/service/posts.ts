import { readFile } from 'fs/promises';
import path from 'path';

export type Post = {
  id: string;
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export async function getAllPosts(): Promise<Post[]> {
  try {
    const filePath = path.join(process.cwd(), 'data', 'posts.json');
    const fileContent = await readFile(filePath, 'utf-8');
    const posts = JSON.parse(fileContent) as Post[];

    return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
  } catch (error) {
    console.error('Error reading or parsing posts:', error);
    return [];
  }
}
