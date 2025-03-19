const OpenButton = (url: string) => {
    return (
      <div>
        <a href={url} className="text-white bg-[#048DFF] text-[20px] font-[600] py-2 px-10 rounded-[50px] inline-block">
          열기
        </a>
      </div>
    );
};

export default OpenButton
