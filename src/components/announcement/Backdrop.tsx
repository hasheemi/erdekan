export default function Backdrop() {
  return (
    <div
      aria-hidden
      className='pointer-events-none absolute inset-0 overflow-hidden'
    >
      <div className='absolute -top-24 -left-24 size-72 rounded-full bg-yellow-200/40 blur-3xl' />
      <div className='absolute top-1/3 -right-20 size-80 rounded-full bg-primary-100/10 blur-3xl' />
      <div className='absolute bottom-0 left-1/2 size-96 -translate-x-1/2 rounded-full bg-green-200/30 blur-3xl' />
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(192,159,115,0.28)_1px,transparent_0)] [background-size:24px_24px]' />
    </div>
  );
}