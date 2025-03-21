const Footer = () => {
  return (
    <div className="bg-black text-[#737373] py-14 font-[400] text-[25px] text-center">
      <p className="mb-4">
        Copyright eunchan 2025<br />
        Built in React using TypeScript
      </p>
      <div className="flex justify-center gap-8 text-[20px]">
        <p>Tel: 010-4094-2815</p>
        <a href="https://velog.io/@eunchan/posts" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Velog
        </a>
        <a href="https://github.com/eunchan2815" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Github
        </a>
      </div>
    </div>
  );
}

export default Footer
