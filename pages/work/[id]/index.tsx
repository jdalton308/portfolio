import { useRouter } from 'next/router'

export default function ProjectPage() {
  const router = useRouter();
  const id = router.query.id as string;

  return (
    <div>
      Project page:
      <div>
        {id}
      </div>
    </div>
  )
}