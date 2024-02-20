import Image from 'next/image';
const loading = () => {
  return (
    <div className="text-center mx-auto">
      <Image src='/loading.gif' width={200} height={200} alt="loading" />
    </div>
  )
}

export default loading