import { PostBlock } from './components/PostBlock';

export default function Page ({ params }: { params: { id: string } }) {
    
      return <section>
                <PostBlock id={params.id} />
            </section>
    }

