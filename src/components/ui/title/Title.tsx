interface Props {
  title: string;
  subTitle: string;
  className: string;
}

export const Title = ({ title, subTitle, className }: Props) => {
  return (
    <div className={`mt-3 ${className}`}>
      <h1 className="my-10 text-4xl font-semibold">{title}</h1>

      {subTitle && <h3 className="mb-5 text-5xl">{subTitle}</h3>}
    </div>
  );
};
