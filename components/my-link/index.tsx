import Link from 'next/link';

export default function MyLink(props: any) {
  return (
    <Link
      scroll={false}
      {...props}
    />
  )
}