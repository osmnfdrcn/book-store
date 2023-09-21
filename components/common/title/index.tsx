type Props = {
  text: string;
};

const Title = ({ text }: Props) => {
  return (
    <div
      className="w-full h-[50px] text-center "
      test-id="title div"
      data-testid="title-wrapper"
    >
      <p className="text-lg text-slate-500 font-extralight">{text}</p>
    </div>
  );
};

export default Title;
